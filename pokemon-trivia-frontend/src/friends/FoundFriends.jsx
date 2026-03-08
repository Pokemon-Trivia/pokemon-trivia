import { addNewFriend } from "../api/friends";
import { useAuth } from "../auth/AuthContext"

const FoundFriends = ({ friends, foundFriends, resetFoundFriends }) => {
   const { token } = useAuth();
   const addFriend = async (friendUsername) => {
      const friendInfo = {
         token,
         friendUsername
      };

      await addNewFriend(friendInfo);
      resetFoundFriends()
   }

   return foundFriends.length > 0 ? (
      <section id="found-friends">
         <ul>
            {foundFriends.map((friend) => {
               return <FoundFriendsLi key={friend} friends={friends} friend={friend} addFriend={addFriend} />
            })}
         </ul>
         <p id="back-btn" className="btn" onClick={() => resetFoundFriends()}>Back</p>
      </section>
   )
      : (
         <>
            <h2 id="no-trainers">No Trainers Found</h2>
            <p id="back-btn" className="btn" onClick={() => resetFoundFriends()}>Back</p>
         </> 

      )
}

const FoundFriendsLi = ({ friends, friend, addFriend }) => {
   return (
      friends?.includes(friend) ? <li>{friend}</li>
      : <li>{friend} <p className="btn" id="add-friend-btn" onClick={() => addFriend(friend)}>Add Friend</p></li>
   )
}
   

export default FoundFriends;