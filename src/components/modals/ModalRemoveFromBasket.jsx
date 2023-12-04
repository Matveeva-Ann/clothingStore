import Button from "./modalElements/Button";
import { ModalFooter, ModalHeader, ModalWrapper} from './modalElements';

export default function ModalRemoveFromBasket({onClickDelete, setModalIsOpen}){
  function deleteGood(){
    onClickDelete();
    setModalIsOpen(false)
  }
  return(
    <ModalWrapper closeModal={()=>setModalIsOpen(false)}> 
      <ModalHeader title='Are you sure you want to remove the item from the cart?'></ModalHeader>
      <ModalFooter>
        <Button btnColor='baseColor' onClick={deleteGood}>Yes</Button>
        <Button btnColor='white' onClick={()=>setModalIsOpen(false)}>No, let it stay!</Button>
      </ModalFooter>
    </ModalWrapper>
  )
}

