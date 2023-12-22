
import i18next from 'i18next';
import '../i18n';
import { useTranslation } from 'react-i18next';
import { FlagSpan, OptionEn, Select, Wrapper } from './LanguageToggle.styled';
import flagUa from './icons/ukraine.svg';
import flagUk from './icons/united-kingdom.svg';
import { goodsApi, useGetAllGoodsQuery } from 'redux/api';
import { useEffect } from 'react';
import { urlGoodsEn } from 'constants/urlGoodsCollection';

export default function LanguageToggle() {
  const { t, i18n } = useTranslation();

  function handleChangeLanguage(e) {
    const newLanguage = i18n.language = e.target.value || 'uk';
    i18n.changeLanguage(newLanguage);
  }
  return (
    <Wrapper>
      <FlagSpan img={i18n.language}></FlagSpan>
      <Select onChange={handleChangeLanguage} defaultValue={i18n.language}>
        <option value="en">EN</option>
        <option value="uk">UA</option>
      </Select>
    </Wrapper>
  );
}
