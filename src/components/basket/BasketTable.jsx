import IconButton from "containers/IconButton/IconButton";
import BasketCard from "./BasketCard";
import { CardLink, RiDeleteBinLineStyle, Table, Tbody, TBodyTd, TBodyTr, THeader, THeaderTh, } from "./Basket.styled";
import PropTypes from 'prop-types';
import ModalRemoveFromBasket from "components/modals/ModalRemoveFromBasket";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function BasketTable({ basketGoods, deleteFromBasket }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [goodItem, setGoodItem] = useState(0);
  const scheme = useSelector(state => state.baseColor);

  function onClickDelete (good){
    setModalIsOpen(true);
    setGoodItem(good)
  }

  return (
    <Table>
      <THeader scheme={scheme}>
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
          <TBodyTr key={good.sku + good.color}>
            <TBodyTd  scheme={scheme}>
              <CardLink to={`/goods/${good.sku}`}>
                <BasketCard good={good}></BasketCard>
              </CardLink>
            </TBodyTd>
            <TBodyTd  scheme={scheme}>${good.price}</TBodyTd>
            <TBodyTd  scheme={scheme}>{good.amount}</TBodyTd>
            <TBodyTd  scheme={scheme} style={{ color: '#BEBCBD', textTransform: 'uppercase' }}>{good.shipping || 'FREE'}</TBodyTd>
            <TBodyTd  scheme={scheme}>${parseFloat((good.price * good.amount).toFixed(2))}</TBodyTd>
            <TBodyTd  scheme={scheme}>
              <IconButton background='white' onClick={() => onClickDelete(good)} ariaLabel='delete good from basket' style={{ position: 'relative', left: '50%', transform: 'translateX(-50%)' }}>
                <RiDeleteBinLineStyle scheme={scheme}></RiDeleteBinLineStyle>
              </IconButton>
            </TBodyTd>
          
          </TBodyTr>
        ))}
      </Tbody>
      { modalIsOpen && 
         <ModalRemoveFromBasket 
            onClickDelete={() => deleteFromBasket(goodItem)} 
            setModalIsOpen={setModalIsOpen}>
         </ModalRemoveFromBasket>
      }
    </Table>
  );
}

BasketCard.propTypes = {
  basketGoods: PropTypes.object,
  deleteFromBasket: PropTypes.func,
} 