import LinkButton from "containers/LinkButton/LinkButton";
import { useSelector } from "react-redux";
import { CheckTable, CheckTableWrapper, CheckTdName, CheckTdNameTotal, CheckTdValue, CheckTdValueTotal, CheckWrapper } from "./Basket.styled";


export default function ProcessedCheck() {
  const scheme = useSelector(state => state.baseColor);
  const basket = useSelector(store => store.basket);
  const totalPriseCount = basket.reduce((accum, elem) => accum + Number(elem.price)* Number(elem.amount), 0);
  const totalPrise = Number(totalPriseCount.toFixed(2));
  const totalItems = basket.reduce((accum, elem) => accum + Number(elem.amount) , 0)
  const shipping = 0;
  const totalPriseWithShipping = (totalPrise + shipping).toFixed(2);

  return (
    <CheckWrapper>
      <CheckTableWrapper>
        <CheckTable>
          <tbody>
            <tr>
              <CheckTdName scheme={scheme}>Sub Total</CheckTdName>
              <CheckTdValue scheme={scheme}>${totalPrise}</CheckTdValue>
            </tr>
            <tr>
              <CheckTdName scheme={scheme}>Total Items</CheckTdName>
              <CheckTdValue scheme={scheme}>{totalItems}</CheckTdValue>
            </tr>
            <tr>
              <CheckTdName scheme={scheme}>Shipping</CheckTdName>
              <CheckTdValue scheme={scheme}>${shipping}</CheckTdValue>
            </tr>
            <tr>
              <CheckTdNameTotal scheme={scheme}>Grand Total</CheckTdNameTotal>
              <CheckTdValueTotal scheme={scheme}>${totalPriseWithShipping}</CheckTdValueTotal>
            </tr>
          </tbody>
        </CheckTable>
      </CheckTableWrapper>
      <LinkButton link = '/CheckOutPage' color='base-color' colorText='#fff'>Proceed To Checkout</LinkButton>
    </CheckWrapper>
  )
}