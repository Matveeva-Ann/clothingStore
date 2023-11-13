import { List, ListItem, ListItemLink, ListTitle, ListWrapper } from "./Footer.styled";

export default function NeedHelp (){
  return(
    <ListWrapper>
    <ListTitle>Need Help</ListTitle>
    <List>
      <ListItem><ListItemLink href="">Contact Us</ListItemLink></ListItem>
      <ListItem><ListItemLink href="">Track Order</ListItemLink></ListItem>
      <ListItem><ListItemLink href="">Returns &amp; Refunds</ListItemLink></ListItem>
      <ListItem><ListItemLink href="">FAQ's</ListItemLink></ListItem>
      <ListItem><ListItemLink href="">Career</ListItemLink></ListItem>
    </List>
  </ListWrapper>
  )
}