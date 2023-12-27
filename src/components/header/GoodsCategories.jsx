import { useEffect, useState } from 'react';
import { urlCategories } from 'constants/urlGoodsCollection';
import sendRequest from 'helpers/sendRequest';
import { CategoriesLink, CategoriesList } from './Header.styled';
import { useTranslation } from 'react-i18next';

export default function GoodsCategories() {
  const [ , setIndexActive] = useState(0);
  const [categories, setCategories] = useState([]);
  const { t } = useTranslation();
  
  //отримання даних з сервера про категорії
  useEffect(() => {
    sendRequest(urlCategories).then(data => {
      setCategories(data)
    })
  }, [])

  return (
    <nav>
      <CategoriesList>
        {categories.map((category, index) => {
          return (
            <li key={category.name} onClick={() => setIndexActive(index)}>
              <CategoriesLink to={`/${category.name}`}>{t(category.name)}</CategoriesLink>
            </li>
          )
        })}
      </CategoriesList>
    </nav>
  )
}