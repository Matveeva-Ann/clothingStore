import IconButton from "containers/IconButton/IconButton";
import BasketCard from "./BasketCard";
import { RiDeleteBinLine } from "react-icons/ri";
import { CardLink, Table, Tbody, TBodyTd, TBodyTr, THeader, THeaderTh, } from "./Basket.styled";
import { iconSize } from "constants";
import PropTypes from 'prop-types';

export default function BasketTable({ basketGoods, deleteFromBasket }) {

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
            <TBodyTd style={{ color: '#BEBCBD', textTransform: 'uppercase'}}>{good.shipping || 'FREE'}</TBodyTd>
            <TBodyTd>${good.price * good.amount}</TBodyTd>
            <TBodyTd>
              <IconButton background='white' onClick={() => deleteFromBasket(good.sku)} ariaLabel='delete good from basket' style={{ position: 'relative', left: '50%', transform: 'translateX(-50%)' }}>
                <RiDeleteBinLine size={iconSize.sm} style={{ color: '#8A33FD' }}></RiDeleteBinLine>
              </IconButton>
            </TBodyTd>
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