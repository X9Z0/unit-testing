import { describe, expect, test, it, vi } from "vitest";
import request from "supertest";
import { app } from "..";

import { prismaClient } from "../__mocks__/db";

vi.mock("../db");

describe("Testing the /sum end point", () => {
  it("should return the sum of the two numbers", async () => {
    prismaClient.sum.create.mockResolvedValue({
      id: 1,
      a: 1,
      b: 2,
      result: 3,
    });

    vi.spyOn(prismaClient.sum, "create");

    const res = await request(app).post("/sum").send({
      a: 1,
      b: 2,
    });
    expect(res.statusCode).toBe(200);
    expect(res.body.answer).toBe(3);
  });
  it("should return 411 if no inputs are provided", async () => {
    const res = await request(app).post("/sum").send();
    expect(res.statusCode).toBe(411);
    expect(res.body.message).toBe("Incorrect inputs");
  });
});

describe("Testing the POST /string", () => {
  it("should return string repeted n number of time", async () => {
    prismaClient.stringM.create.mockResolvedValue({
      id: 1,
      letter: "a",
      b: 3,
      result: "aaa",
    });

    vi.spyOn(prismaClient.stringM, "create");

    const res = await request(app).post("/string").send({
      letter: "a",
      b: 3,
    });

    expect(res.statusCode).toBe(200);
    expect(res.body.answer).toBe("aaa");
  });

  it("should return 411 if the inputs are wrong", async () => {
    const res = await request(app).post("/string").send();
    expect(res.statusCode).toBe(411);
  });
});
