import LinkButton from 'containers/LinkButton/LinkButton';
import img from './img/cabinet-wishlist-empty.svg';
import { WishListEmptyImg, WishListEmptyText, WishListEmptyTitle, WishListEmptyWrapper } from './WishListEmpty.styled';

export default function WishListEmpty (){
  return(
    <WishListEmptyWrapper>
      <WishListEmptyImg src={img} alt="wish list empty" />
      <WishListEmptyTitle>У вас ще немає списків бажань</WishListEmptyTitle>
      <WishListEmptyText>Саме час створити перший</WishListEmptyText>
      <LinkButton link={'/Shop'}>Перейти до списку товарів</LinkButton>
    </WishListEmptyWrapper>
  )
}