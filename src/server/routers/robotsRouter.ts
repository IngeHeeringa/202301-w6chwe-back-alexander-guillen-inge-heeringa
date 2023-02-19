import { Router } from "express";
import { getRobotById, getRobots } from "../controllers/robotsControllers.js";

const robotsRouter = Router();

const robotsEndpoint = "robots";

robotsRouter.get(`/${robotsEndpoint}`, getRobots);
robotsRouter.get(`/${robotsEndpoint}/:idRobot`, getRobotById);

export default robotsRouter;
