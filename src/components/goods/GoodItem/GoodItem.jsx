import ModalAddToBasket from "components/modals/ModalAddToBasket";
import { iconSize } from "constants";
import { useEffect, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BsFillBasket3Fill } from "react-icons/bs";
import { AiFillHeartStyle, FaCheckStyle, FaCheckStyleWrapper, GoodImg, GoodLink, GoodName, GoodPrice, IconsCheckWrapper, IconsWrapper, InfoBlock } from "./GoodItem.styled";
import PropTypes from 'prop-types';
import IconButton from "containers/IconButton/IconButton";
import defaultImg from '../img/1_480x480.png';
import { useSelector } from "react-redux";
export default function GoodItem({ good, onClickFavorite }) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isGoodInBasket, setIsGoodInBasket] = useState(false);
  const scheme = useSelector(state => state.baseColor);

  const goodsInBasket = useSelector(state => state.basket)

  useEffect(()=>{
    setIsGoodInBasket(goodsInBasket.some(elem => elem.sku === good.sku))
  }, [goodsInBasket, good.sku])

  function toggleModal() {
    setIsOpenModal(!isOpenModal);
  }

  return (
    <div>
      <GoodLink to={`/goods/${good.sku}`}>
        <GoodImg src={good.imagePath[0]?.url ?? defaultImg} alt={good.name} width={'270px'} height={'370px'}/>
        <GoodName scheme={scheme} title={good.name}>{good.name}</GoodName>
      </GoodLink>
      <InfoBlock>
        <GoodPrice scheme={scheme}>${good.price}</GoodPrice>
        <IconsWrapper>
          <IconButton  onClick={onClickFavorite} background='white' ariaLabel={'add to favorite'}>
            {good.favorite
              ? <AiFillHeartStyle scheme={scheme}></AiFillHeartStyle>
              : <AiOutlineHeart size={iconSize.sm} style={{ color: '#807D7E' }} ></AiOutlineHeart>
            }
          </IconButton>
          <IconButton background='white' onClick={toggleModal} ariaLabel={'add to basket'}> 
            {isGoodInBasket
               ? <IconsCheckWrapper title='товар вже в кошику'>
                    <BsFillBasket3Fill style={{ color: '#807D7E' }} size={iconSize.sm}></BsFillBasket3Fill>
                    <FaCheckStyleWrapper><FaCheckStyle></FaCheckStyle></FaCheckStyleWrapper>
                  </IconsCheckWrapper> 
               : <BsFillBasket3Fill style={{ color: '#807D7E' }} title='додати в кошик' size={iconSize.sm}></BsFillBasket3Fill> 
            }
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