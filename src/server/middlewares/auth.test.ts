import { type Response } from "express";
import {
  nextMock,
  requestMock,
  responseMock,
} from "../../mocks/robotsMocks.js";
import { type CustomRequest } from "../types.js";
import auth from "./auth.js";

describe("Given an auth middleware", () => {
  describe("When it receives a request with a header without 'Authorization', a response and a next function", () => {
    test("Then it should next an authError with status code 401", () => {
      const statusCode = 401;

      auth(requestMock as CustomRequest, responseMock as Response, nextMock);

      expect(nextMock).toHaveBeenCalledWith(
        expect.objectContaining({
          statusCode,
        })
      );
    });
  });
});
