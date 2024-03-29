import express, { Application } from "express";

export const app: Application = express();

app.get("/", (req, res) => {
  res.send("Running");
});
