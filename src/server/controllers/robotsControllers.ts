import { type NextFunction, type Request, type Response } from "express";
import { CustomError } from "../../CustomError/CustomError.js";
import Robot from "../../database/models/robotSchema.js";

export const getRobots = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const robots = await Robot.find({}).exec();
    res.status(200).json({ robots });
  } catch (error) {
    const getRobotsError = new CustomError(
      error.message as string,
      500,
      "Sorry, we could not retrieve robots"
    );

    next(getRobotsError);
  }
};

export const getRobotById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { idRobot } = req.params;
    const robot = await Robot.findById(idRobot).exec();
    res.status(200).json({ robot });
  } catch (error) {
    const getRobotError = new CustomError(
      error.message as string,
      500,
      "Sorry, we could not retrieve the requested robot"
    );

    next(getRobotError);
  }
};
