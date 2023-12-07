import { Routes, Route } from 'react-router-dom';
import ErrorPageNotFound from 'pages/Additionals/ErrorPageNotFound/ErrorPageNotFound';
import Wishlist from 'pages/WishlistPage';
import Basket from 'pages/BasketPage';
import Home from "pages/Home";
import GoodsList from './components/goods/GoodsList/GoodsList';
import Layout from 'Layout';
import GoodPage from 'pages/GoodPage.jsx';
import LoginPage from 'pages/LoginPage';
import CheckOutPage from 'pages/CheckOutPage';
import SentSuccessfully from 'pages/Additionals/SentSuccessfully/SentSuccessfully';
import BreadCrumbs from 'components/breadCrumbs/breadCrumbs';
import UserPage from 'pages/UserPage';
import RequireAuth from 'hoc/RequireAuth';


export default function AppRoutes (){
  
  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route index element={<Home></Home>} />
        <Route path='goods' element={<GoodsList category={'Women'}></GoodsList>} />
        <Route path='/goods/:goodId' element={<GoodPage></GoodPage>} />
        <Route path='Shop' element={<>
          <BreadCrumbs linksArr={[{ link: '', name: 'Home'}]} name='Wardrobe for Everyone'></BreadCrumbs>
          <GoodsList category={'All'}></GoodsList>
        </>} />
        <Route path='Men' element={<>
          <BreadCrumbs linksArr={[{ link: '', name: 'Home'}, { link: `Shop`, name: `Wardrobe for Everyone`,}]} name='Men'></BreadCrumbs>
          <GoodsList category={'Men'}></GoodsList> 
        </>}/>
        <Route path='Women' element={<>
          <BreadCrumbs linksArr={[{ link: '', name: 'Home'}, { link: `Shop`, name: `Wardrobe for Everyone`,}]} name='Women'></BreadCrumbs>
          <GoodsList category={'Women'}></GoodsList>
        </>} />
        <Route path='Children' element={<>
          <BreadCrumbs linksArr={[{ link: '', name: 'Home'}, { link: `Shop`, name: `Wardrobe for Everyone`,}]} name='Children'></BreadCrumbs>
          <GoodsList category={'Children'}></GoodsList>
        </>} />
        <Route path='CheckOutPage' element={<CheckOutPage></CheckOutPage>} />
        <Route path='wishlist' element={<Wishlist></Wishlist>} />
        <Route path='basket' element={<Basket></Basket>} />
        <Route path='loginPage' element={<LoginPage></LoginPage>} />
        <Route path='sentSuccessfully' element={<SentSuccessfully></SentSuccessfully>} />
        <Route path='userPage' element={
            <RequireAuth>
              <UserPage></UserPage>
            </RequireAuth>       
        }></Route>
        <Route path='*' element={<ErrorPageNotFound/>}/>
      </Route>
    </Routes>
  )
}