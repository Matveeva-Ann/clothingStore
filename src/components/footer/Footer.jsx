import React from 'react';
import Company from "./Company";
import { FooterLinks, FooterWrapper } from "./Footer.styled";
import Location from "./Location";
import MoreInfo from "./MoreInfo";
import NeedHelp from "./NeedHelp";


export default function Footer() {

  return (
    <FooterWrapper data-testid="footer-wrapper">
      <FooterLinks>
        <NeedHelp></NeedHelp>
        <Company></Company>
        <MoreInfo></MoreInfo>
        <Location></Location>
      </FooterLinks>

    </FooterWrapper>
  )
}