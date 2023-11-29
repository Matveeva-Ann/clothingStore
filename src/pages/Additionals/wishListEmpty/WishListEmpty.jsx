import LinkButton from 'containers/LinkButton/LinkButton';
import { useSelector } from 'react-redux';
import img from './img/cabinet-wishlist-empty.svg';
import { WishListEmptyImg, WishListEmptyText, WishListEmptyTitle, WishListEmptyWrapper } from './WishListEmpty.styled';

export default function WishListEmpty (){
  const scheme = useSelector(state => state.baseColor);

  return(
    <WishListEmptyWrapper>
      <WishListEmptyImg src={img} alt="wish list empty" />
      <WishListEmptyTitle scheme={scheme}>У вас ще немає списків бажань</WishListEmptyTitle>
      <WishListEmptyText scheme={scheme}>Саме час створити перший</WishListEmptyText>
      <LinkButton link={'/Shop'}>Перейти до списку товарів</LinkButton>
    </WishListEmptyWrapper>
  )
}