import { useNavigate } from "react-router";
import { useGame } from "../game/GameContext";
import { useEffect } from "react";

const Categories = () => {
   const { gameCategory, setGameCategory } = useGame();
   const navigate = useNavigate()

   useEffect(() => {
      if (gameCategory > 0) {
         navigate("/question")
      }
   }, [gameCategory])


   return gameCategory < 1 ? (
      <section id="categories-section">
         <p id="type-btn" onClick={() => {
            setGameCategory(1);
         }} >Pokémon Types</p>
         <p id="name-btn" onClick={() => {
            setGameCategory(2);
         }}>Pokémon Names</p>
      </section>
   )
   : <p>Loading...</p>
}

export default Categories;