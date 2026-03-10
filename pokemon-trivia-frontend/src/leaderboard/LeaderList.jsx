const LeaderList = ({ leaders }) => {
   return (
      <ul>
         {leaders.map((leader) => <LeaderListItem key={leader.username} leader={leader} />)}
      </ul>
   )
}

const LeaderListItem = ({ leader }) => <li>{leader.username}: {leader.score}</li>

export default LeaderList;