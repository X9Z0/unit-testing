import express from "express";
import { string, z } from "zod";
import { prismaClient } from "./db";

export const app = express();

app.use(express.json());

const sumInput = z.object({
  a: z.number(),
  b: z.number(),
});

const stringInput = z.object({
  letter: z.string(),
  b: z.number(),
});

app.post("/sum", async (req, res) => {
  const parseResponse = sumInput.safeParse(req.body);
  if (!parseResponse.success) {
    return res.status(411).json({
      message: "Incorrect inputs",
    });
  }

  const answer: number = parseResponse.data.a + parseResponse.data.b;

  const response = await prismaClient.sum.create({
    data: {
      a: parseResponse.data.a,
      b: parseResponse.data.b,
      result: answer,
    },
  });

  res.json({
    answer,
    id: response.id,
  });
});

app.post("/string", async (req, res) => {
  const parseResponse = stringInput.safeParse(req.body);

  if (!parseResponse.success) {
    return res.status(411).json({
      message: "Incorrect Inputs",
    });
  }
  const letter: string = parseResponse.data.letter;
  const num: number = parseResponse.data.b;

  const answer: string = letter.repeat(num);

  const response = await prismaClient.stringM.create({
    data: {
      letter: letter,
      b: num,
      result: answer,
    },
  });

  res.json({
    answer,
    id: response.id,
  });
});
