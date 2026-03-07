import express from 'express';
import jwt from 'jsonwebtoken';

const friendsRouter = express.Router();
export default friendsRouter;

friendsRouter.get('/', (req, res, next) => {
   try {
      const token = req.headers.authorization.split(' ')[1];
      const user = jwt.verify(token, process.env.JWT_SECRET)
      console.log(user)
      res.json("Made it to friend route")
   } catch (error) {
      
   }
})
