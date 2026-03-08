const FoundFriends = ({ foundFriends }) => {
   foundFriends.length > 0 ? (
      <ul>
         {foundFriends.map((friend) => {
            <FoundFriendsLi friend={friend} />
         })}
      </ul>
   )
   : <h2>No Trainers Found</h2>
}

const FoundFriendsLi = ({ friend }) => <li>{friend}</li>

export default FoundFriends;