import ButtonSubmit from "containers/ButtonSubmit/ButtonSubmit";
import { useTranslation } from "react-i18next";
import { DiscountButton, DiscountInput, DiscountText, DiscountTitle, DiscountWrapper } from "./Basket.styled";

export default function Discount() {
  const { t } = useTranslation();

  return (
    <DiscountWrapper>
      <DiscountTitle>{t('basket.Discount')}</DiscountTitle>
      <DiscountText>{t('basket.DiscountText')}</DiscountText>
      <div>
        <DiscountInput type="text" />
        <ButtonSubmit padding={'8px 28px'} fontSize='16px' bColor='base-color' colorText='#fff'>{t('basket.ApplyCoupon')}</ButtonSubmit>
      </div>
      <DiscountButton to='/'>{t('basket.ContinueShopping')}</DiscountButton>
    </DiscountWrapper>
  )
}