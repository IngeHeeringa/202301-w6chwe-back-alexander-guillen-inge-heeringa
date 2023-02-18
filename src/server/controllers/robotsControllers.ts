import { type Request, type Response } from "express";
import Robot from "../../database/models/robotSchema";

export const getRobots = async (req: Request, res: Response) => {
  const robots = await Robot.find({});

  res.status(200).json({ robots });
};
