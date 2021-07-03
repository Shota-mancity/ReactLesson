import React from "react";

const ColorfulMessage = (props) => {
  console.log(props);
  const { color, message, children } = props;
  const contentStyle = {
    color,
    fontSize: "18px"
  };
  return (
    <>
      <p style={contentStyle}>{message}</p>
      <p style={contentStyle}>{children}</p>
    </>
  );
};

export default ColorfulMessage;
