import { Router } from "express";
import loginUserController from "../controllers/loginUser.js";

const userRouter = Router();

const userEndpoint = "user";
const userPageEndpoint = "user/login";

userRouter.get(`/${userEndpoint}`, loginUserController);

export default userRouter;
