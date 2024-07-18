import React, { useState, useEffect } from "react";
import NewState from "./useEffect/NewState";
import SecondChild from "./useEffect/SecondChild";
// import ObjectMistake from "./useEffect/ObjectMistake";
import TimerComponent from "./useEffect/TimerComponent";

const App = () => {
  // const [count, setCount] = useState(true);
  // const countHandler = () => {
  //   setCount((prev) => !prev);
  // };

  // const [count, setCount] = useState(0);

  // const counterHandler = () => {
  //   setCount((prev) => prev + 1);
  // };

  // useEffect(() => {
  //   console.log("Count state-ი შეიქმნა");
  //   document.title = `You clicked ${count} times`;
  // }, [count]);

  return (
    <>
      {/* {count && <NewState />}
      <button onClick={countHandler}>Click Me</button> */}
      {/* <SecondChild count={count} />
      <button onClick={counterHandler}>Click Me</button> */}
      {/* <ObjectMistake /> */}
      <TimerComponent />
    </>
  );
};

export default App;
