import WishlistTitle from "components/wishlist/WishlistTitle";
import { WishlistList, WishlistPoint, } from "../components/wishlist/Wishlist.styled";
import WishListEmpty from "./Additionals/wishListEmpty/WishListEmpty";
import WishlistItem from "../components/wishlist/WishlistItem";
import BreadCrumbs from "components/breadCrumbs/breadCrumbs";
import { useDispatch, useSelector } from 'react-redux';
import { favoriteGoods } from "redux/favoriteSlice";
import { basketGoods } from "redux/basketSlice";
import { toast } from 'react-toastify';

export default function Wishlist() {
  const favoriteArr = useSelector(state => state.favorite)
  const dispatch = useDispatch();
  const basketArr = useSelector(state => state.basket);


  // видалити з обраного
  function deleteFavorite(sku) {
    const updateArr = [...favoriteArr];
    const index = updateArr.findIndex(elem => elem.sku === sku)
    updateArr.splice(index, 1)
    dispatch(favoriteGoods(updateArr))
  }

  // додати в корзину
  function addGoodToBasket(good) {
    const goodUpdate = { ...good, amount: 1 };
    const newBasketArr = [...basketArr];
    const existingItemIndex = newBasketArr.findIndex((elem) => elem.sku === goodUpdate.sku);
    if (existingItemIndex !== -1) {
      newBasketArr[existingItemIndex] = { ...newBasketArr[existingItemIndex], amount: newBasketArr[existingItemIndex].amount + 1 };
    } else {
      newBasketArr.push(goodUpdate);
    }
    dispatch(basketGoods(newBasketArr));
    toast.success('🎉  Ваш товар успішно додано в кошик!', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      style: {backgroundColor: '#8A33FD', fontSize: '20px', textAlign: 'center'}
      });
  }

  const linksArr = [
    {
      link: '',
      name: 'Home',
    }
  ]

  return (
    <>
      {favoriteArr.length === 0
        ? <WishListEmpty />
        : <>
          <BreadCrumbs linksArr={linksArr} name={'Wishlist'}></BreadCrumbs>
          <WishlistTitle></WishlistTitle>
          <WishlistList>
            {favoriteArr.map((good, index) => (
              <WishlistPoint key={good.sku}>
                <WishlistItem
                  good={good}
                  deleteFavorite={() => deleteFavorite(good.sku)}
                  addGoodToBasket={() => addGoodToBasket(good)}
                ></WishlistItem>
              </WishlistPoint>
            ))}
          </WishlistList>
        </>
      }
    </>
  );
}
