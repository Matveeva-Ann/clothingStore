import { useSelector } from "react-redux";
import { Title } from "./CheckOut.styled";


export default function CheckOutTitle ({children}){
  const scheme = useSelector(state => state.baseColor);

  return(
     <Title scheme={scheme}>Check Out</Title>
  )
}