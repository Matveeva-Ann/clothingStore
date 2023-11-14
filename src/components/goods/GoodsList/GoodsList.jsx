import GoodItem from '../GoodItem/GoodItem';
import { GoodsCollectionTitle, GoodsCollectionWrapper, GoodsItemStyle, GoodsListStyle } from './GoodsList.styled';
import { useEffect, useState } from 'react';
import sendRequest from 'helpers/sendRequest';
import { urlGoods } from 'constants/urlGoodsCollection';
import { useLocalStorage } from 'helpers/hooks/useLocalStorage';
import PropTypes from 'prop-types';
import Loading from 'pages/Additionals/Loading/Loading';
import ErrorRequest from 'pages/Additionals/ErrorRequest/ErrorRequest';

const Status = {
  LOADING: 'loading',
  RESOLVED: 'resolved',
  REJECTED: 'rejected'
}

export default function GoodsList({ category, setFavoriteCount, countBasket, favoriteCount }) {
  const [goodsCollection, setGoodsCollection] = useState([]);
  const [status, setStatus] = useState(Status.LOADING);
  const [, setLocalStorageCollection] = useLocalStorage('favorite');

  // змінюємо масив товарів залежно від обраних користувачем товарів
  function updateGoodsWithFavorites(dataArr) {
    const favoriteData = JSON.parse(window.localStorage.getItem('favorite')) || [];
    const favoriteSkus = favoriteData.map(elem => elem.sku) || [];
    const updatedDataArr = dataArr.map(elem => ({
      ...elem,
      favorite: favoriteSkus.includes(elem.sku)
    }))
    return updatedDataArr;
  }
  // запит на отримання товарів з сервера з фільтрацією по категоріям
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await sendRequest(urlGoods);
        let dataArr = [];
        if (category === 'All') {
          dataArr = data;
        } else {
          dataArr = data.filter((elem) => elem.category === category);
        }
        setGoodsCollection(updateGoodsWithFavorites(dataArr));
        setStatus(Status.RESOLVED);
      } catch (error) {
        setStatus(Status.REJECTED);
      }
    };

    fetchData()
  }, [category])

  //перерендер взалежності від того чи були видалені товари з обраного
  useEffect(() => {
    setGoodsCollection(updateGoodsWithFavorites(goodsCollection))
  }, [favoriteCount])

  //додати в вибрані
  function addToFavorite(index) {
    const updateArr = [...goodsCollection];
    updateArr[index] = { ...updateArr[index], favorite: !updateArr[index].favorite };
    setGoodsCollection(updateArr)

    const favoritesArr = updateArr.filter((el) => el.favorite)
    setFavoriteCount(favoritesArr.length)
    setLocalStorageCollection(favoritesArr)
  }

  //додати в карзину
  function addToBasket(good) {
    good.amount = 1;
    const basketArr = JSON.parse(window.localStorage.getItem('basket')) || [];
    const existingItem = basketArr.find(elem => elem.sku === good.sku);

    existingItem ? existingItem.amount++ : basketArr.push(good);

    window.localStorage.setItem('basket', JSON.stringify(basketArr))
    countBasket(basketArr.reduce((accum, elem) => accum + Number(elem.amount), 0))
  }

  if (status === 'loading') {
    return <Loading></Loading>
  } else if (status === 'resolved') {
    return (
      <GoodsCollectionWrapper>
        {category === 'All'
          ? <GoodsCollectionTitle>Wardrobe for Everyone</GoodsCollectionTitle>
          : <GoodsCollectionTitle>For {category}</GoodsCollectionTitle>
        }
        <GoodsListStyle>
          {goodsCollection.map((elem, index) => (
            <GoodsItemStyle key={elem.sku}>
              <GoodItem good={elem}
                onClickFavorite={() => addToFavorite(index)}
                onClickBasket={() => addToBasket(elem)}
                countBasket={countBasket}
              ></GoodItem>
            </GoodsItemStyle>))
          }
        </GoodsListStyle>
      </GoodsCollectionWrapper>
    )
  } else if (status === 'rejected'){
    return <ErrorRequest></ErrorRequest>
  }
}

GoodsList.propTypes = {
  category: PropTypes.string,
  countFavorite: PropTypes.func,
  countBasket: PropTypes.func,
}