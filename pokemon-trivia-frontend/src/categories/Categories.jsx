import { useNavigate } from "react-router";
import { useGame } from "../game/GameContext";

const Categories = () => {
   const { setGameCategory } = useGame();
   const navigate = useNavigate()
   return (
      <section id="categories-section">
         <p id="type-btn" onClick={() => {
            setGameCategory(1);
            navigate("/question");
         }} >Pokémon Types</p>
         <p id="name-btn" onClick={() => {
            setGameCategory(2);
            navigate("/question")
         }}>Pokémon Names</p>
      </section>
   )
}

export default Categories;