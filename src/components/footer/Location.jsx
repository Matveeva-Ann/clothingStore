import { useSelector } from "react-redux";
import { List, ListItem, ListItemLink, ListTitle, ListWrapper } from "./Footer.styled";

export default function Location() {
  const scheme = useSelector(state => state.baseColor);

  return (
    <ListWrapper scheme={scheme}>
      <ListTitle>Location</ListTitle>
      <List scheme={scheme}>
        <ListItem><ListItemLink>support@euphoria.in</ListItemLink></ListItem>
        <ListItem><ListItemLink>Eklingpura Chouraha, Ahmedabad Main Road</ListItemLink></ListItem>
        <ListItem><ListItemLink>(NH 8- Near Mahadev Hotel) Udaipur, India- 313002</ListItemLink></ListItem>
      </List>
    </ListWrapper>
  )
}