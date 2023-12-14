import React, { useState } from "react";

const Foodbox = (props) => {
  let { data, index } = props;
  let { cal, id, img, name } = data;

  const [input, setInput] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const quantityHandler = () => {
    setQuantity(input)
  };

  return (
    <div className="foodbox-main">
      <div className="left">
        <img src={img} alt="" />
        <div className="left-1">
          <h2>{name}</h2>
          <h3>{cal} cal</h3>
        </div>
        <div className="left-2">
          <input
            type="number"
            className="num-inp"
            min={0}
            max={100}
            style={{ padding: "3px", fontSize: "larger" }}
            onChange={(e) => {
              setInput(e.target.value);
            }}
            value={input}
          />
          <button onClick={quantityHandler} className="add">
            +
          </button>
        </div>
      </div>
      <div className="right">
        <h2>
          {quantity} {name} {"=>"} {cal * quantity} calories
        </h2>
        <button
          className="reset"
          onClick={() => {
            setQuantity(0);
            setInput(0);
          }}
        >
          RESET
        </button>
      </div>
    </div>
  );
};
export default Foodbox;
