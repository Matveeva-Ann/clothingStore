import Cart from "./Cart";
import Favorite from "./Favorite";
import GoodsCategories from "./GoodsCategories";
import { CiMenuBurger } from "react-icons/ci";
import Logo from "./Logo";
import Search from "./Search";
import { ButtonsWrapper, CategoriesListBurger, HeadersElemWrapper, HeaderStyle } from "./Header.styled";
import PropTypes from 'prop-types';
import User from "./User";
import { useSelector } from "react-redux";
export default function Header() {
  const isLogin = useSelector(store => store.login);

  return (
    <HeaderStyle>
      <HeadersElemWrapper>
        <Logo></Logo>
        <GoodsCategories></GoodsCategories>
        <CategoriesListBurger>
          <CiMenuBurger size={28}></CiMenuBurger>
        </CategoriesListBurger>
        <Search></Search>
        <ButtonsWrapper>
          <User></User>
           {isLogin && <Favorite></Favorite>}
          <Cart></Cart>
        </ButtonsWrapper>
      </HeadersElemWrapper>
    </HeaderStyle>
  )
}


Header.propTypes = {

  setBasketCount: PropTypes.func,
  basketCount: PropTypes.number,
}