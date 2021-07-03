import React from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickButton = () => alert();

  return (
    <>
      <h1 style={{ color: "green" }}>Hello</h1>
      <ColorfulMessage color="blue" message="Hi">
        How's going?
      </ColorfulMessage>
      <ColorfulMessage color="pink" message="Hi, there" />
      <button onClick={onClickButton}>button</button>
    </>
  );
};

export default App;
