import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectCount,
  increment,
  decrement,
  incrementByAmount,
} from "./customCounterSlice";

const Redux = () => {
  const [number, setNumber] = useState(0);
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <>
      <span data-testid="count-value">{count}</span>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <button onClick={() => dispatch(incrementByAmount(number | 0))}>
        incrementByAmount
      </button>
      <input
        type="text"
        placeholder="Enter"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
    </>
  );
};

export default Redux;
