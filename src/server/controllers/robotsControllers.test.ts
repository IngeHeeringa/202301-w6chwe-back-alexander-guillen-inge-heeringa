import { type Response } from "express";
import { CustomError } from "../../CustomError/CustomError.js";
import Robot from "../../database/models/Robot.js";
import {
  nextMock,
  requestMock,
  responseMock,
} from "../../mocks/robotsMocks.js";
import {
  deleteRobotById,
  getRobotById,
  getRobots,
} from "./robotsControllers.js";

describe("Given a getRobots controller", () => {
  describe("When it receives a response and Robot.find returns and empty object", () => {
    test("Then it should call status code 200 and json methods from that response", async () => {
      Robot.find = jest.fn().mockImplementationOnce(() => ({
        exec: jest.fn().mockReturnValue({}),
      }));

      await getRobots(requestMock, responseMock as Response, nextMock);

      expect(responseMock.status).toHaveBeenCalledWith(200);
      expect(responseMock.json).toHaveBeenCalled();
    });
  });

  describe("When it receives a response and Robot.find returns an error", () => {
    test("Then it should call next function with getRobots error with status code 500 and public message 'Sorry, we could not retrieve robots'", async () => {
      Robot.find = jest.fn().mockReturnValue(new Error());

      await getRobots(requestMock, responseMock as Response, nextMock);

      expect(nextMock).toHaveBeenCalledWith(
        expect.objectContaining({
          statusCode: 500,
          publicMessage: "Sorry, we could not retrieve robots",
        })
      );
    });
  });
});

describe("Given a getRobotById controller", () => {
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

describe("Given a deleteRobotById controller", () => {
  describe("When it receives a request and response", () => {
    test("Then it should emit a response with status code 200 and call its json method", async () => {
      Robot.findByIdAndDelete = jest.fn().mockImplementationOnce(() => ({
        exec: jest.fn().mockReturnValue({}),
      }));

      await deleteRobotById(requestMock, responseMock as Response, nextMock);

      expect(responseMock.status).toHaveBeenCalledWith(200);
      expect(responseMock.json).toHaveBeenCalled();
    });
  });
});
