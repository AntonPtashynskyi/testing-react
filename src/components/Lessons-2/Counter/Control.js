import React from "react";
import s from "./Counter.module.css";

const Control = ({ onIncrement, onDecrement }) => {
  return (
    <div className={s.controls}>
      <button type="button" className={s.button} onClick={onIncrement}>
        +1
      </button>
      <button type="button" className={s.button} onClick={onDecrement}>
        -1
      </button>
    </div>
  );
};

export default Control;
