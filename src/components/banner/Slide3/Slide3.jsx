
import LinkButton from "containers/LinkButton/LinkButton";
import { SlideContent, SlideStyle } from "./Slide3.styled";
import { GoGift } from "react-icons/go";

export default function Slide3() {
  return (
    <SlideStyle>
      <SlideContent>
        <LinkButton size="big" link='/Shop' color='	#A0522D'><GoGift style={{marginRight: '20px'}} size={30} />Start Gift Shopping</LinkButton>
      </SlideContent>
    </SlideStyle>
  )
}