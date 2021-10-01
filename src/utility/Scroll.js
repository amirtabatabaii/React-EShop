import React from "react";

const Scroll = (props) => {
  return (
    <div
      style={{
        overflow: "auto",
        width: "98.8%",
        height: "80vh",
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
