import React from 'react';
import { CiMenuBurger } from 'react-icons/ci';
import { HeaderStyle, HeadersElemWrapper, CategoriesListBurger, ButtonsWrapper } from './Header.styled';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Logo from './Logo';
import GoodsCategories from './GoodsCategories';
import Search from './Search';
import User from './User';
import Favorite from './Favorite';
import Cart from './Cart';
import { useTranslation } from 'react-i18next';
import LanguageToggle from 'i18n/LanguageToggle/LanguageToggle';

export default function Header() {
  const isLogin = useSelector((store) => store.login);


  return (
    <HeaderStyle data-testid="header">
      <HeadersElemWrapper>
        <Logo data-testid="logo" />
        <GoodsCategories data-testid="goods-categories" />
        <CategoriesListBurger>
          <CiMenuBurger size={28} />
        </CategoriesListBurger>
        <Search data-testid="search" />
        <LanguageToggle></LanguageToggle>

        <ButtonsWrapper>
          <User data-testid="user" />
          {isLogin && <Favorite data-testid="favorite" />}
          <Cart data-testid="cart" />
        </ButtonsWrapper>
      </HeadersElemWrapper>
    </HeaderStyle>
  );
}

Header.propTypes = {
  setBasketCount: PropTypes.func,
  basketCount: PropTypes.number,
};
