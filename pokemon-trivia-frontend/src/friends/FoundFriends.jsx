const FoundFriends = ({ foundFriends }) => {
   return foundFriends.length > 0 ? (
      <ul>
         {foundFriends.map((friend) => {
            return <FoundFriendsLi friend={friend} />
         })}
      </ul>
   )
   : <h2>No Trainers Found</h2>
}

const FoundFriendsLi = ({ friend }) => <li>{friend} <button id="add-friend">Add Friend</button></li>

export default FoundFriends;