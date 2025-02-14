import express from "express";
import cors from "cors";

import pathRouter from "./src/path/route/path.routes.js";

const app = express();

// To recieve the data from request.
app.use(express.json());
// To support cross browser request.
app.use(cors());

// API Router
app.use("/api/find-path", pathRouter);

// Default Path.
app.get("/", (req, res) => {
    res.status(200).send("Server is hosted at port 8080.");
});

export default app;

