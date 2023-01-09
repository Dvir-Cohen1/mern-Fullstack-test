import express from "express";
import * as mainController from "../controllers/mainController.js";
const router = express.Router();

router
  .get("/", mainController.serverRunning)
  .get("/getAll", mainController.index)
  .post("/addOne", mainController.addOne)
  .delete("/removeOne", mainController.removeOne);

export default router;
