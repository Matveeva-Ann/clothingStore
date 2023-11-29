import { PiMagnifyingGlassBold } from "react-icons/pi";
import { useSelector } from "react-redux";
import { InputSearch, InputSearchWrapper } from "./Header.styled";

export default function Search(){
  const scheme = useSelector(state => state.baseColor);

  return(
    <InputSearchWrapper>
       <InputSearch scheme ={scheme} type="text" placeholder="Search"/>
       <PiMagnifyingGlassBold style={{color: '#807D7E', position: 'absolute', left: '10px', top: '30%'}}/>
    </InputSearchWrapper> 
  )
}