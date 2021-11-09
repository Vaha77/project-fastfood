import React from "react";
import MenuH from "../MneuH";
import MenuV from "../MneuV";
export const Body = ({ active }) => {
  return <div>{active ? <MenuV /> : <MenuH />}</div>;
};

export default Body;
