
import { iconSize } from "constants";
import IconButton from "containers/IconButton/IconButton";
import { AiOutlineHeart } from "react-icons/ai";
import { CounterGoods } from "./Header.styled";
import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';

export default function Favorite() {
  const favoriteCount = useSelector(state => state.favorite).length;

  return (
    <NavLink to={`/wishlist`}>
      {({ isActive }) => (
        <IconButton ariaLabel={'favorite'} style={{ position: 'relative' }} background={isActive ? 'grayText' : 'backgroundAccent'}>
          {favoriteCount > 0 &&
            <CounterGoods>{favoriteCount}</CounterGoods>}
          <AiOutlineHeart size={iconSize.sm} ></AiOutlineHeart>
        </IconButton>
      )}
    </NavLink>
  )
}

