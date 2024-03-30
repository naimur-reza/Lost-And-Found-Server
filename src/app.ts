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
app.use("/api/", appRouter);

// global endpoint
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    statusCode: 200,
    message: "Lost and Found System is running",
    data: null,
  });
});

// global error handler
app.use(globalErrorHandler);

// not found route handler
app.use(notFound);
