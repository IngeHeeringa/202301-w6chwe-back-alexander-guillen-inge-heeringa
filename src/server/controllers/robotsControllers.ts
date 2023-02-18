import { type Request, type Response } from "express";
import Robot from "../../database/models/robotSchema.js";

export const getRobots = async (req: Request, res: Response) => {
  const robots = await Robot.find({});

  res.header("Access-Control-Allow-Origin", "*");
  res.status(200).json({ robots });
};
