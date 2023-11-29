import styled from '@emotion/styled';
import { Field, Form } from 'formik';
import { Link } from 'react-router-dom';
import svg from './svg/check.svg';

export const Title = styled.h2`
  font-size: 28px;
  font-family: Arial, Helvetica, sans-serif;
  color: var(--accentText);
  margin-bottom: 20px;
  margin-top: 50px;
  &::before{
    content: '';
    display: inline-block;
    width: 6px;
    height: 28px;
    background-color: var(--base-color);
    border-radius: 10px;
    margin-right: 15px;
    position: relative;
    top: 4px;
}
`
export const CheckOutPageStyle = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 20px;
`
export const CheckOutWrapper = styled.div`
  display: flex;
`

export const SubTitle = styled.h3`
  margin-bottom: 50px;
  font-size: ${props => props.theme.fontSize.customText};
  color: var(--accentText);
`

export const FormStyle = styled(Form)`
  display: flex;
  flex-wrap: wrap;
  max-width: 55.5vw;
  width: 100%;
  margin-bottom: 130px;
`
 
export const FieldStyle = styled(Field)`
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: 38px;
  border: none;
  outline: none;
  background-color: var(--backgroundField);
  border-radius: 8px;
  padding: 12px 20px;
  box-shadow: 2px 1px 3px rgba(0, 0, 0, 0.2);
  font-size: ${props => props.theme.fontSize.medium};
  &::placeholder{
    font-size: ${props => props.theme.fontSize.small};
    font-family: Arial, Helvetica, sans-serif;
    color: var(--grayText);
    letter-spacing: 1.5px;
  }
`

export const FieldWrapper= styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-bottom: 30px;
  color: red;
  @media (width < 1200px) {
    width: 100%;
  }
`

export const FieldLabel= styled.label`
  font-family: Arial, Helvetica, sans-serif;
  font-size: ${props => props.theme.fontSize.normal};
  color: var(--accentText);
  font-weight: 600;
`


export const FieldCheckbox = styled(Field)`
  display: none;
 
`
export const LabelCheckbox = styled.label`
  cursor: pointer;
  user-select: none;
  margin-top: 20px;
  font-size: ${props => props.theme.fontSize.medium};
  font-family: Arial, Helvetica, sans-serif;
  position: relative;
  &::before{
    content: '';
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 1px solid gray;
    box-shadow: 2px 1px 3px rgba(0, 0, 0, 0.2);
    margin-right: 10px;
  }
  &::after{
    content: '';
    position: absolute;
    background-image: url(${svg});
    width: 23px;
    height: 23px;
    top: -2px;
    left: -2px;
    display: none;
  }
`

export const OrderSummaryWrapper = styled.div`
  box-shadow: 1px 3px 8px rgba(0, 0, 0, 0.2);
  padding: 40px 22px;
  flex-grow: 1;
  margin-bottom: 130px;
  min-height: 200px;
  height: 100%;
`
export const OrderSummaryList = styled.ul`
  padding: 0;
`
export const OrderSummaryItem = styled.li`
  list-style: none;
  padding: 15px 0;
  border-bottom: 1px solid #EDEEF2;
  &:first-of-type{
    border-top: 1px solid #EDEEF2;
  }
`
export const OrderSummaryCardWrapper = styled.div`
  display: flex;
  gap: 15px;
`
export const OrderSummaryLink = styled(Link)`
  text-decoration: none;
  color: var(--accentText);
`

export const OrderSummaryCardImg= styled.img`
  width: 63px;
  height: auto;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`

export const OrderSummaryCardInfo = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  font-family: Arial, Helvetica, sans-serif;
`

export const OrderSummaryCardName = styled.h4`
  font-size: ${props => props.theme.fontSize.normal};
  margin-bottom: 6px;
`
export const OrderSummaryCardText = styled.h4`
  font-size: ${props => props.theme.fontSize.small};
`
export const OrderSummaryAccent = styled.span`
  color: var(--grayText);
  font-weight: 500;
`

export const CountBasketWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: Arial, Helvetica, sans-serif;
`
export const CountBasketItem = styled.span`
  font-weight: 700;
  color: var(--accentText);
  font-size: ${props => props.theme.fontSize.normal};
  margin-bottom: 15px;
`
export const CountBasketLine= styled.div`
  width: 100%;
  height: 1px;
  background-color: #EDEEF2;
  margin-bottom: 20px;
`
export const CountBasketAccent= styled.span`
  color: var(--grayText);
`
export const ErrorMessageStyle = styled.div`
  position: absolute;
  bottom: -20px;
  left: 0;
  font-size: 18px;
`