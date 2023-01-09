import React from "react";

const DataContainer = ({ el }) => {
  return (
    <div>
      <p>{el.title}</p>
      <img src={el.imageUrl} alt="dataImage"></img>
    </div>
  );
};

export default DataContainer;
