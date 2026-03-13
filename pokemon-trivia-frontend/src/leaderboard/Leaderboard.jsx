import { useEffect, useState } from "react";
import LeaderList from "./LeaderList";
import { getLeaders } from "../api/leaders";
import leaderImg from "../assets/leaderboard-pokemon-image.png"
import "./leaderboard.css"

const Leaderboard = () => {
   const [leaders, setLeaders] = useState([]);

   const tryGetLeaders = async () => {
      const topLeaders = await getLeaders();
      setLeaders(topLeaders)
   }

   useEffect(() => {
      tryGetLeaders();
   }, [])

   return leaders.length > 0 ? (
      <section id="leaderboard-component">
         <h1 id="leader-header">Top Trainers!</h1>
         <img id="leader-img" src={leaderImg} alt="Ash holding a trophy with Brock, Misty and other Pokémon trainers and pokemon around him" />
         <LeaderList leaders={leaders} />
      </section>
   )
   : <p>Loading...</p>
}

export default Leaderboard;