import WishlistTitle from "components/wishlist/WishlistTitle";
import { useLocalStorage } from "helpers/hooks/useLocalStorage";
import { useState } from "react";
import { WishlistList, WishlistPoint, } from "../components/wishlist/Wishlist.styled";
import WishListEmpty from "../components/wishlist/wishListEmpty/WishListEmpty";
import WishlistItem from "../components/wishlist/WishlistItem";
import PropTypes from 'prop-types';

export default function Wishlist({ setBasketCount, setFavoriteCount }) {
  const [favorites, setFavorites] =
    useState(JSON.parse(window.localStorage.getItem("favorite"))) || [];
  const [, setLocalStorageCollection] = useLocalStorage("favorite");

  // видалити з обраного
  function deleteFavorite(index) {
    const updateArr = [...favorites];
    updateArr[index] = {
      ...updateArr[index],
      favorite: !updateArr[index].favorite,
    };
    const favoritesArr = updateArr.filter((el) => el.favorite);
    setFavorites(favoritesArr);
    setFavoriteCount(favoritesArr.length);
    setLocalStorageCollection(favoritesArr);
  }

  // додати в корзину
  function addGoodToBasket(good) {
    good.amount = 1;
    const basketArr = JSON.parse(window.localStorage.getItem("basket")) || [];
    const existingItem = basketArr.find((elem) => elem.sku === good.sku);

    existingItem ? existingItem.amount++ : basketArr.push(good);

    window.localStorage.setItem("basket", JSON.stringify(basketArr));
    setBasketCount(
      basketArr.reduce((accum, elem) => accum + Number(elem.amount), 0)
    );
  }

  return (
   <>
     {favorites.length === 0  
       ? <WishListEmpty />
       : <>
          <WishlistTitle></WishlistTitle>
          <WishlistList>
            {favorites.map((good, index) => (
              <WishlistPoint key={good.sku}>
                <WishlistItem
                  good={good}
                  deleteFavorite={() => deleteFavorite(index)}
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

Wishlist.propTypes = {
  setBasketCount: PropTypes.func,
  setFavoriteCount: PropTypes.func,
}