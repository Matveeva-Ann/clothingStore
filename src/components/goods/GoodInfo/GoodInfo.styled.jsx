import styled from '@emotion/styled';

export const GoodWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 30px;
  margin: 0 auto;
  max-width: 1100px;
  padding: 30px;
`

export const GoodImg = styled.img`
  border-radius: 8px;
`

export const GoodInformation = styled.div`
  font-family: Arial, Helvetica, sans-serif;
`
export const GoodCategory = styled.span`
  color: ${props => props.theme.colors.grayText};
`
export const GoodDescriptionItem = styled.li`
  list-style: none;
  &::before {
  content: "– "; 
  margin-right: 5px;
}
`
export const GoodsDescriptionList = styled.ul`
  padding: 0;
  text-align: start;
`
export const GoodsColorsList = styled.ul`
  display: flex;
  padding: 0;
  gap: 15px;
`
export const GoodsColorsItem = styled.label`
  position: relative;
  display: block;
  list-style: none;
  cursor: pointer;
  width: 35px;
  height: 35px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  border: 1px solid #807d7e6e;
  background-color: ${props => props.colorObj.color};
  &:active{
    transform: scale(1.05);
  }
  &::before{
    content: '';
    display: block;
    position: absolute;
    width: 0;
    height: 4px;
    background-color: black;
    bottom: -10px;
    transition: width 150ms linear;
  }
  &:hover::before{
    width:100%;
  }
`
export const InputRadio = styled.input`
   display: none;
`

export const SelectedColor = styled.div`
  
`

export const PropertyName = styled.p`
  color: ${props => props.theme.colors.black};
  font-weight: 700;
  margin: 20px 0;
`
export const AccentText = styled.span`
  color: ${props => props.theme.colors.accentText};
  font-weight: 400;
`

export const SelectedColorPic = styled.div`
  width: 35px;
  height: 35px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  border: 1px solid #807d7e6e;
  background-color: ${props => props.color};
`

export const AddBasketBtn = styled.button`
   text-decoration: none;
   cursor: pointer;
   display: block;
   padding: 10px 15px;
   background-color: ${props => props.theme.colors.blackText};
   color: ${props => props.theme.colors.white};
   font-size: 1.5vw;
   &:active{
     transform: scale(1.02);
   }
`