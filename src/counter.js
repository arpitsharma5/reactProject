import {useState} from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  const [counterHistory, setCounterHistory] = useState([]);


  const handleChange = (delta) => {
    const newCounter = counter + delta;
    setCounter(newCounter);
    setCounterHistory([...counterHistory, newCounter]);
  };

  const handleReset = () => {
    setCounter(0);
    setCounterHistory([]);
  };
  return(
  <>
    <div>
      <label>counter</label>
      <button onClick={() => handleChange(1)}>+1</button>
      <button onClick={() => handleChange(-1)}>-1</button>
      <button onClick={handleReset}>Reset</button>
      <div><label>{counter}</label></div>
    </div>
    <div>
      <label>History</label>
      <div><label>{counterHistory.join(", ")}</label></div>
    </div>
  </>
  )
}

export default Counter;