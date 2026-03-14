import { deleteFriend } from "../api/friends";
import { useAuth } from "../auth/AuthContext";

const FriendsList = ({ friends, tryGetFriends }) => {
   const { token } = useAuth();
   const tryDeleteFriend = async (friendUsername) => {
      const friendInfo = { token, friendUsername }
      
      await deleteFriend(friendInfo)
      await tryGetFriends();
   }

   return friends.length > 0 ? (
      <ul id="friend-list">
         {friends.map((friend) => <FriendsListItem key={friend} tryDeleteFriend={tryDeleteFriend} friend={friend} />)}
      </ul>
   )
   : <h4 id="friends-list">Search to add friends!</h4>
}

const FriendsListItem = ({ friend, tryDeleteFriend }) => {
   return (
      <li className="friends-items">
         {friend} <button className="delete-friend" onClick={() => tryDeleteFriend(friend)}>Delete</button>
      </li>
   )
}

export default FriendsList;