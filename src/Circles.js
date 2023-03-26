import React from "react";

const Circles = (props) => {
  return (
    <div
      key={props.index}
      style={{
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        backgroundColor: "orange",
        margin: "3px",
        transform: `translateY(-${props.val}px) translateX(${
          props.index + 3
        }px)`
      }}
    />
  );
};

export default Circles;
