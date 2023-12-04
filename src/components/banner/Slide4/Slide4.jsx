
import LinkButton from "containers/LinkButton/LinkButton";
import { ClothingDescription, LinkButtonWrapper, PromotionTitle, SlideContent, SlideStyle } from "./Slide4.styled";

export default function Slide4() {

  return (
    <SlideStyle>
      <SlideContent>
        <PromotionTitle>На старт, увага, зима!</PromotionTitle>
        <ClothingDescription>Одяг для всієї родини</ClothingDescription>
        <LinkButtonWrapper>
           <LinkButton size="big" color='white' colorText='black' link='/Men'>For Men</LinkButton>
           <LinkButton size="big"  color='white' colorText='black' link='/Women'>For Women</LinkButton>
           <LinkButton size="big"  color='white' colorText='black' link='/Children'>For Children</LinkButton>
        </LinkButtonWrapper>
      
      </SlideContent>
    </SlideStyle>
  )
}