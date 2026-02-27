import db from '../client.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const createUser = async({username, password, highScore}) => {
   const sql = `
      INSERT INTO users (username, password, high_score)
      VALUES ($1, $2, $3)
      RETURNING username
   `;
   const securePassword = await bcrypt.hash(password, 10)
   const {rows: [user]} = await db.query(sql, [username, securePassword, highScore]);
   const token = jwt.sign({user}, process.env.JWT_SECRET)
   return token;
}