import React from 'react';
import {
  render,
  cleanup,
  screen,
  fireEvent,
  waitFor 
} from '@testing-library/react';
import App from './App';

describe('App component', () => {

  afterEach(() => cleanup());

  it('renders App', () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('sets the color to green', async() => {
    render(<App/>);

    const colorPicker = await screen.getByLabelText('color:');
    const colorBox = await screen.findByTestId('color-box');

    fireEvent.change(colorPicker, {
      target: {
        value: '#00ff00'
      }
    });

    return waitFor(() => {
      expect(colorPicker).toHaveValue('#00ff00');
      expect(colorBox.style.backgroundColor).toBe('rgb(0, 255, 0)');
    });
  });
});
