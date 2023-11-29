import ButtonSubmit from "containers/ButtonSubmit/ButtonSubmit";
import { useSelector } from "react-redux";
import { DiscountButton, DiscountInput, DiscountText, DiscountTitle, DiscountWrapper } from "./Basket.styled";

export default function Discount() {
  const scheme = useSelector(state => state.baseColor);

  return (
    <DiscountWrapper>
      <DiscountTitle scheme={scheme}>Discount  Codes</DiscountTitle>
      <DiscountText scheme={scheme}>Enter your coupon code if you have one</DiscountText>
      <div>
        <DiscountInput type="text" />
        <ButtonSubmit padding={'8px 28px'} fontSize='16px' bColor='base-color' colorText='#fff'>Apply Coupon</ButtonSubmit>
      </div>
      <DiscountButton to='/'>Continue Shopping</DiscountButton>
    </DiscountWrapper>
  )
}