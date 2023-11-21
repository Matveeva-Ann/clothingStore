import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { FaCheck } from "react-icons/fa";

export const GoodLink = styled(Link) `
  cursor: pointer;
  text-decoration: none;
`

export const GoodImg = styled.img`
  border-radius: 10px;
  object-fit: cover;
`

export const GoodName = styled.h3`
  font-family: Arial, Helvetica, sans-serif;
  font-size: ${props => props.theme.fontSize.normal};
  font-weight: 600;
  line-height: 28px;
  color: ${props => props.theme.colors.blackText};
  margin-top: 15px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;  
`
export const InfoBlock = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const GoodPrice = styled.span `
  font-size: ${props => props.theme.fontSize.small};
  font-weight: 700;
  line-height: 17px;
  letter-spacing: 0em;
  color: ${props => props.theme.colors.accentText};
  font-family: Arial, Helvetica, sans-serif;
`

export const IconsWrapper = styled.div`
  display: flex;
  gap: 10px;
`
export const IconsCheckWrapper = styled.div`
  position: relative;
`
export const FaCheckStyleWrapper = styled.div`
  position: absolute;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: green;
  right: -5px;
  top: -1px;
  
`
export const FaCheckStyle = styled(FaCheck)`
  color: white;
  font-size: 10px;
  text-align: center;
  vertical-align: text-top;
`