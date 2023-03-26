import './App.css';
import React, { useState } from 'react'

function App() {

  const [result, setresult] = useState("");
  const handleClick = (e) => {
    setresult(result.concat(e.target.name));

  }
  const clear = () => {
    setresult("");
  }
  const backspace = () => {
    setresult(result.slice(0, -1));
  }

  const calculate = () => {
    try {

      setresult(eval(result).toString());
    } catch (err) {
      setresult("error")
    }
  }
  return (
    <div className="App">
      <div className="container">
        <form >
          <input type="text" value={result} />
        </form>
        <div className="keypad">
          <button onClick={clear} className="highlight" id="clear">Clear</button>
          <button onClick={backspace} className="highlight" id="backspace">C</button>
          <button name="/" onClick={handleClick} className="highlight">&divide;</button>
          <button name="7" onClick={handleClick}>7</button>
          <button name="8" onClick={handleClick}>8</button>
          <button name="9" onClick={handleClick}>9</button>
          <button name="*" onClick={handleClick} className="highlight">&times;</button>
          <button name="4" onClick={handleClick}>4</button>
          <button name="5" onClick={handleClick}>5</button>
          <button name="6" onClick={handleClick}>6</button>
          <button name="-" onClick={handleClick} className="highlight">&ndash;</button>
          <button name="1" onClick={handleClick}>1</button>
          <button name="2" onClick={handleClick}>2</button>
          <button name="3" onClick={handleClick}>3</button>
          <button name="+" onClick={handleClick} className="highlight">+</button>
          <button name="0" onClick={handleClick}>0</button>
          <button name="." onClick={handleClick}>.</button>
          <button onClick={calculate} className="highlight" id="result">=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
