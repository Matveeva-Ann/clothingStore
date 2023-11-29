import { BasketCardImg, BasketCardInfo, BasketCardName, BasketCardWrapper, TextUppercase } from "./Basket.styled"
import PropTypes from 'prop-types';
import { useSelector } from "react-redux";

export default function BasketCard({ good }) {
  const scheme = useSelector(state => state.baseColor);

  return (
    <BasketCardWrapper>
      <BasketCardImg src={good.imagePath.find(img=> img.color === good.color).url} alt={good.name} />
      <div>
        <BasketCardName  scheme={scheme}>{good.name}</BasketCardName>
        <BasketCardInfo  scheme={scheme}>Color: {good.color || 'black'}</BasketCardInfo>
        <BasketCardInfo  scheme={scheme}>Size: <TextUppercase>{good.size && good.size.length > 0 ? good.size[0] : 's'}</TextUppercase> </BasketCardInfo>
      </div>
    </BasketCardWrapper>
  )
}

BasketCard.propTypes = {
  good: PropTypes.object,
}