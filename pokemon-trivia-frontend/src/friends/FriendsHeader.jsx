const FriendsHeader = ({ friends }) => {
   return (
      <section id="friend-header">
         <h2>Friends</h2>
         <p id="friend-header-p">Total Friends: {friends.length}</p>
      </section>
   )
}

export default FriendsHeader;