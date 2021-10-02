import React from "react";

const Scroll = (props) => {
  return (
    <div
      style={{
        overflow: "auto",
        width: "auto",
        height: props.height,
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
