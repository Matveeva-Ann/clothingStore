import { useSelector } from "react-redux";
import { CountBasketLine, CountBasketItem, CountBasketWrapper, CountBasketAccent } from "./CheckOut.styled";



export default function CountBasket({totalSum, shipping, savings}){
    const finalAmount = (Number(totalSum) + shipping - savings).toFixed(2);
    const scheme = useSelector(state => state.baseColor);

  return(
    <>
    <CountBasketWrapper>
      <CountBasketItem scheme={scheme}>Subtotal <CountBasketAccent scheme={scheme}>( {3} items ) </CountBasketAccent></CountBasketItem>
      <CountBasketItem scheme={scheme}>${totalSum}</CountBasketItem>
    </CountBasketWrapper>
    <CountBasketWrapper>
      <CountBasketItem scheme={scheme}>Savings</CountBasketItem>
      <CountBasketItem scheme={scheme}>-${savings}</CountBasketItem>
    </CountBasketWrapper>

    <CountBasketLine></CountBasketLine>

    <CountBasketWrapper>
      <CountBasketItem scheme={scheme}>Shipping</CountBasketItem>
      <CountBasketItem scheme={scheme}>+${shipping}</CountBasketItem>
    </CountBasketWrapper>

    <CountBasketLine></CountBasketLine>

    <CountBasketWrapper>
      <CountBasketItem scheme={scheme}>Total</CountBasketItem>
      <CountBasketItem scheme={scheme}>${finalAmount}</CountBasketItem>
    </CountBasketWrapper>
    </>
  )
}