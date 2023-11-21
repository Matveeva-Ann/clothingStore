// import styled from "@emotion/styled";
// import img from "./img/Banner.jpg";

// export const BannerStyle = styled.div `
//   background-image: url(${img});
//   position: relative;
//   width: 100%;
//   min-height: 700px;
//   background-repeat: no-repeat;
//   background-size: cover;
//   background-position: center 0%;
//   display: flex;
//   align-items: center;
//   z-index: 0;
//   padding-left: 190px;
//   &::before{
//     content: '';
//     position: absolute;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     background-color: #00000025;
//     z-index: 1;
//   }
//   @media (width < 800px) {
//     background-position: 70%;
//     padding-left: 100px;
//   }
//   @media (width < 600px) {
//     background-position: 70%;
//     padding-left: 50px;
//   }
// `
// export const BannerContent = styled.div `
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   gap: 40px;
//   color: ${props => props.theme.colors.white};
//   max-width: 450px;
//   font-family: Arial, Helvetica, sans-serif;
//   z-index: 1;
// `
// export const ClothingDescription = styled.p `
//   font-size: ${props => props.theme.fontSize.medium};
// `

// export const PromotionTitle = styled.h2 `
//   font-size: ${props => props.theme.fontSize.megaLarge};
//   line-height: 93px;
//   letter-spacing: -5px;
//   @media (width < 800px) {
//     font-size: ${props => props.theme.fontSize.extraLarge};
//     letter-spacing: 0px;
//     font-weight: 500;
//     line-height: 50px;
//   }
// `