import LinkButton from 'containers/LinkButton/LinkButton'
import { useSelector } from 'react-redux';
import { ErrPageText, ErrPageTitle, ErrPageWrapper } from './ErrorRequest.styled'
import img from './img/png.png'

export default function ErrorRequest(){
  const scheme = useSelector(state => state.baseColor);

   return(
    <ErrPageWrapper>
      <ErrPageText scheme={scheme}>Oops! Something went wrong.</ErrPageText>
      <ErrPageText scheme={scheme}>Our team of highly trained monkeys has been dispatched to fix the issue! </ErrPageText>
      <ErrPageText scheme={scheme}>You might want to explore our other products.!</ErrPageText>
      <LinkButton link='/Shop'>View products</LinkButton>
      <img src= {img} alt="Error on server" />
    </ErrPageWrapper>   
   )
}