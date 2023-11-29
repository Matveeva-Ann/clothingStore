import { useEffect, useState } from 'react';
import { urlCategories } from 'constants/urlGoodsCollection';
import sendRequest from 'helpers/sendRequest';
import { CategoriesLink, CategoriesList } from './Header.styled';
import { useSelector } from 'react-redux';

export default function GoodsCategories() {
  const [ , setIndexActive] = useState(0);
  const [categories, setCategories] = useState([]);
  const scheme = useSelector(state => state.baseColor);
  
  //отримання даних з сервера про категорії
  useEffect(() => {
    sendRequest(urlCategories).then(data => {
      setCategories(data)
    })
  }, [])

  return (
    <nav>
      <CategoriesList scheme={scheme}>
        {categories.map((category, index) => {
          return (
            <li key={category.name} onClick={() => setIndexActive(index)}>
              <CategoriesLink scheme={scheme} to={`/${category.name}`}>{category.name}</CategoriesLink>
            </li>
          )
        })}
      </CategoriesList>
    </nav>
  )
}