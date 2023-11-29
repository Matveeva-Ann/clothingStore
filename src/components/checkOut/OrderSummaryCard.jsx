import { useSelector } from "react-redux";
import {
  OrderSummaryAccent,
  OrderSummaryCardImg,
  OrderSummaryCardInfo,
  OrderSummaryCardText,
  OrderSummaryCardWrapper,
  OrderSummaryLink,
} from "./CheckOut.styled";

export default function OrderSummaryCard({ good }) {
  const scheme = useSelector(state => state.baseColor);

  return (
    <OrderSummaryLink scheme={scheme} to={`/goods/${good.sku}`}>
      <OrderSummaryCardWrapper>
        <OrderSummaryCardImg
          src={good.imagePath.find((elem) => elem.color === good.color).url}
          alt={good.name}
        />
        <OrderSummaryCardInfo>
          <div>
            <OrderSummaryCardText>Color: <OrderSummaryAccent scheme={scheme}>{good.color}</OrderSummaryAccent></OrderSummaryCardText>
          </div>
          <OrderSummaryAccent scheme={scheme}>${good.price}</OrderSummaryAccent>
        </OrderSummaryCardInfo>
      </OrderSummaryCardWrapper>
    </OrderSummaryLink>
  );
}
