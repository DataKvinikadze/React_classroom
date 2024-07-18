import React, { useState } from "react";

const ObjectMistake = () => {
  const [name, setName] = useState("");
  const [person, setPerson] = useState({ name: "", selected: false });

  const HandleName = () => {
    setPerson((prev) => ({ ...prev, name }));
  };

  const handleSelected = () => {
    setPerson((prev) => ({ ...prev, selected: true }));
  };

  return (
    <>
      <div>
        <input
          type="text"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <button onClick={HandleName}>Add Name</button>
        <button onClick={handleSelected}>Selected Name</button>
        <p>{`Name: ${person.name} Selected: ${person.selected}`}</p>
      </div>
    </>
  );
};

export default ObjectMistake;
