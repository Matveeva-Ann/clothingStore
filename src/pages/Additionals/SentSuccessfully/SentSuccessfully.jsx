import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Counter, Img, LinkStyle, Text, Title, Wrapper } from "./SentSuccessfully.style";
import img from './img/Screenshot_7-removebg-preview.png';

export default function SentSuccessfully() {
  const navigate = useNavigate();
  const [seconds, setSeconds] = useState(7);

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
      <Title>Ваше замовлення успішно сформоване!</Title>
      <Text>Деталі замовлення можна подивитись в <LinkStyle to={'/userPage'}>особистому кабінеті</LinkStyle></Text>
      <Text style={{fontSize: '25px'}}>Перехід на сторінку товарів через:</Text>
      <Counter> 00:0{seconds}</Counter>
    </Wrapper>
  )
}