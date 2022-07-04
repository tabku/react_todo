import React from "react";

export const ColorfulMessage = (props) => {
  const { color, children } = props;
  const testStyle = {
    fontSize: "20px",
    color
  };

  return <h2 style={testStyle}>{children}</h2>;
};
