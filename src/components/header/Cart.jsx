import { iconSize } from "constants";
import IconButton from "containers/IconButton/IconButton";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CounterGoods } from "./Header.styled";
import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';

export default function Cart() {
  const basket = useSelector(state => state.basket);
  const basketCount = basket.reduce((accum, elem)=> accum + elem.amount, 0);

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
