const FriendsList = (friends) => {
   return friends ? (
      <ul>
         {friends.map((friend) => {
            <FriendsListItem friend={friend} />
         })}
      </ul>
   )
   : <h1>Loading...</h1>
}

const FriendsListItem = ({friend}) => {
   return (
      <li>{friend}</li>
   )
}

export default FriendsList;