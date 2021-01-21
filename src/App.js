import React from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = React.useState(0)
  const incrementValue = () => setCounter(counter + 1)
  const limitDecrement = () => counter > 0 ? setCounter(counter - 1) : {}


  return (
    <div className="App">
      <h1 id="hello">Hello world</h1>
      <div id="counter-value">{counter}</div>
      <button onClick={incrementValue} id="increment-btn">Increment</button>
      <button onClick={limitDecrement} id="decrement-btn">Decrement</button>
    </div>
  );
}

export default App;
