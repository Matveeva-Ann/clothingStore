import { IconButtonStyle } from "./IconButton.styled";
import PropTypes from 'prop-types';

export default function IconButton ({ background, onClick, children, ariaLabel, ...allyProps}){
  return(
    <IconButtonStyle background={background} type="button" aria-label={ariaLabel} {...allyProps} onClick={onClick}>
      {children}
    </IconButtonStyle>
  )
}

IconButton.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  background: PropTypes.string,
  ariaLabel: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  allyProps: PropTypes.object,
}