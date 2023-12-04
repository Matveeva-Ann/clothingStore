import { LogoLink, LogoStyle, LogoText, LogoWrapper } from './Header.styled';

export default function Logo() {
  return (
    <LogoWrapper>
      <LogoLink to="/">
        <LogoStyle>Euphoria</LogoStyle>
        <LogoText>Keep it classy</LogoText>
      </LogoLink>
    </LogoWrapper>
  )
}