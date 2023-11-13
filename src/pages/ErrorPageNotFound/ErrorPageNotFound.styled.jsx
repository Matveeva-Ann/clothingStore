import styled from '@emotion/styled';

export const ErrorWrapper = styled.div`
  display: flex;
  padding: 80px 30px;
  margin: 0 auto;
  @media (width < 1000px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`
export const ErrorImg = styled.img`
  max-width: 70%;
  width: 100%;
  height: auto;
  object-fit: contain;
  margin-right: 20px;
`
export const ErrorText = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 2.6vw;
`
export const ErrorTextAccent = styled.span`
  font-weight: 700;
  text-transform: uppercase;
`
export const ErrorTextAction = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
`
export const ErrorTextActionTitle = styled.h5`
  font-weight: 500;
  text-align: center;
`