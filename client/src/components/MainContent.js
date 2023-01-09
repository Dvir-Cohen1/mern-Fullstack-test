import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import mainService from '../services/mainServices';



const MainContent = (props) => {
     const [title, setTitle] = useState("");
     const [imageUrl, setImageUrlTitle] = useState("");
     
     function sendData(e) {
          e.preventDefault();
          mainService.addOne(title, imageUrl)
     }

     return (
          <form {...props} onSubmit={sendData}>
               <TextField onChange={(e) => setTitle(e.target.value)} id="outlined-basic" label="Title" name='title' variant="outlined" />
               <TextField onChange={(e) => setImageUrlTitle(e.target.value)} id="outlined-basic" label="Image Url" name='imageUrl' variant="outlined" />
               <Button type='submit' variant="contained">ADD</Button>
          </form>


     )
}

export default MainContent