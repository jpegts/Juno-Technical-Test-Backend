import { Request, Response } from "express";
import { Task } from "../entity/Task";

export const get = (_req: Request, res: Response) => {
  res.end("Hello there this is my Task Service !.");
};

/* export const updateCounter = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { newCount } = req.body;

  try {
    const counter = await Counter.findOneOrFail({ id: parseInt(id) });
    counter.count = newCount;

    await counter.save();

    res.send(counter);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
};

export const addCounter = async (req: Request, res: Response) => {
  try {
    const counter = Counter.create({
      count: req.body.count,
    });

    await counter.save();
    res.send(counter);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
}; */

export async function getTasks(_req: Request, res: Response) {
  const tasks = await Task.find();
  res.json(tasks);
}
