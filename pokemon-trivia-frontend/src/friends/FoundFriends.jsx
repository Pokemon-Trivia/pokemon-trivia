const FoundFriends = ({ friends, foundFriends, resetFoundFriends }) => {
   return foundFriends.length > 0 ? (
      <section id="found-friends">
         <ul>
            {foundFriends.map((friend) => {
               return <FoundFriendsLi key={friend} friends={friends} friend={friend} />
            })}
         </ul>
         <p id="back-btn" className="btn" onClick={() => resetFoundFriends()}>Back</p>
      </section>
   )
   : <h2>No Trainers Found</h2>
}

const FoundFriendsLi = ({ friends, friend }) => {
   return (
      friends?.includes(friend) ? <li>{friend}</li>
      : <li>{friend} <p className="btn" id="add-friend-btn">Add Friend</p></li>
   )
}
   

export default FoundFriends;