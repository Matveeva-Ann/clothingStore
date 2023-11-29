import { ButtonStyle } from "./Button.styled";
import PropTypes from 'prop-types';
import { useSelector } from "react-redux";


export default function Button ({children}){
  const scheme = useSelector(state => state.baseColor);

  return (
    <ButtonStyle scheme={scheme}>{children}</ButtonStyle>
  )
}

Button.propTypes = {
  children: PropTypes.string,
}