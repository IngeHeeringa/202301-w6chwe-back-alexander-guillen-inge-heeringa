import "./loadEnvironment.js";
import connectDatabase from "./database/connectDatabase.js";
import startServer from "./server/startServer.js";
import mongoose from "mongoose";
import robotSchema from "./database/models/robotSchema.js";

const port = process.env.PORT ?? 4000;
const mongoDbUrl = process.env.MONGODB_CONNECTION_URL!;

await connectDatabase(mongoDbUrl);
await startServer(+port);

const Robot = mongoose.model("Robot", robotSchema, "robots");

const robot = await Robot.find({});
console.log(robot);
