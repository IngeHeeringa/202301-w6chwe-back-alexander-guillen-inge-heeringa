import { type CustomError } from "../CustomError/CustomError.js";
import app from "./index.js";
import createDebug from "debug";
import chalk from "chalk";

const debug = createDebug("robots:root");

const startServer = async (port: number) =>
  new Promise((resolve, reject) => {
    const server = app.listen(port);
    debug(chalk.green(`Server listening on port ${port}`));

    resolve(server);

    server.on("error", (error: CustomError) => {
      let errorMessage = chalk.red("Error on starting the server");

      if (error.code === "EADDRINUSE") {
        errorMessage += chalk.red(`The port ${port} is already in use`);
      }

      reject(new Error(errorMessage));
    });
  });

export default startServer;
