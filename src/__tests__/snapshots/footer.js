import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Footer from '../../components/footer/Footer.jsx';

test('Footer renders correctly', () => {
  const { getByTestId, getByText } = render(<Footer />);
  expect(getByTestId('footer-wrapper')).toBeInTheDocument();
  expect(getByText('Need Help')).toBeInTheDocument();
  expect(getByText('Company')).toBeInTheDocument();
  expect(getByText('More Info')).toBeInTheDocument();
  expect(getByText('Location')).toBeInTheDocument();

  const tree = renderer.create(<Footer />).toJSON();
  expect(tree).toMatchSnapshot();
});
