import Company from "./Company";
import { FooterLinks, FooterWrapper } from "./Footer.styled";
import Location from "./Location";
import MoreInfo from "./MoreInfo";
import NeedHelp from "./NeedHelp";


export default function Footer() {

  return (
    <FooterWrapper>
      <FooterLinks>
        <NeedHelp></NeedHelp>
        <Company></Company>
        <MoreInfo></MoreInfo>
        <Location></Location>
      </FooterLinks>

    </FooterWrapper>
  )
}