import './styleReset.css';
import './fonts/fonts.css';
import { useEffect, useState } from 'react';
import AppRoutes from 'AppRoutes';

export default function App() {
  const [favoriteCount, setFavoriteCount] = useState(0);
  const [basketCount, setBasketCount] = useState(0);

  //кількість товарів в вибраному при першому завантаженні
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("favorite"));
    if (storedData) {
      setFavoriteCount(storedData.length);
    }
  }, [favoriteCount]);

  //кількість товарів в корзині при першому завантаженні
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("basket"));
    if (storedData) {
      setBasketCount(
        storedData.reduce((accum, elem) => accum + Number(elem.amount), 0)
      );
    }
  }, [basketCount]);

  return(
    <>
      <AppRoutes 
       setFavoriteCount={setFavoriteCount}
       setBasketCount={setBasketCount}
       favoriteCount={favoriteCount}
       basketCount={basketCount}
      ></AppRoutes>
    </>
  )
}
