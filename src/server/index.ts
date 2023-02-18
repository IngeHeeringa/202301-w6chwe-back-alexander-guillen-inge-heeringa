import express from "express";
import morgan from "morgan";
import cors from "cors";
import robotsRouter from "./routers/robotsRouter.js";

const app = express();

app.disable("x-powered-by");

app.use(morgan("dev"));

app.use(cors());

app.use(express.json());

app.use("/", robotsRouter);

export default app;
