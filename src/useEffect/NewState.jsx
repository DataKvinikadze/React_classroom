import React, { useEffect } from "react";

const NewState = ({ count }) => {
  useEffect(() => {
    console.log("კომპონენტი შეიქმნა");
    return () => {
      console.log("კომპონენტი წაიშალა");
    };
  }, []);

  useEffect(() => {
    // close animation,
    // clone fetch(),
  }, []);
  return (
    <>
      <div>
        <h1>Hello</h1>
      </div>
    </>
  );
};

export default NewState;
