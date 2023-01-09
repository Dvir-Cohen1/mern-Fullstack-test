import React, { useState, useEffect } from "react";
import axios from "axios";
import getAll from "../services/mainServices";
import DataContainer from "./DataContainer";

const ContentContainer = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get("http://localhost:8001/getAll");

      setData(data.data);
    }
    fetchData();
  }, [data]);

  const removeOne = async (dataId) => {
    try {
      const response = await axios.delete("http://localhost:8001/removeOne", {
        dataId,
      });
      return response;
    } catch (error) {
      console.log(error);
      return Promise.reject(error);
    }
  };

  return (
    <div className="content-container">
      {data.length
        ? data.map((el, indexId) => (
            <DataContainer key={indexId} el={el} removeOne={removeOne} />
          ))
        : "no data to display"}
    </div>
  );
};

export default ContentContainer;
