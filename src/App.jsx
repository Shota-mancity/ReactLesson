/* eslint react-hooks/exhaustive-deps: off */
import React, { useEffect, useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  console.log("check");
  const [num, setNumFunc] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);
  const onClickCountUp = () => setNumFunc(num + 1);
  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
  }, [num]);

  return (
    <>
      <h1 style={{ color: "green" }}>Hello</h1>
      <ColorfulMessage color="blue" message="Hi">
        How's going?
      </ColorfulMessage>
      <ColorfulMessage color="pink" message="Hi, there" />
      <button onClick={onClickCountUp}>Count-up Button</button>
      <br />
      <button onClick={onClickSwitchShowFlag}> on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>^ ^</p>}
    </>
  );
};

export default App;
