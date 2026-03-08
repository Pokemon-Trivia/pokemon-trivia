import { useEffect, useState } from "react";
import FriendSearch from "./FriendSearch";
import FriendsHeader from "./FriendsHeader";
import FriendsList from "./FriendsList";
import { useAuth } from "../auth/AuthContext";
import { getFriends } from "../api/friends";
import "./friends.css"

const Friends = () => {
   const [friends, setFriends] = useState([]);
   const { token } = useAuth();
   
   const tryGetFriends = async () => {
      const friendArray = await getFriends(token);
      setFriends(friendArray)
   }

   useEffect(() => {
      tryGetFriends()
   }, [])

  return (
    <section id="friends">
      <FriendsHeader friends={friends} />
      <FriendSearch />
      <FriendsList friends={friends} />
    </section>
  );
};

export default Friends;
