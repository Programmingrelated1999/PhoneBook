import React from "react";

const PersonForm = ({ addPerson, changeName, changeNumber }) => {
  return (
    <div>
      {" "}
      <form onSubmit={addPerson}>
        <div>
          name: <input onChange={changeName} />
        </div>
        <div>
          number: <input onChange={changeNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
};

export default PersonForm;
