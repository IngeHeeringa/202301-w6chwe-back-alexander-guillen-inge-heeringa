import mongoose from "mongoose";
import createDebug from "debug";
import chalk from "chalk";

const debug = createDebug("robots:database");

const connectDatabase = async (url: string) => {
  mongoose.set("strictQuery", false);

  try {
    await mongoose.connect(url);
    debug(chalk.green(`Connected to database `) + chalk.yellow(url));
  } catch (error) {
    throw new Error(chalk.red("Error connecting to database"));
  }
};

export default connectDatabase;
