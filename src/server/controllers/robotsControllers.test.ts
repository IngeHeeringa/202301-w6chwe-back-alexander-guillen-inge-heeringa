import { type Response } from "express";
import Robot from "../../database/models/robotSchema.js";
import { requestMock, responseMock } from "../../mocks/robotsMocks.js";
import { getRobots } from "./robotsControllers.js";

describe("Given a getRobots controller", () => {
  describe("When it receives a request and response", () => {
    test("Then it should emmit a response with status code 200 and call its json method", async () => {
      Robot.find = jest.fn().mockReturnValue({});
      await getRobots(requestMock, responseMock as Response);

      expect(responseMock.status).toHaveBeenCalledWith(200);
      expect(responseMock.json).toHaveBeenCalled();
    });
  });
});
