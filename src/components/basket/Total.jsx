import { useSelector } from "react-redux";
import { TotalWrapper } from "./Basket.styled";
import Discount from "./Discount";
import ProcessedCheck from "./ProcessedCheck";


export default function Total (){
  const scheme = useSelector(state => state.baseColor);

  return(
    <TotalWrapper scheme={scheme}>
      <Discount></Discount>
      <ProcessedCheck></ProcessedCheck>
    </TotalWrapper>
  )
}