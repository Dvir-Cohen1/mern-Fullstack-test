import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import mainRoute from "./src/routes/mainRoutes.js";
import { initiateDbConn } from "./src/config/initialDbConnection.js";

mongoose.set("strictQuery", true);
dotenv.config({ path: "./.env" });

const PORT = process.env.PORT || 8001;
const app = express();
app.use(cors());
app.use(express.json());
app.use(mainRoute);
initiateDbConn();

app.listen(PORT, console.log(`Running on port: ${PORT}`));
