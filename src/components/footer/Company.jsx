import { List, ListItem, ListItemLink, ListTitle, ListWrapper } from "./Footer.styled";

export default function Company() {
  return (
    <ListWrapper>
      <ListTitle>Company</ListTitle>
      <List>
        <ListItem><ListItemLink href="">About Us</ListItemLink></ListItem>
        <ListItem><ListItemLink href="">euphoria Blog</ListItemLink></ListItem>
        <ListItem><ListItemLink href="">euphoriastan</ListItemLink></ListItem>
        <ListItem><ListItemLink href="">Collaboration</ListItemLink></ListItem>
        <ListItem><ListItemLink href="">Media</ListItemLink></ListItem>
      </List>
    </ListWrapper>
  )
}