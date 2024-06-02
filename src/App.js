import { useState, useRef } from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

  function plus(e) {
    e.preventDefault();
    setResult((result) => result + Number(inputRef.current.value));
  }

  function minus(e) {
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
  }

  function times(e) {
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value));
  }

  function divide(e) {
    e.preventDefault();
    setResult((result) => result / Number(inputRef.current.value));
  }

  function resetInput(e) {
    e.preventDefault();
    inputRef.current.value = "";
  }

  function resetResult(e) {
    e.preventDefault();
    setResult(0);
  }

  return (
    <div className="App">
      <div>
        <h1>Simplest Working Calculator</h1>
      </div>
      <form>
        <p ref={resultRef}>
          result = {result}
        </p>
        <input
          ref={inputRef}
          type="number"
          placeholder="Type a number"
        />
        <div>
          <button className="operation-button" onClick={plus}>add</button>
          <button className="operation-button" onClick={minus}>subtract</button>
          <button className="operation-button" onClick={times}>multiply</button>
          <button className="operation-button" onClick={divide}>divide</button>
        </div>
        <div>
          <button className="reset-button" onClick={resetInput}>reset input</button>
          <button className="reset-button" onClick={resetResult}>reset result</button>
        </div>
      </form>
    </div>
  );
}

export default App;
