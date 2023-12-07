import { ButtonStyle } from './Button.styled';
import PropTypes from 'prop-types';

export default function Button({ children, onClick }) {
  return <ButtonStyle onClick={onClick}>{children}</ButtonStyle>;
}

Button.propTypes = {
  children: PropTypes.string,
};
