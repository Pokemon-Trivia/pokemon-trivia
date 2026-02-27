import db from '../client.js'
import { findUsernameById } from './users.js';

export const addFriend = async(userId, friendUserId) => {
   const sql = `
      INSERT INTO friends (user_id, friend_user_id)
      VALUES ($1, $2)
      RETURNING friend_user_id AS "id"
   `;

   const {rows: [friend]} = await db.query(sql, [userId, friendUserId]);
   const friendUsername = await findUsernameById(friend.id);
   return friendUsername;
}
