import { useSelector } from "react-redux";
import { Button } from "./ButtonSubmit.styled";


export default function ButtonSubmit({children, padding, fontSize, bColor, colorText, radius = 0}){
  const scheme = useSelector(state => state.baseColor);

  return(
    <Button scheme={scheme} type="submit" padding={padding} fontSize={fontSize} bColor={bColor} colorText={colorText} radius={radius}>
      {children}
    </Button>
  )
}