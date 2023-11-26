import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
  margin-bottom: 100px;
`

export const THeader = styled.thead`
  background-color: ${props => props.theme.colors.accentText};
  text-transform: uppercase;
  color: ${props => props.theme.colors.white};
`
export const Tbody = styled.tbody`
  border-spacing: 0 20px;
`

export const THeaderTh = styled.th`
  padding: 26px 10px;
  width: 8%;
  &:first-of-type{
    padding: 26px 10px 26px 150px;
    width: 25%;
    @media (width < 1000px) {
      padding: 26px 10px 26px 50px;
    }
  }
  &:last-child{
    padding: 26px 150px 26px 10px;
    width: 15%;
    @media (width < 1000px) {
      padding: 26px 50px 26px 10px;
    }
  }
`
export const TBodyTd = styled.td`
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
  font-weight: 700;
  color: ${props => props.theme.colors.accentText};
  &:first-of-type{
    padding: 26px 10px 26px 150px;
    @media (width < 1000px) {
      padding: 26px 10px 26px 50px;
    }
  }
  &:last-child{
    padding: 26px 150px 26px 10px;
    @media (width < 1000px) {
      padding: 26px 50px 26px 10px;
    }
  }
`
export const TBodyTr = styled.tr`
  border-bottom: 1px solid #BEBCBD;
  &:last-child{
    border-bottom: none;
  }
`

export const BasketEmptyWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  padding: 20px;
  margin-bottom: 120px;
`
export const BasketEmptyImg = styled.img`
  max-width: 240px;
  height: auto;
  object-fit: cover;
`

export const BasketCardWrapper = styled.div`
  display: flex;
  gap: 20px;
  max-width: 340px;
  max-height: 120px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
`
export const BasketCardImg = styled.img`
  max-width: 100px;
`
export const BasketCardName = styled.h3`
  color: ${props => props.theme.colors.accentText};
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.36px;
  text-decoration: none;
  margin-bottom: 10px;
`
export const BasketCardInfo = styled.p`
  color: ${props => props.theme.colors.grayText};
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 5px;
`
export const TextUppercase = styled.span`
  text-transform: uppercase;
`
export const CardLink = styled(Link)`
  text-decoration: none;
`
export const BasketRegisterText = styled.p`
  color: ${props => props.theme.colors.grayText};
  font-family: Arial, Helvetica, sans-serif;
  font-size: ${props => props.theme.fontSize.small};
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.28px;
  margin: 30px 100px 0px;
`
export const BasketRegisterLogin = styled.p`
  color: ${props => props.theme.colors.grayText};
  font-family: Arial, Helvetica, sans-serif;
  font-size: ${props => props.theme.fontSize.small};
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.28px;
  margin: 0px 100px 50px;
`
export const BasketRegisterLoginAccent = styled(Link)`
  color: ${props => props.theme.colors.baseColor};
  font-family: Arial, Helvetica, sans-serif;
  font-size: ${props => props.theme.fontSize.small};
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.28px;
  margin: 0;
  text-decoration: none;
`

export const TotalWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 100px;
  background-color: ${props => props.theme.colors.backgroundAccent};
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);
`
export const DiscountTitle = styled.h3`
  font-family: Arial, Helvetica, sans-serif;
  font-size: ${props => props.theme.fontSize.customText};
  color: ${props => props.theme.colors.accentText};
`
export const DiscountText = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 400;  
  font-size: ${props => props.theme.fontSize.small};
  color: ${props => props.theme.colors.grayText};
  margin-bottom: 40px;
`
export const DiscountInput = styled.input`
  border: 1px solid #BEBCBD;
  border-bottom-left-radius: 12px;
  border-top-left-radius: 12px;
  padding: 6px 15px;
  outline: none;
  font-size: ${props => props.theme.fontSize.normal};
  max-width: 200px;
  margin-bottom: 35px;
`
export const DiscountWrapper = styled.div`
  padding-bottom: 115px;
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  width: 50%;
`
export const DiscountButton = styled(Link)`
   text-decoration: none;
   cursor: pointer;
   display: block;
   padding: 10px 20px;
   max-width: 240px;
   width: 100%;
   color: #3c42427e;
   font-size: ${props => props.theme.fontSize.normal};
   text-align: center;
   font-family: Arial, Helvetica, sans-serif;
   font-weight: 100;
   border: 1px solid #BEBCBD;
   border-radius: 12px;
   background-color: #fff;
   &:active{
     transform: scale(1.02);
   }
`

export const CheckWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 460px;
  width: 100%;
  padding: 40px 0 50px;
  background-color: #F3F3F3;
  font-family: Arial, Helvetica, sans-serif;
`
export const CheckTableWrapper = styled.div`
  border-bottom: 1px solid #BEBCBD;
  width: 100%;
  padding: 0px 90px 50px 90px;
  margin-bottom: 50px;
`

export const CheckTable = styled.table`
  max-width: 300px;
  width: 100%;
`
export const CheckTdName = styled.td`
  font-size: ${props => props.theme.fontSize.medium};
  font-weight: 500;
  color: ${props => props.theme.colors.accentText};
  padding-right: 20px;
`
export const CheckTdValue = styled.td`
  font-size: ${props => props.theme.fontSize.medium};
  font-weight: 500;
  color: ${props => props.theme.colors.accentText};
`

export const CheckTdNameTotal = styled.td`
  font-size: ${props => props.theme.fontSize.medium};
  font-weight: 700;
  color: ${props => props.theme.colors.accentText};
  padding-top: 40px;
  padding-right: 20px;
`
export const CheckTdValueTotal = styled.td`
  font-size: ${props => props.theme.fontSize.medium};
  font-weight: 700;
  color: ${props => props.theme.colors.accentText};
  margin-top: 40px;
  padding-top: 40px;
`