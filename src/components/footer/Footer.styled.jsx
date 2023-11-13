import styled from '@emotion/styled';

export const FooterWrapper = styled.div `
  width: 100%;
  display: flex;
  padding: 60px 110px;
  background-color: ${props => props.theme.colors.accentText};
`
export const FooterLinks = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1060px;
  width: 100%;
  gap: 10px;
  margin: 0 auto;
`

export const ListWrapper = styled.div`
  color: ${props => props.theme.colors.backgroundAccent};
  font-family: Arial, Helvetica, sans-serif;
  flex-grow: 1;
  flex-basis: 0;
`
export const ListTitle = styled.h3`
  font-size: ${props => props.theme.fontSize.subTitleLittle};
  font-weight: 700;
`
export const List = styled.ul `
  list-style: none;
  padding: 0;
  color: ${props => props.theme.colors.backgroundAccent};
`

export const ListItem = styled.li `
 
`
export const ListItemLink = styled.a `
  text-decoration: none;
  display: inline-block;
  color: inherit;
  padding: 8px 0;
  font-size: ${props => props.theme.fontSize.normal};
`
