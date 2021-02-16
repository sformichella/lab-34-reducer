import React, { useReducer } from 'react';

// const useRecord = (init) => {
//   const [before, setBefore] = useState([]);
//   const [current, setCurrent] = useState(init);
//   const [after, setAfter] = useState([]);

//   const undo = () => {
//     setAfter(after => [current, ...after]);
//     setCurrent(before[before.length - 1]);
//     setBefore(before => before.slice(0, -1));
//   };

//   const redo = () => {
//     setBefore(before => [...before, current]);
//     setCurrent(after[0]);
//     setAfter(after => after.slice(1));
//   };

//   const record = val => {
//     setBefore(before => [...before, current]);
//     setCurrent(val);
//   };

//   return {
//     undo,
//     record,
//     redo,
//     current,
//   };
// };
const initialState = {
  color: 'red',
  before: [],
  after: []
};

function reducer(state, action) {
  switch(action.type) {
    case 'COLOR_CHANGE': {
      const before = [...state.before, state.color];
      return { color: action.payload, before };
    }
    case 'COLOR_UNDO':
      return;
    case 'COLOR_REDO':
      return;
    default:
      return state;
  }
}

function App() {
  // const { current, undo, redo, record } = useRecord('#FF0000');
  const [state, dispatch] = useReducer(reducer, initialState);

  const record = ({ target }) => {
    dispatch({
      type: target.id,
      payload: target.value
    });
  };

  console.log(state);

  return (
    <>
      {/* <button onClick={undo}>undo</button> */}
      {/* <button onClick={redo}>redo</button> */}
      <label htmlFor="COLOR_CHANGE">color: </label>
      <input
        id="COLOR_CHANGE"
        type="color"
        value={state.color}
        onChange={record}
      />
      <div
        data-testid="color-box"
        style={{
          backgroundColor: state.color,
          width: '10rem',
          height: '10rem'
        }}
      ></div>
    </>
  );
}

export default App;
