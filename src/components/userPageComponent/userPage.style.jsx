import styled from "@emotion/styled";

export const ColorsList = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 100px;
`
export const ChooseTitle = styled.h3`
  font-size: 30px;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  margin: 30px 0;
`
export const Item = styled.li`
  :nth-of-type(1){
    background-color: #8A33FD;
  }
  :nth-of-type(2){
    background-color: #157145;
  }
  :nth-of-type(3){
    background-color: #fd2d00;
  }
  :nth-of-type(4){
    background-color: #FFD700;
  }
  :nth-of-type(5){
    background-color: #e91e63;
  }
  :nth-of-type(6){
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
export const ButtonLogOut = styled.button`
    cursor: pointer;
   padding: 10px 40px;
   max-width: 350px;
   background-color: var(--black);
   color: var(--white);
   font-size: 1.5vw;
   text-transform:uppercase;
   text-align: center;
   border: none;
   border-radius: 8px;
   margin-left: 100px;
   &:active{
     transform: scale(1.02);
   }
`