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

    const colorPicker = await screen.findByLabelText('color:');
    const colorBox = await screen.findByTestId('color-box');

    fireEvent.change(colorPicker, {
      target: {
        value: '#00ff00'
      }
    });

    return waitFor(() => {
      expect(colorBox.style.backgroundColor).toBe('rgb(0, 255, 0)');
    });
  });

  it('undoes setting the color to green', async() => {
    render(<App/>);

    const colorPicker = await screen.findByLabelText('color:');
    const colorBox = await screen.findByTestId('color-box');
    const undo = await screen.findByText('undo');

    fireEvent.change(colorPicker, {
      target: {
        value: '#00ff00'
      }
    });

    fireEvent.click(undo);

    return waitFor(() => {
      expect(colorBox.style.backgroundColor).toBe('rgb(255, 0, 0)');
    });
  });

  it('redoes setting the color to green', async() => {
    render(<App/>);

    const colorPicker = await screen.findByLabelText('color:');
    const colorBox = await screen.findByTestId('color-box');
    const undo = await screen.findByText('undo');
    const redo = await screen.findByText('redo');

    fireEvent.change(colorPicker, {
      target: {
        value: '#00ff00'
      }
    });

    fireEvent.click(undo);
    fireEvent.click(redo);

    return waitFor(() => {
      expect(colorBox.style.backgroundColor).toBe('rgb(0, 255, 0)');
    });
  });
});
