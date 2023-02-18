import { type Request, type Response } from "express";
import getRobotsFromDatabase from "../../database/robots/robots";

export const getRobots = async (req: Request, res: Response) => {
  const robots = await getRobotsFromDatabase();

  res.status(200).json({ robots });
};
