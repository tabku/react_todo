import React from "react";

const ColorfulMessage = (props) => {
  const testStyle = {
    fontSize: "20px",
    color: props.color
  };

  return <h2 style={testStyle}>{props.children}</h2>;
};

export default ColorfulMessage;
