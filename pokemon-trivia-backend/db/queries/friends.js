import db from '../client.js'
import { findUsernameById } from './users.js';

export const addFriend = async(userId, friendUserId) => {
   const [lowId, highId] = [userId, friendUserId].sort((a, b) => a - b);
   const sql = `
      INSERT INTO friends (user_id, friend_user_id)
      VALUES ($1, $2)
   `;

   const {rows: [friend]} = await db.query(sql, [lowId, highId]);
   const friendUsername = await findUsernameById(friendUserId);
   return friendUsername;
}
