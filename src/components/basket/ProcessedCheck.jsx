import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ButtonCheckout, CheckTable, CheckTableWrapper, CheckTdName, CheckTdNameTotal, CheckTdValue, CheckTdValueTotal, CheckWrapper } from "./Basket.styled";


export default function ProcessedCheck() {
  const basket = useSelector(store => store.basket);
  const totalPriseCount = basket.reduce((accum, elem) => accum + Number(elem.price)* Number(elem.amount), 0);
  const totalPrise = Number(totalPriseCount.toFixed(2));
  const totalItems = basket.reduce((accum, elem) => accum + Number(elem.amount) , 0);
  const isUserLogin = useSelector(store => store.login)
  const navigate = useNavigate();

  const shipping = 0;
  const totalPriseWithShipping = (totalPrise + shipping).toFixed(2);

  function clickCheckout(){
     navigate(isUserLogin ? '/CheckOutPage' : '/loginPage', {state: '/CheckOutPage'})
  }

  return (
    <CheckWrapper>
      <CheckTableWrapper>
        <CheckTable>
          <tbody>
            <tr>
              <CheckTdName>Sub Total</CheckTdName>
              <CheckTdValue>${totalPrise}</CheckTdValue>
            </tr>
            <tr>
              <CheckTdName>Total Items</CheckTdName>
              <CheckTdValue>{totalItems}</CheckTdValue>
            </tr>
            <tr>
              <CheckTdName>Shipping</CheckTdName>
              <CheckTdValue>${shipping}</CheckTdValue>
            </tr>
            <tr>
              <CheckTdNameTotal>Grand Total</CheckTdNameTotal>
              <CheckTdValueTotal>${totalPriseWithShipping}</CheckTdValueTotal>
            </tr>
          </tbody>
        </CheckTable>
      </CheckTableWrapper>
      <ButtonCheckout onClick={clickCheckout} >Proceed To Checkout</ButtonCheckout>
    </CheckWrapper>
  )
}