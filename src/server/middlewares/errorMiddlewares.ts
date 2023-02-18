import { type Request, type Response } from "express";
import { CustomError } from "../../CustomError/CustomError";

export const notFoundError = (req: Request, res: Response) => {
  const { statusCode, publicMessage } = new CustomError(
    "Path not found",
    404,
    "Endpoint not found"
  );

  res.status(statusCode).json({ error: publicMessage });
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
