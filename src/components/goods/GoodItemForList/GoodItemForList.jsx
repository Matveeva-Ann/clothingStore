import ModalAddToBasket from 'components/modals/ModalAddToBasket';
import { iconSize } from 'constants';
import IconButton from 'containers/IconButton/IconButton';
import { useState } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { favoriteGoods } from 'redux/favoriteSlice';
import { GoodColors, GoodImage} from '../GoodInfo';
import { AddBasketBtn, AiFillHeartStyle, BsFillBasket3FillSVG } from '../GoodInfo/GoodInfo.styled';
import { IconsWrapper } from '../GoodItem/GoodItem.styled';
import {
  GoodItemBuy,
  GoodItemName,
  GoodItemPrice,
  Wrapper,
  WrapperInfo,
} from './GoodItemForList.styled';

export default function GoodItemForList({ cardData }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [color, setColor] = useState(cardData.colors?.[0]?.name);
  const [good, setGood] = useState(cardData);
  const [isFavorite, setIsFavorite] = useState(cardData.favorite);
  const favorites = useSelector(state => state.favorite);
  const dispatch = useDispatch();
  const isUserLogin = useSelector(store => store.login);
  const navigate = useNavigate();

  // вибір кольору
  function clickOnCalor(elem = {}) {
    const newColorsArr = good.colors.map(color => ({
      ...color,
      isChecked: color.color === elem.color,
    }));
    setGood(prevGood => ({ ...prevGood, colors: newColorsArr }));
    setColor(elem.name);
  }
  // перемикач на додавання\видалення з вибраного
  function toggleFavorite(goodSku) {
    if(!isUserLogin){
      navigate('/loginPage', {state: `/`})
      return goodSku;
    }
    const isFavorite = favorites.some((favorite) => favorite.sku === goodSku);
    setIsFavorite(!isFavorite);
    const filteredLSFavorite = isFavorite
      ? favorites.filter((elem) => elem.sku !== goodSku)
      : [...favorites, { ...good, color: color }];
    dispatch(favoriteGoods(filteredLSFavorite))
  }

  return (
    <Wrapper>
      <GoodImage
        good={good}
        color={color}
        clickOnCalor={clickOnCalor}
        setColor={setColor}
        height="300px"
      ></GoodImage>
      <WrapperInfo to={`/goods/${good.sku}`}>
        <div>
          <GoodItemName>{good.name}</GoodItemName>
          <ul>
            {good.description?.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <GoodColors
            color={good.color}
            good={good}
            clickOnCalor={clickOnCalor}
          ></GoodColors>
        </div>
      </WrapperInfo>
      <GoodItemBuy>
        <GoodItemPrice> Ціна: {good.price}</GoodItemPrice>
        <IconsWrapper>
            <IconButton
              onClick={() => toggleFavorite(good.sku)}
              background="white"
              ariaLabel={"add to favorite"}
            >
              {isFavorite ? (
                <AiFillHeartStyle></AiFillHeartStyle>
              ) : (
                <AiOutlineHeart size={iconSize.sm} tyle={{ color: "#807D7E" }}></AiOutlineHeart>
              )}
            </IconButton>

            <AddBasketBtn onClick={()=> setModalIsOpen(!modalIsOpen)}>
              <BsFillBasket3FillSVG></BsFillBasket3FillSVG> Додати в кошик
            </AddBasketBtn>
          </IconsWrapper>
          {modalIsOpen && (
          <ModalAddToBasket good={cardData} selectedColor={color} onClick={setModalIsOpen}></ModalAddToBasket>
        )}
      </GoodItemBuy>
    </Wrapper>
  );
}
