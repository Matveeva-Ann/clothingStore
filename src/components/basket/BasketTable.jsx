import IconButton from "containers/IconButton/IconButton";
import BasketCard from "./BasketCard";
import { RiDeleteBinLine } from "react-icons/ri";
import { CardLink, Table, Tbody, TBodyTd, TBodyTr, THeader, THeaderTh, } from "./Basket.styled";
import { iconSize } from "constants";
import PropTypes from 'prop-types';
import ModalRemoveFromBasket from "components/modals/ModalRemoveFromBasket";
import { useState } from "react";

export default function BasketTable({ basketGoods, deleteFromBasket }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [goodSku, setGoodSku] = useState(0);

  function onClickDelete (sku){
    setModalIsOpen(true);
    setGoodSku(sku)
  }

  return (
    <Table>
      <THeader>
        <tr>
          <THeaderTh>Product Details</THeaderTh>
          <THeaderTh>Price</THeaderTh>
          <THeaderTh>amount</THeaderTh>
          <THeaderTh>shipping</THeaderTh>
          <THeaderTh>subtotal</THeaderTh>
          <THeaderTh>action</THeaderTh>
        </tr>
      </THeader>
      <Tbody>
        {basketGoods.map((good) => (
          <TBodyTr key={good.sku}>
            <TBodyTd>
              <CardLink to={`/goods/${good.sku}`}>
                <BasketCard good={good}></BasketCard>
              </CardLink>
            </TBodyTd>
            <TBodyTd>${good.price}</TBodyTd>
            <TBodyTd>{good.amount}</TBodyTd>
            <TBodyTd style={{ color: '#BEBCBD', textTransform: 'uppercase' }}>{good.shipping || 'FREE'}</TBodyTd>
            <TBodyTd>${parseFloat((good.price * good.amount).toFixed(2))}</TBodyTd>
            <TBodyTd>
              <IconButton background='white' onClick={() => onClickDelete(good.sku)} ariaLabel='delete good from basket' style={{ position: 'relative', left: '50%', transform: 'translateX(-50%)' }}>
                <RiDeleteBinLine size={iconSize.sm} style={{ color: '#8A33FD' }}></RiDeleteBinLine>
              </IconButton>
            </TBodyTd>
            { modalIsOpen && <ModalRemoveFromBasket 
                              onClickDelete={() => deleteFromBasket(goodSku)} 
                              setModalIsOpen={setModalIsOpen}>
                           </ModalRemoveFromBasket>
           }
          </TBodyTr>
        ))}
      </Tbody>
    </Table>
  );
}

BasketCard.propTypes = {
  basketGoods: PropTypes.object,
  deleteFromBasket: PropTypes.func,
}