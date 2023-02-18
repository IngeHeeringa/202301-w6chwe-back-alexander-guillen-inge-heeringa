import "../../loadEnvironment";
import connectDatabase from "../connectDatabase";
import Robot from "../models/robotSchema";

const mongoDbUrl = process.env.MONGODB_CONNECTION_URL!;

const getRobotsFromDatabase = async () => {
  await connectDatabase(mongoDbUrl);

  const robots = await Robot.find({});

  return robots;
};

export default getRobotsFromDatabase;
