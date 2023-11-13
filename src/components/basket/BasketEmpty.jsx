import LinkButton from 'containers/LinkButton/LinkButton';
import { BasketEmptyImg, BasketEmptyWrapper } from './Basket.styled';
import img from './img/modal-cart-dummy.svg';

export default function BasketEmpty() {
  return (
    <BasketEmptyWrapper>
      <BasketEmptyImg src={img} alt="basket" />
      <h2>Кошик порожній</h2>
      <h2>Але це ніколи не пізно виправити :)</h2>
      <LinkButton link={'/Shop'}>Переглянути товари</LinkButton>
    </BasketEmptyWrapper>
  )
}