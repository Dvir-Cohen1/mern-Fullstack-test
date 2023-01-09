import React from "react";
import removeOne from "../../src/services/mainServices";

const DataContainer = ({ el }) => {
  return (
    <div>
      <p>{el.title}</p>
      <img src={el.imageUrl} alt="dataImage"></img>
      <button onClick={removeOne(el.id)}>X</button>
    </div>
  );
};

export default DataContainer;
