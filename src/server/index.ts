import express from "express";
import morgan from "morgan";
import robotsRouter from "./routers/robotsRouter.js";

const app = express();

app.disable("x-powered-by");

app.use(morgan("dev"));

app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
});

app.use("/", robotsRouter);

export default app;
