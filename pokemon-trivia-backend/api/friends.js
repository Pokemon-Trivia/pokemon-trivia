import {
  addFriend,
  getAllUsernames,
  getUserFriendsById,
  deleteFriendByIds
} from "#pokemon-trivia-backend/db/queries/friends";
import {
  findUserIdByUsername,
  findUsernameById,
} from "#pokemon-trivia-backend/db/queries/users";
import express from "express";
import jwt from "jsonwebtoken";

const friendsRouter = express.Router();
export default friendsRouter;

friendsRouter.use((req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  const user = jwt.verify(token, process.env.JWT_SECRET);
  req.user = user;
  next();
});

friendsRouter.get("/", async (req, res, next) => {
  try {
    const user = req.user;
    const friendArray = await getUserFriendsById(user.id);
    const friendUsernames = friendArray.map((friend) => friend.username);
    res.send(friendUsernames);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

friendsRouter.get("/search", async (req, res, next) => {
  try {
    const user = req.user;
    const usernameObjects = await getAllUsernames(user.id);
    const usernames = usernameObjects.map(
      (usernameObj) => usernameObj.username,
    );
    res.send(usernames);
  } catch (error) {
    next(error);
  }
});

friendsRouter.post("/add", async (req, res, next) => {
  try {
    const { friendUsername } = req.body;
    const user = req.user;
    const friendId = await findUserIdByUsername(friendUsername);
    const addedUsername = await addFriend(user.id, friendId);
    res.status(201).json(addedUsername)
  } catch (error) {
    next(error);
  }
});

friendsRouter.delete("/delete", async (req, res, next) => {
  try {
    const user = req.user;
    const userId = user.id;
    const { friendUsername } = req.body;
    const friendUserId = await findUserIdByUsername(friendUsername);
    await deleteFriendByIds(userId, friendUserId)
    res.json(friendUsername);
  } catch (error) {
    next(error)
  }
})
