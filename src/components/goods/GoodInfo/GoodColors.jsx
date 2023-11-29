import { AccentText, GoodsColorsItem, GoodsColorsList, InputRadio, PropertyName } from "./GoodInfo.styled";
import PropTypes from 'prop-types';
import { useSelector } from "react-redux";

export default function GoodColors({ color, good, clickOnCalor }) {
  const scheme = useSelector(state => state.baseColor);

  return (
    <>
      <PropertyName scheme={scheme}>
        <AccentText scheme={scheme}>Колір:</AccentText> {color}
      </PropertyName>
      <div>
        Варіанти кольорів:
        <GoodsColorsList>
          {good.colors.map((elem, index) => (
            <li key={index} title={elem.name} onClick={() => clickOnCalor(elem)} style={{ listStyle: "none" }}>
              <InputRadio type="radio" name="color" className="inputRadio" id={index} readOnly checked={elem.isChecked} />
              <GoodsColorsItem
                colorObj={elem}
                className="goodsColorsItem"
                htmlFor={index}
              ></GoodsColorsItem>
            </li>
          ))}
        </GoodsColorsList>
      </div>
    </>
  )
}

GoodColors.propTypes = {
  color: PropTypes.string,
  good: PropTypes.object,
  clickOnCalor: PropTypes.func,
} 