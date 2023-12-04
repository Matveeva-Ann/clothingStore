import { CountBasketLine, CountBasketItem, CountBasketWrapper, CountBasketAccent } from "./CheckOut.styled";

export default function CountBasket({totalSum, shipping, savings}){
    const finalAmount = (Number(totalSum) + shipping - savings).toFixed(2);

  return(
    <>
    <CountBasketWrapper>
      <CountBasketItem>Subtotal <CountBasketAccent>( {3} items ) </CountBasketAccent></CountBasketItem>
      <CountBasketItem>${totalSum}</CountBasketItem>
    </CountBasketWrapper>
    <CountBasketWrapper>
      <CountBasketItem>Savings</CountBasketItem>
      <CountBasketItem>-${savings}</CountBasketItem>
    </CountBasketWrapper>

    <CountBasketLine></CountBasketLine>

    <CountBasketWrapper>
      <CountBasketItem>Shipping</CountBasketItem>
      <CountBasketItem>+${shipping}</CountBasketItem>
    </CountBasketWrapper>

    <CountBasketLine></CountBasketLine>

    <CountBasketWrapper>
      <CountBasketItem>Total</CountBasketItem>
      <CountBasketItem>${finalAmount}</CountBasketItem>
    </CountBasketWrapper>
    </>
  )
}