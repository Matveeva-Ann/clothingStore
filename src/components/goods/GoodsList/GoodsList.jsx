import GoodItem from '../GoodItem/GoodItem';
import {
  GoodsCollectionTitle,
  GoodsCollectionWrapper,
  GoodsItemStyle,
  GoodsListStyle,
} from './GoodsList.styled';
import { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Loading from 'pages/Additionals/Loading/Loading';
import ErrorRequest from 'pages/Additionals/ErrorRequest/ErrorRequest';
import { useDispatch, useSelector } from 'react-redux';
import { useGetAllGoodsQuery } from 'redux/api';
import { favoriteGoods } from 'redux/favoriteSlice';
import AppContext from 'context/context';
import GoodItemForList from '../GoodItemForList/GoodItemForList';
import { useNavigate } from 'react-router-dom';

export default function GoodsList({ category }) {
  const [goodsCollection, setGoodsCollection] = useState([]);
  const { data, error, isFetching } = useGetAllGoodsQuery();

  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorite);
  const { value } = useContext(AppContext);
  const isLogin = useSelector(store => store.login);
  const navigate = useNavigate();

  useEffect(() => {
    const filterGoodsByCategory = goods =>
      category !== 'All'
        ? goods.filter(elem => elem.category === category)
        : goods;
    if (data) {
      setGoodsCollection(updateGoodsWithFavorites(filterGoodsByCategory(data)));
    }
  }, [category, data]);

  // змінюємо масив товарів залежно від обраних користувачем товарів
  function updateGoodsWithFavorites(dataArr) {
    if(isLogin){
      const favoriteSkus = favorites.map(elem => elem.sku) || [];
      const updatedDataArr = dataArr.map(elem => ({
        ...elem,
        favorite: favoriteSkus.includes(elem.sku),
      }));
      return updatedDataArr;
    }
    return dataArr;
  }

  //додати/видалит вибрані
  function addToFavorite(index, good) {
    if(isLogin){
      const updatedFavorites = toggleFavorite([...favorites], good);
      const newGoodsCollection = updateGoodsCollection(
        [...goodsCollection],
        index
      );
  
      setGoodsCollection(newGoodsCollection);
      dispatch(favoriteGoods(updatedFavorites));
    }else{
      navigate('/loginPage', {state: '/'})
    }
  }

  function toggleFavorite(favoritesArray, good) {
    const indexInFavorite = favoritesArray.findIndex(
      elem => elem.sku === good.sku
    );
    indexInFavorite !== -1
      ? favoritesArray.splice(indexInFavorite, 1)
      : favoritesArray.push(good);
    return [...favoritesArray];
  }
  function updateGoodsCollection(goodsCollectionArray, index) {
    const updatedGood = {
      ...goodsCollectionArray[index],
      favorite: !goodsCollectionArray[index].favorite,
    };
    goodsCollectionArray.splice(index, 1, updatedGood);
    return [...goodsCollectionArray];
  }

  if (isFetching) {
    return <Loading></Loading>;
  } else if (data) {
    return (
      <>
        <GoodsCollectionWrapper>
          {category === 'All' ? (
            <GoodsCollectionTitle>Wardrobe for Everyone</GoodsCollectionTitle>
          ) : (
            <GoodsCollectionTitle>For {category}</GoodsCollectionTitle>
          )}
          <GoodsListStyle value={value}>
            {goodsCollection.map((elem, index) => (
              <GoodsItemStyle key={elem.sku} value={value}>
                {value ? (
                  <GoodItem
                    good={elem}
                    onClickFavorite={() => addToFavorite(index, elem)}
                  ></GoodItem>
                ) : (
                  <GoodItemForList cardData={elem}></GoodItemForList>
                )}
              </GoodsItemStyle>
            ))}
          </GoodsListStyle>
        </GoodsCollectionWrapper>
      </>
    );
  } else if (error) {
    return <ErrorRequest></ErrorRequest>;
  }
}

GoodsList.propTypes = {
  category: PropTypes.string,
};
