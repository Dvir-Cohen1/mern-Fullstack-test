import React from "react";

const DataContainer = ({ el, removeOne }) => {
  return (
    <div>
      <p>{el.title}</p>
      <img src={el.imageUrl} alt="dataImage"></img>
      <button onClick={() => removeOne(el._id)}>X</button>
    </div>
  );
};

export default DataContainer;
