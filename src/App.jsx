import { useState } from "react";

function App() {
  // Syntax: const [stateValue, updateFunction] = useState(initialValue);
  const [count, setCount] = useState(4);

  function decrementCount() {
    // If count is 4:
    setCount(prevState => prevState - 1); // Sets to 3
    setCount((prevState) => prevState - 1);// Still sets to 3, because 'count' is still 4 in this render scope
  }
  return (
    <div>
      <button>-</button>
      <span>{count}</span>
      <button>+</button>
    </div>
  );
}

export default App