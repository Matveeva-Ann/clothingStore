import { BasketRegisterLogin, BasketRegisterLoginAccent, BasketRegisterText } from "./Basket.styled";

export default function BasketInfoRegister() {

  return (
    <>
      <BasketRegisterText>
        Please fill in the fields below and click place order to complete yourpurchase!
      </BasketRegisterText>
      <BasketRegisterLogin>Already registered? <BasketRegisterLoginAccent to={`/loginPage`}>Please login here</BasketRegisterLoginAccent></BasketRegisterLogin>
    </>
  );
}
