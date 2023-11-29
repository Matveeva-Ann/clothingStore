import Button from "containers/Button/Button";
import { useSelector } from "react-redux";
import { ClothingDescription, PromotionTitle, SlideContent, SlideStyle } from "./Slide1.styled";


export default function Slide1() {
  const scheme = useSelector(state => state.baseColor);

  return (
    <SlideStyle>
      <SlideContent scheme={scheme}>
        <ClothingDescription>T-shirt / Tops</ClothingDescription>
        <PromotionTitle scheme={scheme}>Summer Value Pack</PromotionTitle>
        <p>cool / colorful / comfy</p>
        <Button>Shop Now</Button>
      </SlideContent>
    </SlideStyle>
  )
}