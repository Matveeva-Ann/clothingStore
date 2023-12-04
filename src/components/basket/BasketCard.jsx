import { BasketCardImg, BasketCardInfo, BasketCardName, BasketCardWrapper, TextUppercase } from "./Basket.styled"
import PropTypes from 'prop-types';
export default function BasketCard({ good }) {

  return (
    <BasketCardWrapper>
      <BasketCardImg src={good.imagePath.find(img=> img.color === good.color).url} alt={good.name} />
      <div>
        <BasketCardName>{good.name}</BasketCardName>
        <BasketCardInfo>Color: {good.color || 'black'}</BasketCardInfo>
        <BasketCardInfo>Size: <TextUppercase>{good.size && good.size.length > 0 ? good.size[0] : 's'}</TextUppercase> </BasketCardInfo>
      </div>
    </BasketCardWrapper>
  )
}

BasketCard.propTypes = {
  good: PropTypes.object,
}