import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import svg from './svg/left.svg';

export const BreadCrumbsList = styled.ul`
  display: flex;
  gap: 20px;
  font-family: Arial, Helvetica, sans-serif;
`
export const BreadCrumbsItem = styled.li`
  list-style: none;
  position: relative;
  margin-left: 30px;
  color: #807D7E;
  &::before{
    content: '';
    position: absolute;
    top: 7px;
    left: -30px;
    background-image: url(${svg});
    background-repeat: no-repeat;
    background-size: cover;
    width: 6px;
    height: 13px;
    display: block;
  }
  &:first-of-type::before{
      display: none;
    }
`
export const BreadCrumbsItemName = styled.li`
  list-style: none;
  position: relative;
  margin-left: 30px;
  color: #807D7E;
  font-size: 18px;
  font-weight: 500;
  &::before{
    content: '';
    display: block;
    position: absolute;
    top: 7px;
    left: -30px;
    background-image: url(${svg});
    background-repeat: no-repeat;
    background-size: cover;
    width: 6px;
    height: 13px;
  }
`

export const BreadCrumbsLink = styled(NavLink)`
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;
  color: var(--black);
`