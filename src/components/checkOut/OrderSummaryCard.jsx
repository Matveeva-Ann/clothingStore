import {
  OrderSummaryAccent,
  OrderSummaryCardImg,
  OrderSummaryCardInfo,
  OrderSummaryCardText,
  OrderSummaryCardWrapper,
  OrderSummaryLink,
} from "./CheckOut.styled";

export default function OrderSummaryCard({ good }) {
  return (
    <OrderSummaryLink to={`/goods/${good.sku}`}>
      <OrderSummaryCardWrapper>
        <OrderSummaryCardImg
          src={good.imagePath.find((elem) => elem.color === good.color).url}
          alt={good.name}
        />
        <OrderSummaryCardInfo>
          <div>
            <OrderSummaryCardText>Color: <OrderSummaryAccent>{good.color}</OrderSummaryAccent></OrderSummaryCardText>
          </div>
          <OrderSummaryAccent>${good.price}</OrderSummaryAccent>
        </OrderSummaryCardInfo>
      </OrderSummaryCardWrapper>
    </OrderSummaryLink>
  );
}
