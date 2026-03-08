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
      const friendUsernames = friendArray.map((friend) => friend.username)
      res.send(friendUsernames)
   } catch (error) {
      console.log(error)
      next(error)
   }
})
