import React, { useContext } from "react";
import { products } from "../../App";

import { QuantityCounterStyle } from "./QunatityCounter.style";

function QuantityCounter(props) {
  const { items, itemCount } = props;
  const { addItem, onRemove } = useContext(products);
  const product = localStorage.getItem("products");

  console.log(items);
  console.log(itemCount);

  return (
    <QuantityCounterStyle>
      <button className="counter-button" onClick={() => onRemove(items)}>
        -
      </button>
      <input type="text" name="counter" className="counter" value={itemCount} />
      <button className="counter-button" onClick={() => addItem(items)}>
        +
      </button>
    </QuantityCounterStyle>
  );
}

export default QuantityCounter;
