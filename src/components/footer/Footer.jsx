import { useSelector } from "react-redux";
import Company from "./Company";
import { FooterLinks, FooterWrapper } from "./Footer.styled";
import Location from "./Location";
import MoreInfo from "./MoreInfo";
import NeedHelp from "./NeedHelp";


export default function Footer() {
  const scheme = useSelector(state => state.baseColor);

  return (
    <FooterWrapper  scheme={scheme}>
      <FooterLinks>
        <NeedHelp></NeedHelp>
        <Company></Company>
        <MoreInfo></MoreInfo>
        <Location></Location>
      </FooterLinks>

    </FooterWrapper>
  )
}