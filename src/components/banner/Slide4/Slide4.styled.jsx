import styled from "@emotion/styled";
import img from "../img/SI_header_desktop_g_przygotuj_sie_na_zime.jpg";

export const SlideStyle = styled.div`
  background-image: url(${img});
  width: 100%;
  min-height: 600px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 50px;
  z-index: 0;
  &::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #00000030;
    z-index: 1;
  }
`
export const SlideContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  max-width: 100%;
  font-family: Arial, Helvetica, sans-serif;
  z-index: 1;
`
export const LinkButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`
export const PromotionTitle = styled.h2`
  font-size: ${props => props.theme.fontSize.megaLarge};
  color: white;
  line-height: 93px;
  letter-spacing: -5px;
  text-align: center;
  margin: 40px 0;
  @media (width < 800px) {
    font-size: ${props => props.theme.fontSize.extraLarge};
    letter-spacing: 0px;
    font-weight: 500;
    line-height: 50px;
  }
`
export const ClothingDescription = styled.p`
  font-size: ${props => props.theme.fontSize.medium};
  color: white;
  text-align: center;
`