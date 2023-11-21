import { iconSize } from "constants";
import IconButton from "containers/IconButton/IconButton";
import { PiShoppingCartSimple } from "react-icons/pi";
import { RxCross2 } from "react-icons/rx";
import { CardLink, DescriptionList, DescriptionListItem, DescriptionListItemData, FaCheckStyle, FaCheckStyleWrapper, WishItemBtn, WishItemImg, WishItemPrice, WishItemWrapper } from "./Wishlist.styled";
import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";


export default function WishlistItem({ good, deleteFavorite, addGoodToBasket }) {
  const [isGoodInBasket, setIsGoodInBasket] = useState(false);

  const goodsInBasket = useSelector(state => state.basket)

  useEffect(()=>{
    setIsGoodInBasket(goodsInBasket.some(elem => elem.sku === good.sku))
  }, [goodsInBasket, good.sku])

  return (
    <WishItemWrapper>
      <IconButton background={'white'} onClick={deleteFavorite} ariaLabel={'delete good from wishlist'}>
        <RxCross2 size={iconSize.md} style={{ color: '#807D7E' }}></RxCross2>
      </IconButton>
      <CardLink to={`/goods/${good.sku}`}>
        <WishItemImg src={good.imagePath.find(img=> img.color === good.color).url} alt={good.name} />
        <DescriptionList>
          <DescriptionListItem>{good.name}</DescriptionListItem>
          <DescriptionListItem>Color: <DescriptionListItemData>{good.colors[0].name}</DescriptionListItemData></DescriptionListItem>
          <DescriptionListItem>Description: <DescriptionListItemData>{good.description?.join(", ")}</DescriptionListItemData></DescriptionListItem>
        </DescriptionList>
      </CardLink>
      <WishItemPrice>${good.price}</WishItemPrice>
      {isGoodInBasket
         ? <WishItemBtn onClick={addGoodToBasket}>
             <FaCheckStyleWrapper><FaCheckStyle></FaCheckStyle></FaCheckStyleWrapper>
             <PiShoppingCartSimple style={{ marginRight: '10px' }} ></PiShoppingCartSimple>
                Added!
           </WishItemBtn>
         : <WishItemBtn onClick={addGoodToBasket}>
             <PiShoppingCartSimple style={{ marginRight: '10px' }} ></PiShoppingCartSimple>
               Add to cart
           </WishItemBtn>
      }
   
      
    </WishItemWrapper>
  );
}

WishlistItem.propTypes = {
  good: PropTypes.object,
  deleteFavorite: PropTypes.func,
  addGoodToBasket: PropTypes.func,
}