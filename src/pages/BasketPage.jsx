import BasketEmpty from "pages/Additionals/BasketEmpty/BasketEmpty";
import BasketInfoRegister from "components/basket/BasketInfoRegister";
import BasketTable from "components/basket/BasketTable";
import BreadCrumbs from "components/breadCrumbs/breadCrumbs";
import { useDispatch, useSelector } from 'react-redux';
import { basketGoods } from "redux/basketSlice";
import Total from "components/basket/Total";

export default function Basket() {
  const dispatch = useDispatch();
  const basketArr = useSelector(state => state.basket);

  function deleteFromBasket(good){
    const updatedBasket = basketArr.filter((elem) => elem.sku !== good.sku ? true : elem.color !== good.color);
    dispatch(basketGoods(updatedBasket))
  }
  const linksArr =[
    {
      link: '',
      name: 'Home',
    }
  ]
  
  return (
    <>
      {basketArr.length === 0 
        ? (<BasketEmpty></BasketEmpty>) 
        : (
           <>
             <BreadCrumbs linksArr={linksArr} name={'Add To Cart'}></BreadCrumbs>
             <BasketInfoRegister></BasketInfoRegister>
             <BasketTable basketGoods={basketArr} deleteFromBasket={deleteFromBasket}></BasketTable>
             <Total></Total>
           </>
        )
      }
    </>
  );
}
