import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ContentContainer from "./ContentContainer";

import mainService from "../services/mainServices";

const MainContent = (props) => {
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrlTitle] = useState("");

  function sendData(e) {
    e.preventDefault();
    mainService.addOne(title, imageUrl);
  }

  return (
    <>
      <form {...props} onSubmit={sendData}>
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          id="outlined-basic"
          label="Title"
          margin="normal"
          name="title"
          variant="outlined"
        />
        <TextField
          onChange={(e) => setImageUrlTitle(e.target.value)}
          id="outlined-basic"
          label="Image Url"
          margin="normal"
          name="imageUrl"
          variant="outlined"
        />
        <Button type="submit" variant="contained">
          ADD
        </Button>
      </form>
      <ContentContainer />
    </>
  );
};

export default MainContent;
