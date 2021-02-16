import React from 'react';
import { render, cleanup, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';

describe('App component', () => {

  afterEach(() => cleanup());

  it('renders App', () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('sets the color to blue', () => {
    render(<App/>);

    const colorPicker = screen.getByLabelText('color:');

    fireEvent.change(colorPicker, {
      target: {
        value: '#00FF00'
      }
    });

    waitFor(() => {
      expect(colorPicker).toHaveValue('#00FF00');
    });
  });
});
