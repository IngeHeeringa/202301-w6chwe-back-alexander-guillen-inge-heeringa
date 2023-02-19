import { Router } from "express";
import {
  deleteRobotById,
  getRobotById,
  getRobots,
} from "../controllers/robotsControllers.js";

const robotsRouter = Router();

const robotsEndpoint = "robots";

robotsRouter.get(`/${robotsEndpoint}`, getRobots);
robotsRouter.get(`/${robotsEndpoint}/:idRobot`, getRobotById);
robotsRouter.delete(`/${robotsEndpoint}/delete/:idRobot`, deleteRobotById);

export default robotsRouter;
