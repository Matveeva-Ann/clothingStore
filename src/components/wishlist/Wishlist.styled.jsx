import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const WishItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 36px;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 20px ;
`
export const WishlistList = styled.ul`
  margin-bottom: 130px;
  list-style: none;
`
export const WishlistPoint = styled.li`
  margin-bottom: 60px;
`
export const WishItemImg = styled.img`
  width: 130px;
  height: auto;
  object-fit: cover;
`
export const DescriptionList = styled.ul`
  padding: 0;
  flex-grow: 1;
  flex-basis: 0;
  min-width: 350px;
`
export const DescriptionListItem = styled.li`
  list-style: none;
  font-family: Arial, Helvetica, sans-serif;
  font-size: ${props => props.theme.fontSize.normal};
  font-weight: 700;
  color: ${props => props.theme.colors.accentText};
  margin-bottom: ${props => props.theme.spacing(2)};
`
export const DescriptionListItemData = styled.span`
  font-size: ${props => props.theme.fontSize.normal};
  font-weight: 500;
  color: ${props => props.theme.colors.grayText};
`
export const WishItemPrice = styled.span`
  font-size: ${props => props.theme.fontSize.medium};
  font-weight: 700;
  color: ${props => props.theme.colors.grayText};
  flex-grow: 0.1;
  flex-basis: 0;
`
export const WishItemBtn = styled.button`
  cursor: pointer;
  padding: 8px 12px;
  background-color: ${props => props.theme.colors.baseColor};
  color: ${props => props.theme.colors.white};
  border-radius: 8px;
  border: none;
  outline: none;
  font-size: ${props => props.theme.fontSize.normal};
  font-family: Arial, Helvetica, sans-serif;
  &:active{
    transform: scale(1.02);
  }
`
export const CardLink = styled(Link)`
  display: flex;
  max-width: 500px;
  gap: 20px;
  text-decoration: none;
  color: inherit;
`

export const Title = styled.h2`
  color: ${props => props.theme.colors.accentText};
  font-family: Arial, Helvetica, sans-serif;
  font-size: ${props => props.theme.fontSize.subTitleLittle};
  font-style: normal;
  font-weight: 600;
  letter-spacing: 0.56px;
  margin: 50px 100px;
`