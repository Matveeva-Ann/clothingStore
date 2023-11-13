import { List, ListItem, ListItemLink, ListTitle, ListWrapper } from "./Footer.styled";

export default function Location() {
  return (
    <ListWrapper>
      <ListTitle>Location</ListTitle>
      <List>
        <ListItem><ListItemLink>support@euphoria.in</ListItemLink></ListItem>
        <ListItem><ListItemLink>Eklingpura Chouraha, Ahmedabad Main Road</ListItemLink></ListItem>
        <ListItem><ListItemLink>(NH 8- Near Mahadev Hotel) Udaipur, India- 313002</ListItemLink></ListItem>
      </List>
    </ListWrapper>
  )
}