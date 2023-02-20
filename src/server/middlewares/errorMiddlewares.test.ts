import { type Response } from "express";
import { CustomError } from "../../CustomError/CustomError.js";
import {
  nextMock,
  requestMock,
  responseMock,
} from "../../mocks/robotsMocks.js";
import { generalError, notFoundError } from "./errorMiddlewares.js";

describe("Given a notFoundError middleware", () => {
  describe("When it receives a response, resquest and next function", () => {
    test("Then it should next a not found error with status code 400", () => {
      notFoundError(requestMock, responseMock as Response, nextMock);

      expect(nextMock).toHaveBeenCalledWith(
        expect.objectContaining({
          statusCode: 404,
        })
      );
    });
  });
});

describe("Given a generalError middleware", () => {
  describe("When it receives a response, a request and error that has status code 500 and public message 'Endpoint not found'", () => {
    test("Then it should emmit a response with status code 200 and an object that has public message 'Endpoint not found'", () => {
      const error = new CustomError(
        "Page not found",
        500,
        "Endpoint not found"
      );

      generalError(error, requestMock, responseMock as Response, nextMock);

      expect(responseMock.status).toHaveBeenCalledWith(500);
      expect(responseMock.json).toHaveBeenCalledWith({
        error: "Endpoint not found",
      });
    });
  });
});
