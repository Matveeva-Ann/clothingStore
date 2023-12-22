import styled from '@emotion/styled';
import flagUa from './icons/ukraine.svg';
import flagUk from './icons/united-kingdom.svg';

export const Select = styled.select`
  cursor: pointer;
  border: none;
  padding: 6px;
  outline: none;
  font-size: 16px;
  &:hover {
    opacity: 0.7;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const flagImages = {
  'en': flagUk,
  'uk': flagUa,
};

export const FlagSpan = styled.span`
  display: inline-block;
  width: 25px;
  height: 15px;
  margin-left: 5px;
  background-size: cover;
  background-position: center;
  background-image: url(${props => flagImages[props.img] || 'none'});
`;

