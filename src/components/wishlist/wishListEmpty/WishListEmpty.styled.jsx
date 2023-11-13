import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const WishListEmptyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  max-width: 500px;
  margin: 80px auto;
  font-family: Arial, Helvetica, sans-serif;
`
export const WishListEmptyImg = styled.img`
  max-width: 240px;
  max-height: 240px;
`
export const WishListEmptyTitle = styled.h2`
  font-size: 24px;
  color: ${props => props.theme.colors.blackText};
`
export const WishListEmptyText = styled.p`
  font-size: 20px;
  color: ${props => props.theme.colors.accentText};
`
export const WishListEmptyBtn = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  display: block;
  padding: 10px 15px;
  background-color: ${props => props.theme.colors.blackText};
  color: ${props => props.theme.colors.white};
  font-size: 1.5vw;
  &:active{
    transform: scale(1.02);
  }
`
