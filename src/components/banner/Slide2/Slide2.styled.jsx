import styled from "@emotion/styled";
import img from "../img/black_week_1311_desktop_UA.jpg";

export const SlideStyle = styled.div `
  background-image: url(${img});
  width: 100%;
  min-height: 600px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 100px;
`
export const SlideContent = styled.div `
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 20px;
  max-width: 100%;
  font-family: Arial, Helvetica, sans-serif;
`


