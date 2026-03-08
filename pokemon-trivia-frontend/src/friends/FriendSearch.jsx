const FriendSearch = ({findFriends}) => {
   return (
      <form id="search" action={findFriends}>
         <input type="text" name="criteria" id="username" placeholder="Search for a friend" required/>
         <button id="search-btn">Search</button>
      </form>
   )
}

export default FriendSearch