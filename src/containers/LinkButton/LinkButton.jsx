import { Btn } from "./LinkButton.styled";
import PropTypes from 'prop-types';
import { useSelector } from "react-redux";

export default function LinkButton ({children, link, size='normal', color='blackText', colorText}){
  const scheme = useSelector(state => state.baseColor);
  
  return(
    <Btn to={link} scheme={scheme} size={size} color={color} colortext={colorText}>
      {children}
    </Btn>
  )
}

LinkButton.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  link: PropTypes.string,
}