import React, { useState } from "react";

function Counter() {
  // Import the `useState` hook from React
  // Pass in an initial state value, used on first render
  // Returns a 2-element JS array:
  // - array[0]: current value
  // - array[1]: setter function
  // "Destructuring" creates local variables from array
  const [counter, setCounter] = useState(0);

  const onClick = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      Button was clicked:
      <div>{counter} times</div>
      <button onClick={onClick}>Click Me</button>
    </div>
  );
}
