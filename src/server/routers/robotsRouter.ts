import { Router } from "express";
import {
  deleteRobotById,
  getRobotById,
  getRobots,
} from "../controllers/robotsControllers.js";
import auth from "../middlewares/auth.js";

const robotsRouter = Router();

const robotsEndpoint = "robots";

robotsRouter.get(`/${robotsEndpoint}`, getRobots);
robotsRouter.get(`/${robotsEndpoint}/:idRobot`, getRobotById);
robotsRouter.delete(
  `/${robotsEndpoint}/delete/:idRobot`,
  auth,
  deleteRobotById
);

export default robotsRouter;
