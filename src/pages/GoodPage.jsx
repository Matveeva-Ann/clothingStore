import GoodInfo from "components/goods/GoodInfo/GoodInfo";
import PropTypes from 'prop-types';

export default function GoodPage({setFavoriteCount, setBasketCount}){
  return(
    <GoodInfo setFavoriteCount={setFavoriteCount} setBasketCount={setBasketCount}></GoodInfo>
  )
}

GoodPage.propTypes = {
  setBasketCount: PropTypes.func,
  setFavoriteCount: PropTypes.func,
}