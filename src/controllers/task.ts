import { Request, Response } from "express";
import { Task } from "../entity/Task";

export const get = (_req: Request, res: Response) => {
  res.send(
    "<center><h1> Welcome to tasks API - Juno's Technical Test 👋</h1></center>"
  );
};

export const updateTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  const newTask = req.body;

  try {
    const task = await Task.findOneOrFail({
      where: {
        _id: id,
      },
    });
    task.name = newTask.name;
    task.description = newTask.description;
    task.deadline = newTask.deadline;
    task.isDone = newTask.isDone;

    await task.save();

    res.send(task);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
};

export async function deleteTask(req: Request, res: Response) {
  const uuid = req.params.uuid;
  const successMsg = { message: "Task deleted" };
  try {
    const task = await Task.findOneOrFail({
      where: {
        _id: uuid,
      },
    });
    await task.remove();
    return res.status(204).json(successMsg);
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ error: " Something went wrong while deleting ..." });
  }
}

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
