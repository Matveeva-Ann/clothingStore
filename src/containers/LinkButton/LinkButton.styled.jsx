import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Btn = styled(Link)`
   text-decoration: none;
   cursor: pointer;
   display: block;
   padding: ${props => props.size === 'normal' ? '10px 15px' : props.size === 'big' ? '18px 25px' : 'initial'};
   max-width: ${props => props.size === 'big' ? 'none' : '250px'};
   background-color: var(--${props => props.color});
   color: ${props => props.colortext ||  'var(--white)'};
   font-size:  ${props => props.size === 'normal' ? '1.5vw' : props.size === 'big' ? '1.8vw' : 'initial'};
   text-transform: ${props => props.size === 'big' ? 'uppercase' : 'none'};
   text-align: center;
   border-radius: 8px;
   &:active{
     transform: scale(1.02);
   }

  @media (width < 1200px) {
   font-size:  ${props => props.size === 'normal' ? '1.5vw' : props.size === 'big' ? '25px' : 'initial'};
  }
  @media (width < 800px) {
   font-size:  ${props => props.size === 'normal' ? '1.5vw' : props.size === 'big' ? '20px' : 'initial'};
  }
`