import { useEffect, useState } from "react";
import FriendSearch from "./FriendSearch";
import FriendsHeader from "./FriendsHeader";
import FriendsList from "./FriendsList";
import { useAuth } from "../auth/AuthContext";
import { getFriends, getUsernames } from "../api/friends";
import "./friends.css"

const Friends = () => {
   const [friends, setFriends] = useState([]);
   const [foundFriends, setFoundFriends] = useState();
   const { token } = useAuth();
   
   const tryGetFriends = async () => {
      const friendArray = await getFriends(token);
      setFriends(friendArray)
   }

   const findFriends = async(formData) => {
      const criteria = formData.get('criteria').trim().toLowerCase();
      const allUsernames = await getUsernames()
      const found = allUsernames.filter((username) => username.toLowerCase().includes(criteria))
      setFoundFriends(found)
   }

   const resetFoundFriends = () => setFoundFriends(null)

   useEffect(() => {
      resetFoundFriends();
   }, [])

   useEffect(() => {
      if (!token) return
      tryGetFriends()
   }, [token])

  return (
    <section id="friends">
      <FriendsHeader friends={friends} />
      <FriendSearch findFriends={findFriends} />  
      <h2>My Friends:</h2>
      <FriendsList friends={friends} />
    </section>
  );
};

export default Friends;
