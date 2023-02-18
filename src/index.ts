import "./loadEnvironment.js";
import startServer from "./server/startServer.js";
import connectDatabase from "./database/connectDatabase.js";

const mongoDbUrl = process.env.MONGODB_CONNECTION_URL!;
const port = process.env.PORT ?? 4000;

await startServer(+port);
await connectDatabase(mongoDbUrl);
