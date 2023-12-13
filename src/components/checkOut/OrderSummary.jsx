import { useSelector } from "react-redux";
import { OrderSummaryItem, OrderSummaryList, OrderSummaryWrapper, SubTitle } from "./CheckOut.styled";
import CountBasket from "./CountBasket";
import OrderSummaryCard from "./OrderSummaryCard";


export default function OrderSummary(){
  const basketGoods = useSelector(store => store.basket);
  const totalSum = Number(basketGoods.reduce((accum, elem) => accum + Number(elem.price)*Number(elem.amount), 0));
  const shipping = 5;
  const savings = 3;

  return(
    <OrderSummaryWrapper>
       <SubTitle>Order Summary</SubTitle>
       <OrderSummaryList>
       {basketGoods.map(good =>(
        <OrderSummaryItem key={good.sku + good.color}>
          <OrderSummaryCard good={good}></OrderSummaryCard>
        </OrderSummaryItem>
       ))}
       </OrderSummaryList>
       <CountBasket totalSum={totalSum.toFixed(2)} shipping={shipping} savings={savings}></CountBasket>
    </OrderSummaryWrapper>
  )
}