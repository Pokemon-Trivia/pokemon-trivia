import { useState } from "react";
import FriendSearch from "./FriendSearch";
import FriendsHeader from "./FriendsHeader";
import FriendsList from "./FriendsList";
import { useAuth } from "../auth/AuthContext";

const Friends = () => {
   const [friends, setFriends] = useState([]);
   const { token } = useAuth();

   const getFriends = async () => {
      const response = await fetch("/friends", {
         method: "GET",
         headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token
         }
      })
   }
   
   const tryGetFriends = async () => {
      
   }

  return (
    <section id="friends">
      <FriendsHeader />
      <FriendSearch />
      {/* <FriendsList friends={friends} /> */}
    </section>
  );
};

export default Friends;
