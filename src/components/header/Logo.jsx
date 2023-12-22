import { useTranslation } from 'react-i18next';
import { LogoLink, LogoStyle, LogoText, LogoWrapper } from './Header.styled';

export default function Logo() {
  const { t } = useTranslation();

  return (
    <LogoWrapper>
      <LogoLink to="/">
        <LogoStyle>Euphoria</LogoStyle>
        <LogoText>{t('logo')}</LogoText>
      </LogoLink>
    </LogoWrapper>
  )
}