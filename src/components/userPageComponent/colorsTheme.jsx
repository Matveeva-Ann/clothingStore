import { useEffect, useState } from "react";
import { ChooseTitle, ColorsList, Item, ItemButton } from "./userPage.style";


export default function ColorsTheme () {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'BASE');
  useEffect(()=>{
   document.documentElement.setAttribute('data-theme', theme);
   localStorage.setItem('theme', theme)
  }, [theme])

  return (
  <div style={{minHeight: '400px'}}>
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
