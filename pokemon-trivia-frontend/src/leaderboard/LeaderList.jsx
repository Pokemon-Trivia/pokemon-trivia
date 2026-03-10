const LeaderList = ({ leaders }) => {
   return (
      <ul id="leader-list">
         {leaders.map((leader, index) => <LeaderListItem key={leader.username} leader={leader} place={index + 1} />)}
      </ul>
   )
}

const LeaderListItem = ({ leader, place }) => {
   let placeHeld = "";

   switch (place) {
      case 1:
         placeHeld = place + "st"
         break;
      
      case 2:
         placeHeld = place + "nd"
         break;
      
      case 3:
         placeHeld = place + "rd"
         break;
   
      default:
         placeHeld = place + "th"
         break;
   }
   return <li id="leader-list-item">{ placeHeld } - {leader.username}: {leader.highScore}</li>
}
   

export default LeaderList;