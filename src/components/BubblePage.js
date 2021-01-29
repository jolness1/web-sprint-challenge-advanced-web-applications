import React, { useEffect, useState } from "react";

import Bubbles from "./Bubbles";
import axiosFetchColors from './../helpers/axiosFetchColors';
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  
  const fetchColors = () => {
    axiosFetchColors()
    .then((data) => {
      setColorList(data);
    })
    .catch((err) => console.log(err));
  };
  useEffect(() => {
    if (colorList.length === 0) {
      fetchColors();
    }
  },);

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;

//Task List:
//1. Make an axios call to retrieve all color data and push to state on mounting.
