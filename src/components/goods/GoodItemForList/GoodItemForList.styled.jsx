import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 20px;
`
export const WrapperInfo = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  flex-grow: 1;
  text-decoration: none;
  color: inherit;
`
export const GoodItemName = styled.h3`
  font-size: 22px;
`

export const GoodItemPrice = styled.p`
  font-size: 20px;
  font-weight: 600;
  margin-top: 15px;
  margin-bottom: 50px;
`

export const GoodItemBuy = styled.div`
  padding: 30px;
`