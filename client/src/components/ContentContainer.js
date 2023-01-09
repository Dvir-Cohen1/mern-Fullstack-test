import React, { useState, useEffect } from "react";
import getAll from "../services/mainServices";
import DataContainer from "./DataContainer";

const ContentContainer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await getAll();
      setData(response);
    }
    getData()
  }, []);

  return (
    <div className="content-container">
      {data.map((el) => {
        return <DataContainer el={el} />;
      })}
    </div>
  );
};

export default ContentContainer;
