import { Btn } from "./LinkButton.styled";
import PropTypes from 'prop-types';

export default function LinkButton ({children, link, size='normal', color, textColor}){
  console.log(size)
  return(
    <Btn to={link} size={size} color={color} textColor={textColor}>
      {children}
    </Btn>
  )
}

LinkButton.propTypes = {
  children: PropTypes.string,
  link: PropTypes.string,
}