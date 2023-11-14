import styled from '@emotion/styled';
import { ImSpinner2 } from "react-icons/im";

export const LoadingWrapper = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   margin: 100px auto;
   min-height: 50vh;
   gap: 50px;
`

export const LoadingSvg = styled(ImSpinner2)`
   animation: loading 3s linear infinite;
   @keyframes loading {
     0%{
      transform: rotate(0deg);
     }
     100%{
      transform: rotate(359deg);
     }
   }
`
export const LoadingText = styled.p`
  font-size: 40px;
  font-family: Arial, Helvetica, sans-serif;
`