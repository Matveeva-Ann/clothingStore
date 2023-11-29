import { ModalTitle } from '../Modals.styled';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

export default function ModalHeader({ title, children }) {
  const scheme = useSelector(state => state.baseColor);

  return (
    <>
      <ModalTitle scheme={scheme}>{title}</ModalTitle>
      {children}
    </>
  )
}

ModalHeader.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  title: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
}