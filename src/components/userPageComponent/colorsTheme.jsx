import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOut } from "redux/isLoginSlice";
import { ButtonLogOut, ChooseTitle, ColorsList, Item, ItemButton } from "./userPage.style";

export default function ColorsTheme () {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'BASE');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(()=>{
   document.documentElement.setAttribute('data-theme', theme);
   localStorage.setItem('theme', theme)
  }, [theme])

  function logout (){
    dispatch(logOut());
    navigate('/', { replace: true })
  }

  return (
  <div style={{minHeight: '400px'}}>
      <ButtonLogOut onClick={logout}>Вийти</ButtonLogOut>

      <ChooseTitle>Вибрати тему:</ChooseTitle>
      <ColorsList>
        <Item><ItemButton onClick={() => setTheme("BASE")}>BASE</ItemButton></Item>
        <Item><ItemButton onClick={() => setTheme("GREEN")}>GREEN/BLUE</ItemButton></Item>
        <Item><ItemButton onClick={() => setTheme("RED")}>RED</ItemButton></Item>
        <Item><ItemButton onClick={() => setTheme("YELLOW")}>YELLOW</ItemButton></Item>
        <Item><ItemButton onClick={() => setTheme("PINK")}>PINK</ItemButton></Item>
        <Item><ItemButton onClick={() => setTheme("PURPLE")}>PURPLE</ItemButton></Item>
      </ColorsList>
    </div>
  );
}
