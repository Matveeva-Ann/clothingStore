import styled from "@emotion/styled";
import { Link, NavLink } from "react-router-dom";

export const HeaderStyle = styled.header `
   padding: 32px;
   box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
`

export const HeadersElemWrapper = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1240px;
  height: 45px;
  width: 100%;
  margin: 0 auto;
`
export const LogoWrapper = styled.h1 `
  position: relative;
  width: 110px;
  height: 45px;
  font-weight: 400;
`
export const LogoStyle = styled.span `
  font-size: 32px;
  font-family: 'Pacifico';
`
export const LogoLink = styled(Link) `
  color: var(--blackText);
  cursor: pointer;
  text-decoration: none;
`
export const LogoText = styled.span `
  position: absolute;
  bottom: -12px;
  right: -14px;
  font-size: 14px;
  display: block;
`

export const CategoriesList = styled.ul `
  display: flex;
  gap: 20px;
  color: var(--grayText);
  list-style: none;
  @media (width < 1100px ){
    display: none;
  }
`
export const CategoriesListBurger = styled.button `
  display: none;
  border-radius: 4px;
  border-color: var(--grayText);
  padding: 8px 5px 0 5px;
  outline: none;
  cursor: pointer;
  background-color: transparent;
  margin: 0 20px;
  @media (width < 1100px ){
    display: block;
  }
`
export const CategoriesLink = styled(NavLink) `
  cursor: pointer;
  user-select: none;
  text-decoration: none;
  color: var(--grayText);
  font-family: Arial, Helvetica, sans-serif;
  font-size: 22px;
  padding: 0 10px;
  font-weight: 500;
  &.active{
    color: var(--blackText);
    font-weight:  700;
  }
`
export const InputSearchWrapper = styled.div `
  position: relative;
  @media (width < 600px) {
    display: none;
  }
`
export const InputSearch = styled.input `
  max-width: 270px;
  border: none;
  border-radius: 8px;
  background-color: var(--backgroundAccent);
  padding: 9px;
  font-size: 16px;
  outline: none;
  padding-left: 32px;
  font-family: Arial, Helvetica, sans-serif;
`

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 12px;
  
`
export const CounterGoods = styled.span `
  position: absolute;
  top: -4px;
  right: -4px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: var(--base-color);
  color: var(--white);
  text-align: center;
  line-height: 20px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
`