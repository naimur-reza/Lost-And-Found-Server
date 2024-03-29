import express, { Application } from "express";
import globalErrorHandler from "./app/handlers/GlobalErrorHanlder";
import notFound from "./app/handlers/NotFound";
import cors from "cors";
import { appRouter } from "./app/routes";

export const app: Application = express();

// middlewares
app.use(cors());
app.use(express.json());

// app router handling
app.use(appRouter);

app.get("/", (req, res) => {
  res.send("Running");
});

// global error handler
app.use(globalErrorHandler);

// not found route handler
app.use(notFound);
