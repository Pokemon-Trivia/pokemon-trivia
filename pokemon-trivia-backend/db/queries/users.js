import db from "../client.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const createUser = async ({ username, password, highScore }) => {
  const sql = `
      INSERT INTO users (username, password, high_score)
      VALUES ($1, $2, $3)
      RETURNING username
   `;
  const securePassword = await bcrypt.hash(password, 10);
  const {
    rows: [user],
  } = await db.query(sql, [username, securePassword, highScore]);
  const token = jwt.sign({ user }, process.env.JWT_SECRET);
  return token;
};

export const findUsernameById = async (id) => {
  const sql = `
      SELECT * FROM users
      WHERE users.id = $1
   `;

  const {
    rows: [foundUser],
  } = await db.query(sql, [id]);
  if (!foundUser) return foundUser;
  const foundUsername = foundUser.username;
  return foundUsername;
};

export const findUserIdByUsername = async (username) => {
  const sql = `
      SELECT * FROM users
      WHERE users.username = $1
   `;

  const {
    rows: [foundUser],
  } = await db.query(sql, [username]);
  if (!foundUser) return foundUser;
  const foundUserId = foundUser.id;
  return foundUserId;
};

export const findUserByUsername = async (username) => {
  const sql = `
    SELECT * FROM users
    WHERE username = $1
  `;

  const {
    rows: [user],
  } = await db.query(sql, [username]);

  return user;
};
