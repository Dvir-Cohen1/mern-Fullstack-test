import React, { useState, useEffect } from "react";
import axios from "axios";
import getAll from "../services/mainServices";
import DataContainer from "./DataContainer";

const ContentContainer = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      // You can await here
      const response = await axios.get({
        baseURL: "http://localhost:8001/",
        headers: { "Content-Type": "application/json" },
      });
      // const response = await getAll();
      setData(response);
      // ...
    }
    fetchData();
  }, [data]);
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
