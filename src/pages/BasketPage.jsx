import BasketEmpty from "components/basket/BasketEmpty";
import BasketInfoRegister from "components/basket/BasketInfoRegister";
import BasketTable from "components/basket/BasketTable";
import { useState } from "react";
import PropTypes from 'prop-types';

export default function Basket({setBasketCount}) {
  const [basketGoods, setBasketGoods] = useState(JSON.parse(window.localStorage.getItem("basket")) || []);
  
  function deleteFromBasket(sku){
    const updatedBasket = basketGoods.filter(elem => elem.sku !== sku);
    window.localStorage.setItem('basket', JSON.stringify(updatedBasket))
    setBasketGoods(updatedBasket);
    setBasketCount(updatedBasket.length)
  }

  return (
    <>
      {basketGoods.length === 0 
        ? (<BasketEmpty></BasketEmpty>) 
        : (
           <>
             <BasketInfoRegister></BasketInfoRegister>
             <BasketTable basketGoods={basketGoods} deleteFromBasket={deleteFromBasket}></BasketTable>
           </>
        )
      }
    </>
  );
}

Basket.propTypes = {
  setBasketCount: PropTypes.func,
}