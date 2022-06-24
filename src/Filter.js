import React from "react";

const Filter = ({ updateFilter }) => {
  return <div>{<input onChange={updateFilter}></input>}</div>;
};

export default Filter;
