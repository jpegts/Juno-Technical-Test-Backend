import { Router } from "express";
import {
  getTasks,
  get,
  addTask,
  /*
  updateCounter, */
} from "../controllers/task";

const router = Router();

router.get("/", get);
router.get("/tasks", getTasks);
router.post("/tasks", addTask);
// router.put("/updateCounter/:id", updateCounter);

export default router;
