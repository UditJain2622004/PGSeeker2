import React from "react";
import { cityNames } from "./cityNames";

const citySuggestList = () => {
  return (
    <datalist id="cityNames">
      {cityNames.map((el) => {
        return <option>{el}</option>;
      })}
    </datalist>
  );
};

export default citySuggestList;
