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
      SELECT
      CASE
      WHEN user_id = $1 THEN friend_user_id
      WHEN friend_user_id = $1 THEN user_id
      END AS "friendId"
      FROM friends
      WHERE user_id = $1 OR friend_user_id = $1
   `;

   const { rows: array } = await db.query(sql, [id]);
   return array
}
