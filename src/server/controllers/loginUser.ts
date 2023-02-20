import { type NextFunction, type Request, type Response } from "express";
import { CustomError } from "../../CustomError/CustomError";
import { User } from "../../database/models/User";
import { type UserCredentials } from "../types";
import jwt from "jsonwebtoken";

const loginUser = async (req: Request, res: Response, next: NextFunction) => {
  const { username, password } = req.body as UserCredentials;

  const user = await User.findOne({ username, password });

  if (!user) {
    const customError = new CustomError(
      "Wrong credentials",
      401,
      "Wrong credentials"
    );
    next(customError);
    return;
  }

  const jwtPayload = {
    sub: user._id,
  };

  const token = jwt.sign(jwtPayload, process.env.JWT_SECRET!, {
    expiresIn: "2d",
  });

  res.status(200).json({ token });
};

export default loginUser;
