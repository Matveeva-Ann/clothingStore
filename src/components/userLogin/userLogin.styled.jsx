import styled from "@emotion/styled";
import { Form } from "formik";

export const FormStyle = styled(Form)`
  max-width: 45vw;
  margin: 50px auto 150px;
`
export const FieldWrapper= styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 30px;
  color: red;
  @media (width < 1200px) {
    width: 100%;
  }
`
export const Message = styled.p`
  position: absolute;
  top: -30px;
  left: 0;
  color: red;
`