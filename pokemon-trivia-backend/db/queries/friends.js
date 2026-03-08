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

export const getUserFriendsById = async (id) => {
   const sql = `
      SELECT u.username
      FROM friends f
      JOIN users u ON u.id = CASE
      WHEN f.user_id = $1 THEN f.friend_user_id
      WHEN f.friend_user_id = $1 THEN f.user_id
      END
      WHERE f.user_id = $1 OR f.friend_user_id = $1
   `;

   const { rows: array } = await db.query(sql, [id]);
   return array
}

export const getAllUsernames = async () => {
   const 
}
