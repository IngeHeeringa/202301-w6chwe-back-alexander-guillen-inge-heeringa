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
  describe("When it receives a response and Robot.find returns a collection of robots", () => {
    test("Then it should call the status method with code 200 from that response", async () => {
      Robot.find = jest.fn().mockImplementationOnce(() => ({
        exec: jest.fn().mockReturnValue({}),
      }));

      await getRobots(requestMock, responseMock as Response, nextMock);

      expect(responseMock.status).toHaveBeenCalledWith(200);
    });
  });

  describe("When it receives a response and Robot.find returns a collection of robots", () => {
    test("Then it should call the json method from that response", async () => {
      Robot.find = jest.fn().mockImplementationOnce(() => ({
        exec: jest.fn().mockReturnValue({}),
      }));

      await getRobots(requestMock, responseMock as Response, nextMock);

      expect(responseMock.json).toHaveBeenCalled();
    });
  });

  describe("When it receives a response and Robot.find returns an error", () => {
    test("Then it should call next function with getRobots error with status code 500", async () => {
      Robot.find = jest.fn().mockReturnValue(new Error());

      await getRobots(requestMock, responseMock as Response, nextMock);

      expect(nextMock).toHaveBeenCalledWith(
        expect.objectContaining({
          statusCode: 500,
        })
      );
    });
  });
});

describe("Given a getRobotById controller", () => {
  describe("When it receives a response andRobot.findById returns a robot", () => {
    test("Then it should call the status method with code 200", async () => {
      Robot.findById = jest.fn().mockImplementationOnce(() => ({
        exec: jest.fn().mockReturnValue({}),
      }));

      await getRobotById(requestMock, responseMock as Response, nextMock);

      expect(responseMock.status).toHaveBeenCalledWith(200);
    });
  });

  describe("When it receives a response andRobot.findById returns a robot", () => {
    test("Then it should call the json method from that response", async () => {
      Robot.findById = jest.fn().mockImplementationOnce(() => ({
        exec: jest.fn().mockReturnValue({}),
      }));

      await getRobotById(requestMock, responseMock as Response, nextMock);

      expect(responseMock.json).toHaveBeenCalled();
    });
  });

  describe("When it receives a response and Robot.findById returns an error", () => {
    test("Then it should call next function with getRobotById error with status code 500", async () => {
      Robot.findById = jest.fn().mockReturnValue(new Error());

      await getRobotById(requestMock, responseMock as Response, nextMock);

      expect(nextMock).toHaveBeenCalledWith(
        expect.objectContaining({
          statusCode: 500,
        })
      );
    });
  });
});

describe("Given a deleteRobotById controller", () => {
  describe("When it receives a response and Robot.findByIdAndDelete returns the deleted robot", () => {
    test("Then it should call the status method with code 200", async () => {
      Robot.findByIdAndDelete = jest.fn().mockImplementationOnce(() => ({
        exec: jest.fn().mockReturnValue({}),
      }));

      await deleteRobotById(requestMock, responseMock as Response, nextMock);

      expect(responseMock.status).toHaveBeenCalledWith(200);
    });
  });

  describe("When it receives a response and Robot.findByIdAndDelete returns an error", () => {
    test("Then it should call next function with deleteRobotById error with status code 500", async () => {
      Robot.findByIdAndDelete = jest.fn().mockReturnValue(new Error());

      await deleteRobotById(requestMock, responseMock as Response, nextMock);

      expect(responseMock.json).toHaveBeenCalled();
    });
  });
});
