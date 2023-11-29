import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Counter, Img, LinkStyle, Text, Title, Wrapper } from "./SentSuccessfully.style";
import img from './img/Screenshot_7-removebg-preview.png';
import { useSelector } from "react-redux";

export default function SentSuccessfully() {
  const navigate = useNavigate();
  const [seconds, setSeconds] = useState(7);
  const scheme = useSelector(state => state.baseColor);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(()=>{
    if(seconds === 0){
      navigate('/Shop', { replace: true })
    }
  }, [seconds, navigate])

  return (
    <Wrapper>
      <Img src={img} alt="cat" />
      <Title scheme={scheme}>Ваше замовлення успішно сформоване!</Title>
      <Text scheme={scheme}>Деталі замовлення можна подивитись в <LinkStyle scheme={scheme} to={'/loginPage'}>особистому кабінеті</LinkStyle></Text>
      <Text scheme={scheme} style={{fontSize: '25px'}}>Перехід на сторінку товарів через:</Text>
      <Counter scheme={scheme}> 00:0{seconds}</Counter>
    </Wrapper>
  )
}