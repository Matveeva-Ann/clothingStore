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
} from "./GoodInfo.styled";
import PropTypes from "prop-types";
import "./style.css";
import Loading from "pages/Additionals/Loading/Loading";
import ErrorRequest from "pages/Additionals/ErrorRequest/ErrorRequest";

const Status = {
  LOADING: "loading",
  RESOLVED: "resolved",
  REJECTED: "rejected",
};
export default function GoodInfo({ setFavoriteCount, setBasketCount }) {
  const [good, setGood] = useState(null);
  const [color, setColor] = useState("");
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [status, setStatus] = useState(Status.LOADING);

  //параметр з ссилки
  const { goodId } = useParams();

  // імітація запиту на отримання даних по одному товару
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await sendRequest(urlGoods);
        const cardData = data.find(
          (good) => Number(good.sku) === Number(goodId)
        );
        setGood(cardData);
        setColor(cardData.colors[0].name);
        checkFavorite(cardData);
        setStatus(Status.RESOLVED);
      } catch (e) {
        setStatus(Status.REJECTED);
      }
    };
    fetchData();
  }, [goodId]);

  // перевірка чи товар знаходиться у вибраному
  function checkFavorite(cardData) {
    const lSFavorite =
      JSON.parse(window.localStorage.getItem("favorite")) || [];
    lSFavorite.map((favorite) => setIsFavorite(favorite.sku === cardData.sku));
  }

  // вибір кольору
  function clickOnCalor(elem) {
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

  if (status === "loading") {
    return <Loading></Loading>;
  } else if (status === "resolved") {
    return (
      <GoodWrapper>
        <GoodImg
          src={good.imagePath}
          alt={good.name}
          width="400px"
          height="auto"
        />
        <GoodInformation>
          <GoodCategory>For {good.category}</GoodCategory>
          <h2>{good.name}</h2>
          <GoodsDescriptionList>
            {good.description.map((elem, index) => {
              return (
                <GoodDescriptionItem key={index}>{elem}</GoodDescriptionItem>
              );
            })}
          </GoodsDescriptionList>
          <PropertyName>
            <AccentText>Колір:</AccentText> {color}
          </PropertyName>
          <div>
            {" "}
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
                    defaultChecked={elem.isChecked}
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
          ></ModalAddToBasket>
        )}
      </GoodWrapper>
    );
  } else if (status === "rejected") {
    return <ErrorRequest></ErrorRequest>;
  }
}

GoodInfo.propTypes = {
  setFavoriteCount: PropTypes.func,
  setBasketCount: PropTypes.func,
};
