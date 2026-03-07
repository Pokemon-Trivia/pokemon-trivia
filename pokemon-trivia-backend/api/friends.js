import { getUserFriendsById } from '#pokemon-trivia-backend/db/queries/friends';
import { findUsernameById } from '#pokemon-trivia-backend/db/queries/users';
import express from 'express';
import jwt from 'jsonwebtoken';

const friendsRouter = express.Router();
export default friendsRouter;

friendsRouter.get('/', async(req, res, next) => {
   try {
      const token = req.headers.authorization.split(' ')[1];
      const user = jwt.verify(token, process.env.JWT_SECRET)
      const friendArray = await getUserFriendsById(user.id)
      const friendUsernameArray = await Promise.all(friendArray.map(async (friend) => {
         const friendUsername = await findUsernameById(friend.friendId)
         return friendUsername;
      }));
      res.send(friendUsernameArray)
   } catch (error) {
      console.log(error)
   }
})
