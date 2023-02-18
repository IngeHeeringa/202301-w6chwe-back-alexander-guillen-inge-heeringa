import { type Response } from "express";
import { mongoDbUrl } from "../..";
import connectDatabase from "../../database/connectDatabase";
import Robot from "../../database/models/robotSchema";
import { requestMock, responseMock } from "../../mocks/robotsMocks";
import { getRobots } from "./robotsControllers";

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
