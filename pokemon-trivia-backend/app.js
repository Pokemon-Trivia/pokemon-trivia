import express from "express";
const app = express();
export default app;

import cors from "cors";
app.use(cors({origin: "https://pokemon-trivia-fs.netlify.app"}))

import userRouter from "./api/users.js";
import friendsRouter from "./api/friends.js";

app.use(express.json());

app.use("/api/users", userRouter);
app.use("/api/friends", friendsRouter)

app.use((err, req, res, next) => {
  console.error(err);

  if (err.code === "23505") {
    return res.status(409).json({ message: "Username already exists." });
  }

  res.status(500).json({ message: "Sorry! Something went wrong." });
});
