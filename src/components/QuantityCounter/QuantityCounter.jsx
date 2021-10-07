import React, { useState } from "react";

import { QuantityCounterStyle } from "./QunatityCounter.style";

function QuantityCounter() {
  const [counter, setCounter] = useState(0);

  return (
    <QuantityCounterStyle>
      <button
        className="counter-button"
        onClick={() => setCounter(counter - 1)}
      >
        -
      </button>
      <input type="text" name="counter" className="counter" value={counter} />
      <button
        className="counter-button"
        onClick={() => setCounter(counter + 1)}
      >
        +
      </button>
    </QuantityCounterStyle>
  );
}

export default QuantityCounter;
