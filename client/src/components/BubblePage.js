import React, { useState, useEffect } from "react";
import {fetchColorsAxios} from "../utils/fetchColorsAxios";
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  useEffect(() => {
    if (colorList.length === 0) {
      fetchColors();
    }
  }, []);

  const fetchColors = () => {
    fetchColorsAxios()
      .then((data) => {
        setColorList(data);
      })
      .catch((err) => console.log(err));
  };
  
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} fetchColors={fetchColors} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
