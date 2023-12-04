import ModalAddToBasket from "components/modals/ModalAddToBasket";
import { iconSize } from "constants";
import IconButton from "containers/IconButton/IconButton";
import { useEffect, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { IconsWrapper } from "../GoodItem/GoodItem.styled";
import { AccentText, AddBasketBtn, AiFillHeartStyle, BsFillBasket3FillSVG, GoodCategory, GoodDescriptionItem, GoodInformation, GoodsDescriptionList, GoodWrapper, PropertyName, } from "./GoodInfo.styled";
import PropTypes from "prop-types";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import GoodImage from "./GoodImage";
import GoodColors from "./GoodColors";
import { favoriteGoods } from "redux/favoriteSlice";
import { modalAddToBasket } from "redux/modalAddToBasketSlice";

export default function GoodInfo({ cardData }) {
  // const [isOpenModal, setIsOpenModal] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [color, setColor] = useState(cardData.colors?.[0]?.name);
  const [good, setGood] = useState(cardData);
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorite);

  const modalIsOpen = useSelector(state => state.modalAddToBasket)

  // перевірка при першому рендері чи товар знаходиться у вибраному
  useEffect(()=>{
    const isFavorite = favorites.some((favorite) => favorite.sku === good.sku);
    setIsFavorite( isFavorite );
  }, [])
  
  // вибір кольору
  function clickOnCalor(elem = {}) {
    const newColorsArr = good.colors.map((color) => ({
      ...color,
      isChecked: color.color === elem.color,
    }));
    setGood((prevGood) => ({ ...prevGood, colors: newColorsArr }));
    setColor(elem.name);
  }

  // перемикач на додавання\видалення з вибраного
  function toggleFavorite(goodSku) {
    const isFavorite = favorites.some((favorite) => favorite.sku === goodSku);
    setIsFavorite(!isFavorite);
    const filteredLSFavorite = isFavorite
      ? favorites.filter((elem) => elem.sku !== goodSku)
      : [...favorites, { ...good, color: color }];
    dispatch(favoriteGoods(filteredLSFavorite))
  }

  return (
    <>
      <GoodWrapper>
        <GoodImage good={good} height='530px' color={color} clickOnCalor={clickOnCalor} setColor={setColor} ></GoodImage>
        <GoodInformation>
          <GoodCategory>For {good.category}</GoodCategory>
          <h2>{good.name}</h2>
          <GoodsDescriptionList>
            {good.description?.map((elem, index) => {
              return (
                <GoodDescriptionItem key={index}>{elem}</GoodDescriptionItem>
              );
            })}
          </GoodsDescriptionList>

          {good.colors && (
            <GoodColors color={color} good={good} clickOnCalor={clickOnCalor}></GoodColors>
          )}

          <PropertyName>
            <AccentText>Ціна:</AccentText> ${good.price}
          </PropertyName>

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

            <AddBasketBtn onClick={() =>  dispatch(modalAddToBasket())}>
              <BsFillBasket3FillSVG></BsFillBasket3FillSVG> Додати в кошик
            </AddBasketBtn>
          </IconsWrapper>
        </GoodInformation>
        {modalIsOpen && (
          <ModalAddToBasket good={good} selectedColor={color}></ModalAddToBasket>
        )}
      </GoodWrapper>
    </>
  );
}

GoodInfo.propTypes = {
  cardData: PropTypes.object,
};
