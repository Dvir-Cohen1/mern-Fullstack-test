import express from "express";
import * as mainController from "../controllers/mainController.js";
const router = express.Router();

router
  .post("/", mainController.index)
  .post("/addOne", mainController.addOne)
  .post("/removeOne", mainController.removeOne);

export default router;
