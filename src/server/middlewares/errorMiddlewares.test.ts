import { type Request, type Response } from "express";
import { CustomError } from "../../CustomError/CustomError";
import { generalError, notFoundError } from "./errorMiddlewares";

const request = {} as Request;

const response = {
  status: jest.fn().mockReturnThis(),
  json: jest.fn(),
} as Partial<Response>;

describe("Given a notFoundError middleware", () => {
  describe("When it receives a response and a request", () => {
    test("Then it should emmit a response with status code 404 and an error message 'Endpoint not found'.", () => {
      notFoundError(request, response as Response);

      expect(response.status).toHaveBeenCalledWith(404);

      expect(response.json).toHaveBeenCalledWith({
        error: "Endpoint not found",
      });
    });
  });
});

describe("Given a generalError middleware", () => {
  describe("When it receives a response, a request and an error that has status code 500 and public message 'Endpoint not found'", () => {
    test("Then it should emmit a response with status 500 and an error message 'Endpoint not found'", () => {
      const error = new CustomError(
        "Path not found",
        500,
        "Endpoint not found"
      );

      generalError(error, request, response as Response);

      expect(response.status).toHaveBeenCalledWith(500);
      expect(response.json).toHaveBeenCalledWith({
        error: "Endpoint not found",
      });
    });
  });
});
