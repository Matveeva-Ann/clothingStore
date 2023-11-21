
import LinkButton from "containers/LinkButton/LinkButton";
import { SlideContent, SlideStyle } from "./Slide2.styled";


export default function Slide2() {
  return (
    <SlideStyle>
      <SlideContent>
        <LinkButton size="big" link='/Men'>For Men</LinkButton>
        <LinkButton size="big" link='/Women'>For Women</LinkButton>
        <LinkButton size="big" link='/Children'>For Children</LinkButton>
      </SlideContent>
    </SlideStyle>
  )
}