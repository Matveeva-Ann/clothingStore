import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { BasketRegisterLogin, BasketRegisterLoginAccent, BasketRegisterText } from "./Basket.styled";

export default function BasketInfoRegister() {
  const { t } = useTranslation();

  const isLogin = useSelector(state => state.login);

  return (
    <>
      <BasketRegisterText>{t("basket.RegisterText")}
      </BasketRegisterText>
      <BasketRegisterLogin>{t("basket.RegisterLogin")} <BasketRegisterLoginAccent to={ isLogin ? `/userPage` : `/loginPage`}>{t('basket.LoginAccent')}</BasketRegisterLoginAccent></BasketRegisterLogin>
    </>
  );
}
