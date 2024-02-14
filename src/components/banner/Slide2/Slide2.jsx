
import LinkButton from "containers/LinkButton/LinkButton";
import { useTranslation } from "react-i18next";
import { SlideContent, SlideStyle } from "./Slide2.styled";


export default function Slide2() {
const { t } = useTranslation();

  return (
    <SlideStyle>
      <SlideContent>
        <LinkButton size="big" link='/Men'>{t('Slide2.Men')}</LinkButton>
        <LinkButton size="big" link='/Women'>{t('Slide2.Women')}</LinkButton>
        <LinkButton size="big" link='/Children'>{t('Slide2.Children')}</LinkButton>
      </SlideContent>
    </SlideStyle>
  )
}