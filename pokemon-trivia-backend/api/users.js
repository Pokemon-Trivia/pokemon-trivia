import express from "express";
const router = express.Router();
export default router;

import { createUser, findUserByUsername } from "../db/queries/users.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET;

/* POST /users/register */
router.post("/register", async (req, res, next) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).send("Username and password are missing.");
    }

    const token = await createUser({ username, password });

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
      return res.status(400).send("Username and password are missing.");
    }

    const foundUser = await findUserByUsername(username);
    if (!foundUser) {
      return res.status(401).send("Invalid credentials.");
    }

    const isPasswordMatch = await bcrypt.compare(password, foundUser.password);

    if (!isPasswordMatch) {
      return res.status(401).send("Invalid credentials.");
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
