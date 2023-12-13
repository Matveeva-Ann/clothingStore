import {GoodItemLittle} from "components/goods";
import Button from "./modalElements/Button";
import {ModalBody, ModalFooter, ModalHeader, ModalWrapper} from './modalElements';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { basketGoods } from "redux/basketSlice";
import { modalAddToBasket } from "redux/modalAddToBasketSlice";
export default function ModalAddToBasket({ good, selectedColor='black', onClick }) {
  const dispatch = useDispatch();
 
  const basket = useSelector(state => state.basket);
   function addToBasket() {
    const isInBasket = basket?.some(elem => elem.sku === good.sku && elem.color === selectedColor);

    const newBasketArr = isInBasket
      ? basket.map((elem) =>
        elem.sku === good.sku && elem.color === selectedColor
          ? { ...elem, amount: elem.amount + 1, color: selectedColor }
          : elem
      )
      : [...basket, { ...good, amount: 1, color: selectedColor }];

    dispatch(basketGoods(newBasketArr))
    dispatch(modalAddToBasket()); 
    if(onClick){
      onClick();
    }
  }

  return (
    <ModalWrapper closeModal={onClick}>
      <ModalHeader title='Add Product to basket'></ModalHeader>
      <ModalBody>
        <GoodItemLittle good={{...good, color: selectedColor}} modalAddToBasket={true}></GoodItemLittle>
      </ModalBody>
      <ModalFooter>
        <Button onClick={addToBasket} btnColor='base-color'>ADD TO BASKET</Button>
      </ModalFooter>
    </ModalWrapper>
  )
}

ModalAddToBasket.propTypes = {
  good: PropTypes.object,
}