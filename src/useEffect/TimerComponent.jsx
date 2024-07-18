import React, { useEffect, useState } from "react";

const TimerComponent = () => {
  //
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("timerComponent-ი შეიქმნა");
    let timer = setInterval(() => {
      setCounter((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [counter]);

  return (
    <>
      <p>{counter}</p>
    </>
  );
};

export default TimerComponent;
