import "reflect-metadata";
import "dotenv/config";
import { AppDataSource } from "./data-source";

import express from "express";
import { json } from "express";
import cors from "cors";
import morgan from "morgan";
import Router from "./routes";

const app = express();

app.use(json());
app.use(cors());
app.use(morgan("dev"));

app.use("/api", Router);

AppDataSource.initialize()
  .then(async (_connection) => {
    app.listen(process.env.PORT, () => {
      console.log(`Server Up in ${process.env.PORT} 🚀`);
    });
  })
  .catch((error: Error) => console.log(error));
