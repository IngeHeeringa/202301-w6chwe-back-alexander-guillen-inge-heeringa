import { Router } from "express";
import loginUser from "../controllers/loginUser.js";

const userRouter = Router();

const userEndpoint = "user";

userRouter.post(`${userEndpoint}/login`, loginUser);

export default userRouter;
