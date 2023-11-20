import ModalClose from './ModalClose/ModalClose';
import { ModalBg, ModalContainer } from '../Modals.styled';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { modalAddToBasket } from 'redux/modalAddToBasketSlice';
import { useDispatch } from 'react-redux';

export default function ModalWrapper ({children, closeModal}){
  const dispatch = useDispatch();
  const modalRoot = document.querySelector('#modal-root');
  
  function close(){
    closeModal();
    dispatch(modalAddToBasket())
  }

  return (
    createPortal(
      <ModalBg data-modal="true" onClick={(event) => event.target === event.currentTarget && (closeModal() || dispatch(modalAddToBasket())) }>
      <ModalContainer>
        <ModalClose onClick={close}></ModalClose>
        {children}
      </ModalContainer>
    </ModalBg>, modalRoot)
  )
}

ModalWrapper.propTypes = {
  children: PropTypes.array,
  onClick: PropTypes.func,
}