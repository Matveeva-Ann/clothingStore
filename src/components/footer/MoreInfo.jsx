import { List, ListItem, ListItemLink, ListTitle, ListWrapper } from "./Footer.styled";

export default function MoreInfo (){
  return(
    <ListWrapper>
    <ListTitle>More Info</ListTitle>
    <List>
      <ListItem><ListItemLink>support@euphoria.in</ListItemLink></ListItem>
      <ListItem><ListItemLink>Term and Conditions</ListItemLink></ListItem>
      <ListItem><ListItemLink>Privacy Policy</ListItemLink></ListItem>
      <ListItem><ListItemLink>Shipping Policy</ListItemLink></ListItem>
      <ListItem><ListItemLink>Sitemap</ListItemLink></ListItem>
    </List>
  </ListWrapper>
  )
}