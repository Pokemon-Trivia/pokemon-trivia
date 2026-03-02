import express from "express";
const router = express.Router();
export default router;

import { createUser } from "../db/queries/users.js";

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
