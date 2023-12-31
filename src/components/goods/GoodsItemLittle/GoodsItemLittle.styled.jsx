import styled from '@emotion/styled';


export const LittleGoodCard = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
`

export const LittleGoodLink = styled.a`
  cursor: pointer;
  text-decoration: none;
`

export const LittleGoodImg = styled.img`
  max-width: 160px;
  height: auto;
  border-radius: 10px;
  object-fit: cover;
`

export const LittleGoodName = styled.h3`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: var(--blackText);
`
export const LittleInfoBlock = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const LittleGoodPrice = styled.span`
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  letter-spacing: 0em;
  color: var(--accentText);
  font-family: Arial, Helvetica, sans-serif;
`

export const LittleGoodDescriptionItem = styled.li`
  list-style: none;
  &::before {
  content: "– "; 
  margin-right: 5px;
}
`
export const LittleGoodsList = styled.ul`
  padding: 0;
  text-align: start;
`
export const LittleTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex-grow: 1;
  margin-left: 20px;
`
export const IconsWrapper = styled.div`
  display: flex;
  gap: 10px;
`

export const CountGoods = styled.span `
  align-self: center;
`