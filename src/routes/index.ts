import { Router } from "express";
import {
  getTasks,
  get,
  /*   addCounter,
  updateCounter, */
} from "../controllers/counter";

const router = Router();

router.get("/", get);
router.get("/tasks", getTasks);
/* router.post("/addCounter", addCounter);
router.put("/updateCounter/:id", updateCounter); */

export default router;
