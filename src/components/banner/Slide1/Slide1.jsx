import LinkButton from "containers/LinkButton/LinkButton";
import { useTranslation } from "react-i18next";
import { ClothingDescription, PromotionTitle, SlideContent, SlideStyle } from "./Slide1.styled";

export default function Slide1() {
  const { t } = useTranslation();

  return (
    <SlideStyle  data-testid="slide1">
      <SlideContent>
        <ClothingDescription>{t('Slide1.Description')}</ClothingDescription>
        <PromotionTitle >{t('Slide1.Title')}</PromotionTitle>
        <p>{t('Slide1.text')}</p>
        <LinkButton color='white' colorText='black' link='/Shop'>{t('Slide1.Button')}</LinkButton>
      </SlideContent>
    </SlideStyle>
  )
}