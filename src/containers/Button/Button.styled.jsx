import styled from '@emotion/styled';

export const ButtonStyle = styled.button`
  cursor: pointer;
  max-width: 250px;
  padding: 16px 60px;
  border-radius: 8px;
  font-size: 20px;
  font-weight: 700;
  background-color: var(--accentText);
  color: var(--white);
  border: none;
  outline: none;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  transition: transform 250ms linear;
  &:active{
    transform: scale(1.05);
  }
`

