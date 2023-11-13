import { iconSize } from "constants";
import IconButton from "containers/IconButton/IconButton";
import { PiShoppingCartSimple } from "react-icons/pi";
import { RxCross2 } from "react-icons/rx";
import { CardLink, DescriptionList, DescriptionListItem, DescriptionListItemData, WishItemBtn, WishItemImg, WishItemPrice, WishItemWrapper } from "./Wishlist.styled";
import PropTypes from 'prop-types';

export default function WishlistItem({ good, deleteFavorite, addGoodToBasket }) {

  return (
    <WishItemWrapper>
      <IconButton background={'white'} onClick={deleteFavorite} ariaLabel={'delete good from wishlist'}>
        <RxCross2 size={iconSize.md} style={{ color: '#807D7E' }}></RxCross2>
      </IconButton>
      <CardLink to={`/goods/${good.sku}`}>
        <WishItemImg src={good.imagePath} alt={good.name} />
        <DescriptionList>
          <DescriptionListItem>{good.name}</DescriptionListItem>
          <DescriptionListItem>Color: <DescriptionListItemData>{good.colors[0].name}</DescriptionListItemData></DescriptionListItem>
          <DescriptionListItem>Description: <DescriptionListItemData>{good.description.join(", ")}</DescriptionListItemData></DescriptionListItem>
        </DescriptionList>
      </CardLink>
      <WishItemPrice>${good.price}</WishItemPrice>
      <WishItemBtn onClick={addGoodToBasket}>
        <PiShoppingCartSimple style={{ marginRight: '10px' }}></PiShoppingCartSimple>
        Add to cart
      </WishItemBtn>
    </WishItemWrapper>
  );
}

WishlistItem.propTypes = {
  good: PropTypes.object,
  deleteFavorite: PropTypes.func,
  addGoodToBasket: PropTypes.func,
}