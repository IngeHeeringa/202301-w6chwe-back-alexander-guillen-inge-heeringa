import { type NextFunction, type Request, type Response } from "express";
import { CustomError } from "../../CustomError/CustomError";

export const notFoundError = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const notFoundError = new CustomError(
    "Path not found",
    404,
    "Endpoint not found"
  );

  next(notFoundError);
};

export const generalError = (
  { statusCode, publicMessage }: CustomError,
  req: Request,
  res: Response
) => {
  res
    .status(statusCode || 500)
    .json({ error: publicMessage || "Endpoint not found" });
};
