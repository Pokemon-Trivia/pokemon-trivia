const FriendsList = ({friends}) => {
   return friends.length > 0 ? (
      <ul id="friend-list">
         {friends.map((friend) => <FriendsListItem key={friend} friend={friend} />)}
      </ul>
   )
   : <h4 id="friends-list">Search to add friends!</h4>
}

const FriendsListItem = ({friend}) => <li className="friends-items">{friend}</li> 

export default FriendsList;