import { Btn } from "./LinkButton.styled";
import PropTypes from 'prop-types';
export default function LinkButton ({children, link, size='normal', color='blackText', colorText}){
  return(
    <Btn to={link} size={size} color={color} colortext={colorText}>
      {children}
    </Btn>
  )
}

LinkButton.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  link: PropTypes.string,
}