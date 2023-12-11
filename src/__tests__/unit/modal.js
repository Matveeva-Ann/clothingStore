import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';
import ModalAddToBasket from '../../components/modals/ModalAddToBasket.jsx';

jest.mock('react-dom', () => {
  return {
    ...jest.requireActual('react-dom'),
    createPortal: (node) => node,
  };
});

jest.mock('react-redux', () => {
  const originalModule = jest.requireActual('react-redux');
  return {
    ...originalModule,
    useDispatch: jest.fn(),
    useSelector: jest.fn(),
  };
});
describe('ModalAddToBasket Component', () => {
  beforeEach(() => {
    useDispatch.mockClear();
    useSelector.mockClear();
  });

  it('renders modal with correct content', () => {
    useSelector.mockReturnValueOnce([]);
    const dispatchMock = jest.fn();
    useDispatch.mockReturnValue(dispatchMock);

    const { getByText } = render(
      <ModalAddToBasket
        good={{ sku: 'mockedSku', name: 'Product Name', price: 10, img: 'product-image.jpg' }}
        selectedColor='black'
      />
    );

    expect(getByText('Add Product to basket')).toBeInTheDocument();
    expect(getByText('Product Name')).toBeInTheDocument();
    expect(getByText('$10')).toBeInTheDocument();
    expect(getByText('ADD TO BASKET')).toBeInTheDocument();
  });

  it('dispatches actions on "ADD TO BASKET" button click', () => {
    useSelector.mockReturnValueOnce([]); // Second useSelector call
    const dispatchMock = jest.fn();
    useDispatch.mockReturnValue(dispatchMock);

    const { getByText } = render(
      <ModalAddToBasket
        good={{ sku: 'mockedSku', name: 'Product Name', price: 10, img: 'product-image.jpg' }}
        selectedColor='black'
      />
    );

    fireEvent.click(getByText('ADD TO BASKET'));

    expect(useDispatch).toHaveBeenCalledTimes(2);
    expect(dispatchMock).toHaveBeenCalledTimes(2);
  });
});
