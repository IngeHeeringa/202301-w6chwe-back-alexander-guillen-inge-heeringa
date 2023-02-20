import { CustomError } from "../../CustomError/CustomError.js";
import jwt from "jsonwebtoken";
import { type NextFunction, type Response } from "express";
import { type CustomRequest, type CustomJwtPayload } from "../types";

const auth = (req: CustomRequest, res: Response, next: NextFunction) => {
  if (!req.header("Authorization")) {
    const authError = new CustomError(
      "Missing authorization header",
      401,
      "Missing token"
    );

    next(authError);
    return;
  }

  if (!req.header("Authorization")?.includes("Bearer")) {
    const authError = new CustomError(
      "Missing authorization header",
      401,
      "Missing token"
    );

    next(authError);
    return;
  }

  const token = req.header("Authorization")?.replace(/^Bearer\s*/i, "");

  try {
    const { sub: userId } = jwt.verify(
      token!,
      process.env.JWT_SECRET!
    ) as CustomJwtPayload;

    req.userId = userId;

    next();
  } catch (error) {
    next(error);
  }
};

export default auth;
