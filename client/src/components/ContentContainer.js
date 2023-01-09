import React, { useState, useEffect } from "react";
import axios from "axios";
import getAll from "../services/mainServices";
import DataContainer from "./DataContainer";

const ContentContainer = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get("http://localhost:8001/getAll");
      console.log(data.data);
      setData(data.data);
    }
    fetchData();
  }, [data]);

  return (
    <div className="content-container">
      {data
        ? data.map((el, indexId) => <DataContainer key={indexId} el={el} />)
        : "no data to display"}
    </div>
  );
};

export default ContentContainer;
