import React from 'react';
import { FooterLinks, FooterWrapper } from "./Footer.styled";
import {Location, MoreInfo, NeedHelp, Company} from "../footer";

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