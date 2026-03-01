import express from "express";
const app = express();
export default app;

import userRouter from "./api/users.js";

app.use(express.json());

app.use("/users", userRouter);

app.use((err, req, res, next) => {
  if (err.code === "23505") {
    return res.status(409).send("Username already exist.");
  }
  next(err);
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("Sorry! Something went wrong.");
});
