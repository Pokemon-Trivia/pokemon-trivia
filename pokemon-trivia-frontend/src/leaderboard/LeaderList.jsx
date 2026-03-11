import goldMedal from "../assets/gold-medal.png";
import silverMedal from "../assets/silver-medal.png";
import bronzeMedal from "../assets/bronze-medal.png"

const LeaderList = ({ leaders }) => {
   return (
      <ul id="leader-list">
         {leaders.map((leader, index) => <LeaderListItem key={leader.username} leader={leader} place={index + 1} />)}
      </ul>
   )
}

const LeaderListItem = ({ leader, place }) => {
   let placeHeld = "";
   let medal = null;

   switch (place) {
      case 1:
         return (
            <li className="top-three">
               <img className="medals" src={goldMedal} alt="Gold Pokémon medal that has an image of Pikachu and the words Pokémon Trainer" />
               {place}st - {leader.username}: {leader.highScore}
            </li>
         )
      
      case 2:
         return (
            <li className="top-three">
               <img className="medals" src={silverMedal} alt="Silver Pokémon medal that has an image of Pikachu and the words Pokémon Trainer" />
               {place}nd - {leader.username}: {leader.highScore}
            </li>
         )
      
      case 3:
         return (
            <li className="top-three">
               <img className="medals" src={bronzeMedal} alt="Bronze Pokémon medal that has an image of Pikachu and the words Pokémon Trainer" />
               {place}rd - {leader.username}: {leader.highScore}
            </li>
         )
         break;
   
      default:
         placeHeld = place + "th"
         break;
   }
   return <li className="leader-list-item">{ placeHeld } - {leader.username}: {leader.highScore}</li>
}
   

export default LeaderList;