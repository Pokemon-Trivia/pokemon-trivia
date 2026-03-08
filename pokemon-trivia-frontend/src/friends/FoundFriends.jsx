const FoundFriends = ({ foundFriends }) => {
   return foundFriends.length > 0 ? (
      <section id="found-friends">
         <ul>
            {foundFriends.map((friend) => {
               return <FoundFriendsLi friend={friend} />
            })}
         </ul>
         <button id="back-btn">Back</button>
      </section>
   )
   : <h2>No Trainers Found</h2>
}

const FoundFriendsLi = ({ friend }) => <li>{friend} <button id="add-friend-btn">Add Friend</button></li>

export default FoundFriends;