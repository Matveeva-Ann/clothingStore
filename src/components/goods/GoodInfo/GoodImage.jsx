import { GoodImg, SwipeBtnLeft, SwipeBtnRight,} from "./GoodInfo.styled";
import defaultImg from '../img/1_480x480.png';
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import PropTypes from 'prop-types';

export default function GoodImage({color, good, clickOnCalor, setColor, height}) {

  function findImg(imagePathArr) {
    const foundImage = imagePathArr.find(elem => elem.color === color);
    return foundImage ? foundImage.url : imagePathArr[0]?.url || defaultImg;
  }

  function changeImg(good, action) {
    const index = good.colors?.findIndex(elem => elem.name === color);
    let nextColorObj = {}
    switch (action) {
      case 'decrement':
        nextColorObj = good.colors[index + 1] || good.colors[0];
        break;
      case 'increment':
        nextColorObj = good.colors[index - 1] || good.colors[good.colors.length - 1];
        break;
      default:
        nextColorObj = good.colors[index].name;
        break;
    }
    clickOnCalor(nextColorObj);
    setColor(nextColorObj.name);
  }


  return (
    <div style={{ position: 'relative', overflow: 'hidden', }}>
      <GoodImg
        src={findImg(good.imagePath)}
        alt={good.name}
        height={height}
      />
      <SwipeBtnLeft onClick={() => changeImg(good, 'increment')} disabled={!good.colors || !good.imagePath}><SlArrowLeft size={20}></SlArrowLeft> </SwipeBtnLeft>
      <SwipeBtnRight onClick={() => changeImg(good, 'decrement')} disabled={!good.colors || !good.imagePath}><SlArrowRight size={20}></SlArrowRight> </SwipeBtnRight>
    </div>
  )
}

GoodImage.propTypes = {
  color: PropTypes.string,
  good: PropTypes.object,
  clickOnCalor: PropTypes.func,
  setColor: PropTypes.func,
} 