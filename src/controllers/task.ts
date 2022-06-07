import { Request, Response } from "express";
import { Task } from "../entity/Task";

export const get = (_req: Request, res: Response) => {
  res.send(
    "<center><h1> Welcome to tasks API - Juno's Technical Test 👋</h1></center>"
  );
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
*/
export const addTask = async (req: Request, res: Response) => {
  try {
    const task = Task.create({
      name: req.body.name,
      description: req.body.description,
      deadline: req.body.deadline,
      isDone: req.body.isDone,
    });

    await task.save();
    res.send(task);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
};

export async function getTasks(_req: Request, res: Response) {
  const tasks = await Task.find();
  res.json(tasks);
}
