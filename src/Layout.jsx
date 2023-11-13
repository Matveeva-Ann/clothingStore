import Footer from "components/footer/Footer";
import Header from "components/header/Header";
import { Outlet } from "react-router-dom";

export default function Layout({favoriteCount, setFavoriteCount, basketCount, setBasketCount}) {

  return (
    <div style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
      <Header
        favoriteCount={favoriteCount}
        setFavoriteCount={setFavoriteCount}
        basketCount={basketCount}
        setBasketCount={setBasketCount}
      ></Header>
      <main style={{flexGrow: 1}}>
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </div>
  );
}
