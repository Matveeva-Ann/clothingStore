import { useSelector } from "react-redux";
import { BasketRegisterLogin, BasketRegisterLoginAccent, BasketRegisterText } from "./Basket.styled";

export default function BasketInfoRegister() {
  const isLogin = useSelector(state => state.login);

  return (
    <>
      <BasketRegisterText>
        Please fill in the fields below and click place order to complete yourpurchase!
      </BasketRegisterText>
      <BasketRegisterLogin>Already registered? <BasketRegisterLoginAccent to={ isLogin ? `/userPage` : `/loginPage`}>Please login here</BasketRegisterLoginAccent></BasketRegisterLogin>
    </>
  );
}
