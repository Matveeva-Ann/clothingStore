import { useSelector } from "react-redux";
import { BasketRegisterLogin, BasketRegisterLoginAccent, BasketRegisterText } from "./Basket.styled";

export default function BasketInfoRegister() {
  const scheme = useSelector(state => state.baseColor);

  return (
    <>
      <BasketRegisterText  scheme={scheme}>
        Please fill in the fields below and click place order to complete yourpurchase!
      </BasketRegisterText>
      <BasketRegisterLogin scheme={scheme}>Already registered? <BasketRegisterLoginAccent scheme={scheme} to={`/loginPage`}>Please login here</BasketRegisterLoginAccent></BasketRegisterLogin>
    </>
  );
}
