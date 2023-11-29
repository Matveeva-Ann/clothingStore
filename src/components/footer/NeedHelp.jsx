import { useSelector } from "react-redux";
import { List, ListItem, ListItemLink, ListTitle, ListWrapper } from "./Footer.styled";

export default function NeedHelp (){
  const scheme = useSelector(state => state.baseColor);

  return(
    <ListWrapper scheme={scheme}>
    <ListTitle>Need Help</ListTitle>
    <List scheme={scheme}>
      <ListItem><ListItemLink href="">Contact Us</ListItemLink></ListItem>
      <ListItem><ListItemLink href="">Track Order</ListItemLink></ListItem>
      <ListItem><ListItemLink href="">Returns &amp; Refunds</ListItemLink></ListItem>
      <ListItem><ListItemLink href="">FAQ's</ListItemLink></ListItem>
      <ListItem><ListItemLink href="">Career</ListItemLink></ListItem>
    </List>
  </ListWrapper>
  )
}