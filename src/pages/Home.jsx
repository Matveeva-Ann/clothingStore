import Banner from "components/banner/Banner";
import GoodsList from "components/goods/GoodsList/GoodsList";
import PropTypes from 'prop-types';

export default function Home({setFavoriteCount, setBasketCount,  favoriteCount,} ) {

  return (
    <>
      <Banner></Banner>
      <GoodsList category={'Women'} setFavoriteCount={setFavoriteCount} favoriteCount={favoriteCount} countBasket={setBasketCount}></GoodsList>
      <GoodsList category={'Men'} setFavoriteCount={setFavoriteCount} countBasket={setBasketCount}></GoodsList>
      <GoodsList category={'Children'} setFavoriteCount={setFavoriteCount} countBasket={setBasketCount}></GoodsList>
    </>
  )
}

Home.propTypes = {
  setBasketCount: PropTypes.func,
  setFavoriteCount: PropTypes.func,
  favoriteCount: PropTypes.number,
}