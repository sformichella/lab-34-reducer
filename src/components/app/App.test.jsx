import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import App from './App';

describe('App component', () => {

  afterEach(() => cleanup());

  it('renders App', () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('sets the color to blue', () => {

  });
});
