import express from "express";
const router = express.Router();
export default router;

import { createUser, findUserByUsername, getUserHighScoreById } from "../db/queries/users.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET;

/* POST /users/register */
router.post("/register", async (req, res, next) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res
        .status(400)
        .json({ message: "Username and password are missing." });
    }

    const user = await createUser({ username, password });
    const token = jwt.sign(
      { id: user.id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: "12h" },
    );

    res.status(201).send({ token });
  } catch (error) {
    next(error);
  }
});

/* POST /users/login */
router.post("/login", async (req, res, next) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res
        .status(400)
        .json({ message: "Username and password are missing." });
    }

    const foundUser = await findUserByUsername(username);
    if (!foundUser) {
      return res.status(401).json({ message: "Username does not exists" });
    }

    const isPasswordMatch = await bcrypt.compare(password, foundUser.password);

    if (!isPasswordMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }

    const token = jwt.sign(
      { id: foundUser.id, username: foundUser.username },
      SECRET,
    );

    res.status(200).send({ token });
  } catch (error) {
    next(error);
  }
});

router.put("/highscore", async(req, res, next) => {
  try {
    const {token, newScore} = req.body
    const tokenInfo = jwt.verify(token, process.env.JWT_SECRET);
    const userId = tokenInfo.id;
    console.log("username ", userId);
    const userInfo = await getUserHighScoreById(userId);
    const currentHighScore = userInfo.highScore;
    console.log('current high score ', currentHighScore)
    res.json("OK")
  } catch (error) {
    next(error)
  }
})