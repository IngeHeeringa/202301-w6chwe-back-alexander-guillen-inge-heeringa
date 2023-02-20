import { type Request, type NextFunction, type Response } from "express";

export const requestMock = {
  params: {},
  header: jest.fn(),
} as unknown as Request;

export const responseMock = {
  status: jest.fn().mockReturnThis(),
  json: jest.fn(),
  header: jest.fn(),
} as Partial<Response>;

export const nextMock = jest.fn() as NextFunction;
