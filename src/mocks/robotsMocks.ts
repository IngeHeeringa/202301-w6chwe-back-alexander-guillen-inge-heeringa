import { type Request, type NextFunction, type Response } from "express";

export const requestMock = {
  params: {},
} as Request;

export const responseMock = {
  status: jest.fn().mockReturnThis(),
  json: jest.fn(),
  header: jest.fn(),
} as Partial<Response>;

export const nextMock = jest.fn() as NextFunction;
