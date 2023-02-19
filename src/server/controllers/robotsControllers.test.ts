import { type Response } from "express";
import Robot from "../../database/models/robotSchema.js";
import {
  nextMock,
  requestMock,
  responseMock,
} from "../../mocks/robotsMocks.js";
import { getRobotById, getRobots } from "./robotsControllers.js";

describe("Given a getRobots controller", () => {
  describe("When it receives a request and response", () => {
    test("Then it should emit a response with status code 200 and call its json method", async () => {
      Robot.find = jest.fn().mockImplementationOnce(() => ({
        exec: jest.fn().mockReturnValue({}),
      }));

      await getRobots(requestMock, responseMock as Response, nextMock);

      expect(responseMock.status).toHaveBeenCalledWith(200);
      expect(responseMock.json).toHaveBeenCalled();
    });
  });
});

describe("Given a getRobot controller", () => {
  describe("When it receives a request and response", () => {
    test("Then it should emit a response with status code 200 and call its json method", async () => {
      Robot.findById = jest.fn().mockImplementationOnce(() => ({
        exec: jest.fn().mockReturnValue({}),
      }));

      await getRobotById(requestMock, responseMock as Response, nextMock);

      expect(responseMock.status).toHaveBeenCalledWith(200);
      expect(responseMock.json).toHaveBeenCalled();
    });
  });
});
