import styled from "@emotion/styled";

export const IconButtonStyle = styled.button `
  border: none;
  background-color: ${props => props.theme.colors[props.background]};
  color: ${props => props.background === 'grayText' 
                   ?  props.theme.colors.white 
                   : props.theme.colors.grayText
          };
  width: 44px;
  height: 44px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover{
    opacity: 0.9;
  }
  &:active{
    transform: scale(1.02);
  }
`