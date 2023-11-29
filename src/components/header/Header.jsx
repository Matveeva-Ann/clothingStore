import Cart from "./Cart";
import Favorite from "./Favorite";
import GoodsCategories from "./GoodsCategories";
import { CiMenuBurger } from "react-icons/ci";
import Logo from "./Logo";
import Search from "./Search";
import { ButtonsWrapper, CategoriesListBurger, HeadersElemWrapper, HeaderStyle } from "./Header.styled";
import PropTypes from 'prop-types';
import { useSelector } from "react-redux";

export default function Header() {
  const scheme = useSelector(state => state.baseColor);

  return (
    <HeaderStyle>
      <HeadersElemWrapper>
        <Logo></Logo>
        <GoodsCategories></GoodsCategories>
        <CategoriesListBurger scheme={scheme}>
          <CiMenuBurger size={28}></CiMenuBurger>
        </CategoriesListBurger>
        <Search></Search>
        <ButtonsWrapper>
          <Favorite></Favorite>
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