import Button from "./modalElements/Button";
import ModalFooter from "./modalElements/ModalFooter";
import ModalHeader from "./modalElements/ModalHeader";
import ModalWrapper from "./modalElements/ModalWrapper";


export default function ModalRemoveFromBasket({onClickDelete, setModalIsOpen}){
  function deleteGood(){
    onClickDelete();
    setModalIsOpen(false)
  }
  return(
    <ModalWrapper onClick={()=>setModalIsOpen(false)}> 
      <ModalHeader title='Are you sure you want to remove the item from the cart?'></ModalHeader>
      <ModalFooter>
        <Button btnColor='baseColor' onClick={deleteGood}>Yes</Button>
        <Button btnColor='white' onClick={()=>setModalIsOpen(false)}>No, let it stay!</Button>
      </ModalFooter>
    </ModalWrapper>
  )
}