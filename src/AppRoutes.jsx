import { Routes, Route } from 'react-router-dom';
import ErrorPageNotFound from 'pages/Additionals/ErrorPageNotFound/ErrorPageNotFound';
import Wishlist from 'pages/WishlistPage';
import Basket from 'pages/BasketPage';
import Home from "pages/Home";
import GoodsList from './components/goods/GoodsList/GoodsList';
import Layout from 'Layout';
import GoodPage from 'pages/GoodPage.jsx';
import LoginPage from 'pages/LoginPage';

export default function AppRoutes (){
  
  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route index element={<Home></Home>} />
        <Route path='goods' element={<GoodsList category={'Women'}></GoodsList>} />
        <Route path='/goods/:goodId' element={<GoodPage></GoodPage>} />
        <Route path='Shop' element={<GoodsList category={'All'}></GoodsList>} />
        <Route path='Men' element={<GoodsList category={'Men'}></GoodsList>} />
        <Route path='Women' element={<GoodsList category={'Women'}></GoodsList>} />
        <Route path='Children' element={<GoodsList category={'Children'}></GoodsList>} />
        <Route path='wishlist' element={<Wishlist></Wishlist>} />
        <Route path='basket' element={<Basket></Basket>} />
        <Route path='loginPage' element={<LoginPage></LoginPage>} />
        <Route path='*' element={<ErrorPageNotFound/>}/>
      </Route>
    </Routes>
  )
}