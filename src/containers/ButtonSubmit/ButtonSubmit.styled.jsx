import styled from '@emotion/styled';


export const Button = styled.button`
  cursor: pointer;
  padding: ${props => props.padding};
  font-family: Arial, Helvetica, sans-serif;
  font-size: ${props => props.fontSize};
  background-color: ${props => props.bColor};
  border: none;
  outline: none;
  color: ${props => props.colorText};
  transition: transform 250ms linear;
  border-radius: ${props => props.radius};
  &:active{
    transform: scale(1.1);
  }
`