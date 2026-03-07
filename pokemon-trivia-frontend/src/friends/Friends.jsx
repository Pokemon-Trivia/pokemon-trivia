import { useEffect, useState } from "react";
import FriendSearch from "./FriendSearch";
import FriendsHeader from "./FriendsHeader";
import FriendsList from "./FriendsList";
import { useAuth } from "../auth/AuthContext";
import { getFriends } from "../api/friends";

const Friends = () => {
   const [friends, setFriends] = useState([]);
   const { token } = useAuth();
   
   const tryGetFriends = async () => {
      await getFriends(token)
   }

   useEffect(() => {
      tryGetFriends()
   }, [])

  return (
    <section id="friends">
      <FriendsHeader />
      <FriendSearch />
      {/* <FriendsList friends={friends} /> */}
    </section>
  );
};

export default Friends;
