import GoodItem from "../GoodItem/GoodItem";
import { GoodsCollectionTitle, GoodsCollectionWrapper, GoodsItemStyle, GoodsListStyle, } from "./GoodsList.styled";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Loading from "pages/Additionals/Loading/Loading";
import ErrorRequest from "pages/Additionals/ErrorRequest/ErrorRequest";
import { useDispatch, useSelector } from "react-redux";
import { useGetAllGoodsQuery } from "redux/api";
import { favoriteGoods } from "redux/favoriteSlice";

export default function GoodsList({ category }) {
  const [goodsCollection, setGoodsCollection] = useState([]);
  const { data, error, isFetching } = useGetAllGoodsQuery();
  const scheme = useSelector(state => state.baseColor);
   
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorite);

  useEffect(() => {
    const filterGoodsByCategory = (goods) =>
      category !== "All"
        ? goods.filter((elem) => elem.category === category)
        : goods;
    if (data) {
      setGoodsCollection(updateGoodsWithFavorites(filterGoodsByCategory(data)));
    }
  }, [category, data]);

  // змінюємо масив товарів залежно від обраних користувачем товарів
  function updateGoodsWithFavorites(dataArr) {
    const favoriteSkus = favorites.map((elem) => elem.sku) || [];
    const updatedDataArr = dataArr.map((elem) => ({
      ...elem,
      favorite: favoriteSkus.includes(elem.sku),
    }));
    return updatedDataArr;
  }

  //додати/видалит вибрані
  function addToFavorite(index, good) {
    const updatedFavorites = toggleFavorite([...favorites], good);
    const newGoodsCollection = updateGoodsCollection([...goodsCollection], index);
  
    setGoodsCollection(newGoodsCollection);
    dispatch(favoriteGoods(updatedFavorites));
  }
  function toggleFavorite(favoritesArray, good) {
    const indexInFavorite = favoritesArray.findIndex(elem => elem.sku === good.sku);
    indexInFavorite !== -1 
       ? favoritesArray.splice(indexInFavorite, 1)
       : favoritesArray.push(good);  
    return [...favoritesArray];
  }
  function updateGoodsCollection(goodsCollectionArray, index) {
    const updatedGood = { ...goodsCollectionArray[index], favorite: !goodsCollectionArray[index].favorite };
    goodsCollectionArray.splice(index, 1, updatedGood);
    return [...goodsCollectionArray];
  }

  if (isFetching) {
    return <Loading></Loading>;
  } else if (data) {
    return (
      <GoodsCollectionWrapper>
        {category === "All" ? (
          <GoodsCollectionTitle scheme={scheme}>Wardrobe for Everyone</GoodsCollectionTitle>
        ) : (
          <GoodsCollectionTitle scheme={scheme}>For {category}</GoodsCollectionTitle>
        )}
        <GoodsListStyle>
          {goodsCollection.map((elem, index) => (
            <GoodsItemStyle key={elem.sku}>
              <GoodItem
                good={elem}
                onClickFavorite={() => addToFavorite(index, elem)}
              ></GoodItem>
            </GoodsItemStyle>
          ))}
        </GoodsListStyle>
      </GoodsCollectionWrapper>
    );
  } else if (error) {
    return <ErrorRequest></ErrorRequest>;
  }
}

GoodsList.propTypes = {
  category: PropTypes.string,
};
