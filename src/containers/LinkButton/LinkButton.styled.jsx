import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Btn = styled(Link)`
   text-decoration: none;
   cursor: pointer;
   display: block;
   padding: 10px 15px;
   max-width: 350px;
   background-color: ${props => props.theme.colors.blackText};
   color: ${props => props.theme.colors.white};
   font-size: 1.5vw;
   &:active{
     transform: scale(1.02);
   }
`