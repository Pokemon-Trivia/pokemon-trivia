import db from "../client.js";
import bcrypt from "bcrypt";

export const createUser = async ({ username, password }) => {
  const securePassword = await bcrypt.hash(password, 10);
  const sql = `
      INSERT INTO users (username, password)
      VALUES ($1, $2)
      RETURNING id, username
   `;

  const {
    rows: [user],
  } = await db.query(sql, [username, securePassword]);

  return user;
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

export const getUserHighScoreById = async (id) => {
  const sql = `
    SELECT users.high_score AS "highScore" FROM users
    WHERE users.id = $1
  `;

  const {rows: [score]} = await db.query(sql, [id])
  return score
}