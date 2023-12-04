import Button from "containers/Button/Button";
import { ClothingDescription, PromotionTitle, SlideContent, SlideStyle } from "./Slide1.styled";

export default function Slide1() {

  return (
    <SlideStyle>
      <SlideContent>
        <ClothingDescription>T-shirt / Tops</ClothingDescription>
        <PromotionTitle >Summer Value Pack</PromotionTitle>
        <p>cool / colorful / comfy</p>
        <Button>Shop Now</Button>
      </SlideContent>
    </SlideStyle>
  )
}