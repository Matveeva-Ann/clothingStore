import { Button } from "./ButtonSubmit.styled";


export default function ButtonSubmit({children, padding, fontSize, bColor, colorText, radius = 0}){
  return(
    <Button type="submit" padding={padding} fontSize={fontSize} bColor={bColor} colorText={colorText} radius={radius}>
      {children}
    </Button>
  )
}