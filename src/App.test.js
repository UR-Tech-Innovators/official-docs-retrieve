import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders project name in h1', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Official Docs Retrieve/i);
  expect(linkElement).toBeInTheDocument('h1');
});
