import { ModalBtn } from '../Modals.styled';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

export default function Button({ children, onClick, btnColor }) {
  const scheme = useSelector(state => state.baseColor);

  return (
    <ModalBtn scheme={scheme} type="button" onClick={onClick} btnColor={btnColor}>
      {children}
    </ModalBtn>
  )
} 

Button.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func,
  btnColor: PropTypes.string,
}