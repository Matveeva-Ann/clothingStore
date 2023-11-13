import { iconSize } from "constants";
import IconButton from "containers/IconButton/IconButton";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CounterGoods } from "./Header.styled";
import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";

export default function Cart({ basketCount }) {

  return (
    <NavLink to={`/basket`}>
      {({ isActive }) => (
        <IconButton ariaLabel={'basket'} style={{position: 'relative'}} background={isActive ? 'grayText' : 'backgroundAccent'}>
          {basketCount > 0 && <CounterGoods>{basketCount}</CounterGoods>}
          <AiOutlineShoppingCart size={iconSize.sm}/>
        </IconButton>
      )}
    </NavLink>
  );
}


Cart.propTypes = {
  setBasketCount: PropTypes.func,
  basketCount: PropTypes.number,
}