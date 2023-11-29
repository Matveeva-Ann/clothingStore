
import { useSelector } from 'react-redux';
import { LogoLink, LogoStyle, LogoText, LogoWrapper } from './Header.styled';


export default function Logo() {
  const scheme = useSelector(state => state.baseColor);

  return (
    <LogoWrapper>
      <LogoLink  scheme={scheme} to="/">
        <LogoStyle>Euphoria</LogoStyle>
        <LogoText>Keep it classy</LogoText>
      </LogoLink>
    </LogoWrapper>
  )
}