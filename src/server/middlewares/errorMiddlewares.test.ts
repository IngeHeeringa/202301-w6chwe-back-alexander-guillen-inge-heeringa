import { type NextFunction, type Request, type Response } from "express";
import { CustomError } from "../../CustomError/CustomError";
import { notFoundError } from "./errorMiddlewares";

describe("Given a notFoundError middleware", () => {
  describe("When it receives a response, resquest and next function", () => {
    test("Then it should next a not found error", () => {
      const request = {} as Request;
      const response = {} as Response;
      const next = jest.fn() as NextFunction;
      const expectedNextedError = new CustomError(
        "Path not found",
        500,
        "Endpoint not found"
      );

      notFoundError(request, response, next);

      expect(next).toHaveBeenCalledWith(expectedNextedError);
    });
  });
});
