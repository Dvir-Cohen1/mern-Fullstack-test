import React from "react";

const DataContainer = ({ el, removeOne }) => {
  return (
    <div className="data-container">
      <p>{el.title}</p>
      <img width="80%" src={el.imageUrl} alt="dataImage"></img>
      <button onClick={() => removeOne(el._id)}>X</button>
    </div>
  );
};

export default DataContainer;
