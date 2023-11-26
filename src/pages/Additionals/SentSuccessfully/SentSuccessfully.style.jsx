import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Title = styled.h2`
  font-size: 40px;
  font-family: Arial, Helvetica, sans-serif;
  color: black;
  text-align: center;
  max-width: 80%;
`
export const Text = styled.p`
  font-size: 25px;
  font-family: Arial, Helvetica, sans-serif;
  color: black;
  text-align: center;
  max-width: 70%;
`
export const Wrapper = styled.div`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`

export const Counter = styled.p`
  font-size: 50px;
  font-family: Arial, Helvetica, sans-serif;
  color: black;
`

export const LinkStyle = styled(Link)`
   color: black;
   cursor: pointer;
   font-size: 35px;
`
export const Img = styled.img`
  width: 400px;
  height: auto;
  object-fit: cover;
`