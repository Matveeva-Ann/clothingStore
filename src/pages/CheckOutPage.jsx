import BreadCrumbs from "components/breadCrumbs/breadCrumbs";
import {BillingDetails, CheckOutTitle, OrderSummary} from "components/checkOut";
import { CheckOutPageStyle, CheckOutWrapper } from "components/checkOut/CheckOut.styled";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function CheckOutPage() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const linksArr =[
    {
      link: '',
      name: 'Home',
    }
  ]
  return (
    <CheckOutPageStyle>
      <BreadCrumbs name='Check Out' linksArr={linksArr}></BreadCrumbs>
      <CheckOutTitle></CheckOutTitle>
      <CheckOutWrapper>
        <BillingDetails></BillingDetails>
        <OrderSummary></OrderSummary>
      </CheckOutWrapper>
    </CheckOutPageStyle>
  )
}