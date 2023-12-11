import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from '../../containers/Button/Button.jsx';

describe('Button Component', () => {
  it('renders with correct text', () => {
    const { getByText } = render(<Button>Click me</Button>);
    expect(getByText('Click me')).toBeInTheDocument();
  });

  it('calls onClick when button is clicked', () => {
    const onClickMock = jest.fn();
    const { getByText } = render(<Button onClick={onClickMock}>Click me</Button>);

    fireEvent.click(getByText('Click me'));
    
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});

  