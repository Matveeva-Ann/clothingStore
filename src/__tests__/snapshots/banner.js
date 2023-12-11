import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer'; // Додайте імпорт renderer
import Banner from '../../components/banner/Banner.jsx';

test('Banner renders correctly', () => {
  render(
    <BrowserRouter>
      <Banner />
    </BrowserRouter>
  );

  expect(screen.getByTestId('slide1')).toBeInTheDocument();

  const tree = renderer.create(
    <BrowserRouter>
      <Banner />
    </BrowserRouter>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
