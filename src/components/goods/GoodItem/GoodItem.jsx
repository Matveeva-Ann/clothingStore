import ModalAddToBasket from "components/modals/ModalAddToBasket";
import { iconSize } from "constants";
import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BsFillBasket3Fill } from "react-icons/bs";
import { GoodImg, GoodLink, GoodName, GoodPrice, IconsWrapper, InfoBlock } from "./GoodItem.styled";
import PropTypes from 'prop-types';
import IconButton from "containers/IconButton/IconButton";
import defaultImg from '../img/1_480x480.png';
export default function GoodItem({ good, onClickFavorite }) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  function toggleModal() {
    setIsOpenModal(!isOpenModal);
  }

  return (
    <div>
      <GoodLink to={`/goods/${good.sku}`}>
        <GoodImg src={good.imagePath[0]?.url ?? defaultImg} alt={good.name} width={'270px'} height={'370px'}/>
        <GoodName title={good.name}>{good.name}</GoodName>
      </GoodLink>
      <InfoBlock>
        <GoodPrice>${good.price}</GoodPrice>
        <IconsWrapper>
          <IconButton  onClick={onClickFavorite} background='white' ariaLabel={'add to favorite'}>
            {good.favorite
              ? <AiFillHeart size={iconSize.sm} style={{ color: '#8A33FD' }} ></AiFillHeart>
              : <AiOutlineHeart size={iconSize.sm} style={{ color: '#807D7E' }} ></AiOutlineHeart>
            }
          </IconButton>
          <IconButton background='white' onClick={toggleModal} ariaLabel={'add to basket'}> 
            <BsFillBasket3Fill style={{ color: '#807D7E' }} size={iconSize.sm}></BsFillBasket3Fill>
          </IconButton>
        </IconsWrapper>
      </InfoBlock>
      {isOpenModal &&
        <ModalAddToBasket selectedColor = {good.colors[0].name} onClick={toggleModal} good={good}></ModalAddToBasket>
      }
    </div>
  )
}

GoodItem.propTypes = {
  good: PropTypes.object,
  onClick: PropTypes.func,
}