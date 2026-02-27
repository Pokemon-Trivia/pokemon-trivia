import db from '../client.js'
import { findUsernameById } from './users';

export const addFriend = async(userId, friendUserId) => {
   const sql = `
      INSERT INTO friends (user_id, friend_user_id)
      VALUES ($1, $2)
      RETURNING $2
   `;

   const {rows: [friedsId]} = await db.query(sql, [userId, friendUserId]);
   const friendUsername = await findUsernameById(friedsId);
   return friendUsername;
}
