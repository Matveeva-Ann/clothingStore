import LinkButton from 'containers/LinkButton/LinkButton'
import { ErrPageText, ErrPageWrapper } from './ErrorRequest.styled'
import img from './img/png.png'

export default function ErrorRequest(){

   return(
    <ErrPageWrapper>
      <ErrPageText>Oops! Something went wrong.</ErrPageText>
      <ErrPageText>Our team of highly trained monkeys has been dispatched to fix the issue! </ErrPageText>
      <ErrPageText>You might want to explore our other products.!</ErrPageText>
      <LinkButton link='/Shop'>View products</LinkButton>
      <img src= {img} alt="Error on server" />
    </ErrPageWrapper>   
   )
}