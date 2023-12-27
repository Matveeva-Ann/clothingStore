import IconButton from "containers/IconButton/IconButton";
import BasketCard from "./BasketCard";
import { CardLink, RiDeleteBinLineStyle, Table, Tbody, TBodyTd, TBodyTr, THeader, THeaderTh, } from "./Basket.styled";
import PropTypes from 'prop-types';
import ModalRemoveFromBasket from "components/modals/ModalRemoveFromBasket";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function BasketTable({ basketGoods, deleteFromBasket }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [goodItem, setGoodItem] = useState(0);
  const { t } = useTranslation();

  function onClickDelete (good){
    setModalIsOpen(true);
    setGoodItem(good)
  }

  return (
    <Table>
      <THeader>
        <tr>
          <THeaderTh>{t("basket.ProductDetails")}</THeaderTh>
          <THeaderTh>{t("basket.Price")}</THeaderTh>
          <THeaderTh>{t("basket.amount")}</THeaderTh>
          <THeaderTh>{t("basket.shipping")}</THeaderTh>
          <THeaderTh>{t("basket.subtotal")}</THeaderTh>
          <THeaderTh>{t("basket.action")}</THeaderTh>
        </tr>
      </THeader>
      <Tbody>
        {basketGoods.map((good) => (
          <TBodyTr key={good.sku + good.color}>
            <TBodyTd >
              <CardLink to={`/goods/${good.sku}`}>
                <BasketCard good={good}></BasketCard>
              </CardLink>
            </TBodyTd>
            <TBodyTd>${good.price}</TBodyTd>
            <TBodyTd>{good.amount}</TBodyTd>
            <TBodyTd style={{ color: '#BEBCBD', textTransform: 'uppercase' }}>{good.shipping || 'FREE'}</TBodyTd>
            <TBodyTd>${parseFloat((good.price * good.amount).toFixed(2))}</TBodyTd>
            <TBodyTd>
              <IconButton background='white' onClick={() => onClickDelete(good)} ariaLabel='delete good from basket' style={{ position: 'relative', left: '50%', transform: 'translateX(-50%)' }}>
                <RiDeleteBinLineStyle></RiDeleteBinLineStyle>
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