import { TotalWrapper } from "./Basket.styled";
import Discount from "./Discount";
import ProcessedCheck from "./ProcessedCheck";


export default function Total (){

  return(
    <TotalWrapper>
      <Discount></Discount>
      <ProcessedCheck></ProcessedCheck>
    </TotalWrapper>
  )
}