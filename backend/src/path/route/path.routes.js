import express from "express";
import { getPathController } from "../controller/path.controller.js";

const pathRouter = express.Router();

// GetPath from controller in POST method.
pathRouter.route("/").post(getPathController);

export default pathRouter;