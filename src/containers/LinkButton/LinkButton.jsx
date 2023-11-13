import { Btn } from "./LinkButton.styled";
import PropTypes from 'prop-types';

export default function LinkButton ({children, link}){
  return(
    <Btn to={link}>
      {children}
    </Btn>
  )
}

LinkButton.propTypes = {
  children: PropTypes.string,
  link: PropTypes.string,
}