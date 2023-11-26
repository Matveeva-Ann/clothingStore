import BreadCrumbs from "components/breadCrumbs/breadCrumbs";
import BillingDetails from "components/checkOut/BillingDetails";
import { CheckOutPageStyle, CheckOutWrapper } from "components/checkOut/CheckOut.styled";
import CheckOutTitle from "components/checkOut/CheckOutTitle";
import OrderSummary from "components/checkOut/OrderSummary";


export default function CheckOutPage() {
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