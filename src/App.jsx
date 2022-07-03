import React from "react";
import ColorfulMessage from "./components/colorfulMessage";

const App = () => {
  const onClickBtn = () => {
    alert();
  };

  return (
    <>
      <ColorfulMessage color="blue" message="hello" />
      <ColorfulMessage color="green">hello hoge</ColorfulMessage>

      <button onClick={onClickBtn}>btn</button>
    </>
  );
};

export default App;
