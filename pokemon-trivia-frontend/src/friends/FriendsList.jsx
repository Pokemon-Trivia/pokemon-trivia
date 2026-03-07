const FriendsList = ({friends}) => {
   return friends ? (
      <ul id="friend-list">
         {friends.map((friend) => <FriendsListItem key={friend} friend={friend} />)}
      </ul>
   )
   : <h1>Loading...</h1>
}

const FriendsListItem = ({friend}) => <li>{friend}</li>

export default FriendsList;