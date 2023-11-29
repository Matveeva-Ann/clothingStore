import styled from "@emotion/styled";

export const ColorsList = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
  justify-content: center;
`
export const ChooseTitle = styled.h3`
  font-size: 30px;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  margin: 30px 0;
`
export const Item = styled.li`
  :nth-child(1){
    background-color: #8A33FD;
  }
  :nth-child(2){
    background-color: #157145;
  }
  :nth-child(3){
    background-color: #fd2d00;
  }
  :nth-child(4){
    background-color: #FFD700;
  }
  :nth-child(5){
    background-color: #e91e63;
  }
  :nth-child(6){
    background-color: #9b59b6;
  }
`
export const ItemButton = styled.button`
  cursor: pointer;
  padding: 7px 10px;
  min-width: 150px;
  background-color: inherit;
  color: var(--white);
  border: none;
  outline: none;
  transition: transform 250ms linear;
  &:active{
    transform: scale(1.1);
  }
`