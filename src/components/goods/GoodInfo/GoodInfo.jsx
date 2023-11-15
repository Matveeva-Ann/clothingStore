import ModalAddToBasket from "components/modals/ModalAddToBasket";
import { iconSize } from "constants";
import { urlGoods } from "constants/urlGoodsCollection";
import IconButton from "containers/IconButton/IconButton";
import sendRequest from "helpers/sendRequest";
import { useEffect, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsFillBasket3Fill } from "react-icons/bs";
import { useParams } from "react-router-dom";
import { IconsWrapper } from "../GoodItem/GoodItem.styled";
import {
  AccentText,
  AddBasketBtn,
  GoodCategory,
  GoodDescriptionItem,
  GoodImg,
  GoodInformation,
  GoodsColorsItem,
  GoodsColorsList,
  GoodsDescriptionList,
  GoodWrapper,
  InputRadio,
  PropertyName,
  SwipeBtnLeft,
  SwipeBtnRight,
} from "./GoodInfo.styled";
import PropTypes from "prop-types";
import "./style.css";
import Loading from "pages/Additionals/Loading/Loading";
import ErrorRequest from "pages/Additionals/ErrorRequest/ErrorRequest";
import BreadCrumbs from "components/breadCrumbs/breadCrumbs";
import defaultImg from '../img/1_480x480.png';
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

const Status = {
  LOADING: "loading",
  RESOLVED: "resolved",
  REJECTED: "rejected",
};
export default function GoodInfo({ setFavoriteCount, setBasketCount }) {
  const [good, setGood] = useState({});
  const [color, setColor] = useState("");
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [status, setStatus] = useState(Status.LOADING);
  const [linksArr, setLinksArr] = useState([]);
  //параметр з ссилки
  const { goodId } = useParams();

  const fetchData = async () => {
    try {
      const data = await sendRequest(urlGoods);
      const cardData = data.find((good) => Number(good.sku) === Number(goodId));
      setGood(cardData);
      setColor(cardData.colors?.[0]?.name);
      checkFavorite(cardData);
      setStatus(Status.RESOLVED);
      setLinksArr([
        {
          link: '',
          name: 'Home',
        },
        {
          link: `Shop`,
          name: `Wardrobe for Everyone`,
        },
        {
          link: `${cardData.category}`,
          name: `${cardData.category}`,
        }
      ])
    } catch (e) {
      setStatus(Status.REJECTED);
    }
  };

  // імітація запиту на отримання даних по одному товару
  useEffect(() => {
    fetchData();
  }, [goodId]);

  // перевірка чи товар знаходиться у вибраному
  function checkFavorite(cardData) {
    const lSFavorite =
      JSON.parse(window.localStorage.getItem("favorite")) || [];
    lSFavorite.map((favorite) => setIsFavorite(favorite.sku === cardData.sku));
  }

  // вибір кольору
  function clickOnCalor(elem={}) {
    const newColorsArr = good.colors.map((color) => ({
      ...color,
      isChecked: color.color === elem.color,
    }));
    setGood((prevGood) => ({ ...prevGood, colors: newColorsArr }));
    setColor(elem.name);
  }

  // перемикач на додавання\видалення з вибраного
  function toggleFavorite(goodSku) {
    const lSFavorite =
      JSON.parse(window.localStorage.getItem("favorite")) || [];
    const isFavorite = lSFavorite.some((favorite) => favorite.sku === goodSku);
    setIsFavorite(!isFavorite);
    const filteredLSFavorite = isFavorite
      ? lSFavorite.filter((elem) => elem.sku !== goodSku)
      : [...lSFavorite, good];
    window.localStorage.setItem("favorite", JSON.stringify(filteredLSFavorite));
    setFavoriteCount(filteredLSFavorite.length);
  }

  // додавання товару в кошик (буду дороблюватись, щоб коли різні кольори товару то кидало як різні товари, а не збільшувало кількісь)
  function addToBasket() {
    const lSBasket = JSON.parse(window.localStorage.getItem("basket")) || [];
    const isInBasket = lSBasket.some((elem) => elem.sku === good.sku);
    // const isInBasket = lSBasket.some(elem => elem.sku === good.sku && elem.color === color);
    let newBasketArr = isInBasket
      ? lSBasket.map((elem) =>
        elem.sku === good.sku
          ? { ...elem, amount: elem.amount + 1, color: color }
          : elem
      )
      : [...lSBasket, { ...good, amount: 1, color: color }];

    window.localStorage.setItem("basket", JSON.stringify(newBasketArr));
    setBasketCount(newBasketArr.length);
  }

  function findImg(imagePathArr) {
    const foundImage = imagePathArr.find(elem => elem.color === color);
    return foundImage ? foundImage.url : imagePathArr[0]?.url || defaultImg;
  }

  function changeImg(good, action) {
    const index = good.colors?.findIndex(elem => elem.name === color);
    let nextColorObj = {}
    switch (action) {
      case 'decrement':
        nextColorObj = good.colors[index + 1] || good.colors[0];
        break;
      case 'increment':
        nextColorObj = good.colors[index - 1] || good.colors[good.colors.length - 1];
        break;
      default:
        nextColorObj = good.colors[index].name;
        break;
    }
    clickOnCalor(nextColorObj);
    setColor(nextColorObj.name);
  }


  if (status === "loading") {
    return <Loading></Loading>;
  } else if (status === "resolved") {
    return (
      <>
        <BreadCrumbs linksArr={linksArr} name={good.name}></BreadCrumbs>
        <GoodWrapper>
          <div style={{ position: 'relative', overflow: 'hidden', }}>
            <GoodImg
              src={findImg(good.imagePath)}
              alt={good.name}
              height="530px"
            />
            <SwipeBtnLeft onClick={() => changeImg(good, 'increment')} disabled={!good.colors || !good.imagePath}><SlArrowLeft size={20}></SlArrowLeft> </SwipeBtnLeft>
            <SwipeBtnRight onClick={() => changeImg(good, 'decrement')} disabled={!good.colors || !good.imagePath}><SlArrowRight size={20}></SlArrowRight> </SwipeBtnRight>
          </div>
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

            {good.colors &&
              <>
                <PropertyName>
                  <AccentText>Колір:</AccentText> {color}
                </PropertyName>
                <div>
                  Варіанти кольорів:
                  <GoodsColorsList>
                    {good.colors.map((elem, index) => (
                      <li
                        key={index}
                        title={elem.name}
                        onClick={() => clickOnCalor(elem)}
                        style={{ listStyle: "none" }}
                      >
                        <InputRadio
                          type="radio"
                          name="color"
                          className="inputRadio"
                          id={index}
                          readOnly
                          checked={elem.isChecked}
                        />
                        <GoodsColorsItem
                          colorObj={elem}
                          className="goodsColorsItem"
                          htmlFor={index}
                        ></GoodsColorsItem>
                      </li>
                    ))}
                  </GoodsColorsList>
                </div>
              </>

            }

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
                  <AiFillHeart
                    size={iconSize.sm}
                    style={{ color: "#8A33FD" }}
                  ></AiFillHeart>
                ) : (
                  <AiOutlineHeart
                    size={iconSize.sm}
                    style={{ color: "#807D7E" }}
                  ></AiOutlineHeart>
                )}{" "}
              </IconButton>
              <AddBasketBtn onClick={() => setIsOpenModal(!isOpenModal)}>
                <BsFillBasket3Fill
                  style={{ color: "#FFFFFF", marginRight: "10px" }}
                  size="16px"
                ></BsFillBasket3Fill>{" "}
                Додати в кошик
              </AddBasketBtn>
            </IconsWrapper>
          </GoodInformation>
          {isOpenModal && (
            <ModalAddToBasket
              onClickBasket={addToBasket}
              onClick={() => setIsOpenModal(!isOpenModal)}
              good={good}
              selectedColor = {color}
            ></ModalAddToBasket>
          )}
        </GoodWrapper>
      </>);
  } else if (status === "rejected") {
    return <ErrorRequest></ErrorRequest>;
  }
}

GoodInfo.propTypes = {
  setFavoriteCount: PropTypes.func,
  setBasketCount: PropTypes.func,
};
