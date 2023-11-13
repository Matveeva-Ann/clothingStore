
import { iconSize } from "constants";
import IconButton from "containers/IconButton/IconButton";
import { AiOutlineHeart } from "react-icons/ai";

import { CounterGoods } from "./Header.styled";
import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";

export default function Favorite({ favoriteCount }) {

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

Favorite.propTypes = {
  favoriteCount: PropTypes.number,
}