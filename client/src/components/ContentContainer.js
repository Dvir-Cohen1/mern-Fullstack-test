import React, { useState, useEffect } from "react";
import getAll from "../services/mainServices";
import DataContainer from "./DataContainer";

const ContentContainer = () => {
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   async function getData() {
  //     const response = await getAll();
  //     setData(response);
  //   }
  //   getData();
  // }, []);

  return (
    <div className="content-container">
      {data
        ? data.map((el) => <DataContainer el={el} />)
        : "no data to display"}
    </div>
  );
};

export default ContentContainer;
