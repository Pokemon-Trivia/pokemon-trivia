import { useEffect, useState } from "react";
import LeaderList from "./LeaderList";
import { getLeaders } from "../api/leaders";

const Leaderboard = () => {
   const [leaders, setLeaders] = useState([]);

   const tryGetLeaders = async () => {
      const topLeaders = await getLeaders();
      console.log("Component: ", topLeaders)
      setLeaders(topLeaders)
   }

   useEffect(() => {
      tryGetLeaders();
   }, [])

   return leaders.length > 0 ? (
      <section id="leaderboard-component">
         <h1 id="leader-header">Top Trainers!</h1>
         <LeaderList />
      </section>
   )
   : <p>Loading...</p>
}

export default Leaderboard;