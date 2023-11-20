import { AccentText, GoodsColorsItem, GoodsColorsList, InputRadio, PropertyName } from "./GoodInfo.styled";
import PropTypes from 'prop-types';

export default function GoodColors({ color, good, clickOnCalor }) {

  return (
    <>
      <PropertyName>
        <AccentText>Колір:</AccentText> {color}
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