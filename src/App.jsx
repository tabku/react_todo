/* eslint react-hooks/exhaustive-deps: off */
import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/colorfulMessage";

const App = () => {
  const [num, setNum] = useState(0);
  const [faceShowFlg, setFaceShowFlg] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwitchShowFlag = () => {
    setFaceShowFlg(!faceShowFlg);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlg || setFaceShowFlg(true);
      } else {
        faceShowFlg && setFaceShowFlg(false);
      }
    }
  }, [num]);

  return (
    <>
      <ColorfulMessage color="blue" message="hello" />
      <ColorfulMessage color="green">hello hoge</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ!</button>
      <p>{num}</p>
      <button onClick={onClickSwitchShowFlag}>on off</button>
      {faceShowFlg && <p>( ´∀｀)</p>}
    </>
  );
};

export default App;
