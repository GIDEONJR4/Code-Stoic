import { useState } from "react";

export default function Practice() {
  const [count, setCount] = useState(0);
  // const [incrementBy, setIncrementBy] = useState(1);

  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    setCount(count - 1);
  }
  function reset() {
    setCount(0);
  }

  return (
    <div>
      <h1>Count value is: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
