import { Routes, Route } from 'react-router-dom';
import ErrorPageNotFound from 'pages/Additionals/ErrorPageNotFound/ErrorPageNotFound';
import Wishlist from 'pages/WishlistPage';
import Basket from 'pages/BasketPage';
import LoginPage from 'pages/LoginPage';
import Home from "pages/Home";
import GoodsList from './components/goods/GoodsList/GoodsList';
import Layout from 'Layout';
import GoodPage from 'pages/GoodPage.jsx';

export default function AppRoutes ({ setFavoriteCount, setBasketCount, favoriteCount, basketCount }){
  return (
    <Routes>
      <Route element={
        <Layout
          favoriteCount={favoriteCount}
          setFavoriteCount={setFavoriteCount}
          basketCount={basketCount}
          setBasketCount={setBasketCount}
        />}>
        <Route index element={<Home setFavoriteCount={setFavoriteCount} countBasket={setBasketCount} setBasketCount={setBasketCount} favoriteCount={favoriteCount}></Home>} />
        <Route path='goods' element={<GoodsList category={'Women'} setFavoriteCount={setFavoriteCount} favoriteCount={favoriteCount} countBasket={setBasketCount}></GoodsList>} />
        <Route path='/goods/:goodId' element={<GoodPage setFavoriteCount={setFavoriteCount} setBasketCount={setBasketCount}></GoodPage>} />
        <Route path='Shop' element={<GoodsList category={'All'} setFavoriteCount={setFavoriteCount} favoriteCount={favoriteCount} countBasket={setBasketCount}></GoodsList>} />
        <Route path='Men' element={<GoodsList category={'Men'} setFavoriteCount={setFavoriteCount} favoriteCount={favoriteCount} countBasket={setBasketCount}></GoodsList>} />
        <Route path='Women' element={<GoodsList category={'Women'} setFavoriteCount={setFavoriteCount} favoriteCount={favoriteCount} countBasket={setBasketCount}></GoodsList>} />
        <Route path='Children' element={<GoodsList category={'Children'} setFavoriteCount={setFavoriteCount} favoriteCount={favoriteCount} countBasket={setBasketCount}></GoodsList>} />
        <Route path='wishlist' element={<Wishlist setFavoriteCount={setFavoriteCount} setBasketCount={setBasketCount}></Wishlist>} />
        <Route path='basket' element={<Basket setBasketCount={setBasketCount}></Basket>} />
        <Route path='loginPage' element={<LoginPage></LoginPage>} />
        <Route path='*' element={<ErrorPageNotFound/>}/>
      </Route>
    </Routes>
  )
}