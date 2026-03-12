import { useGame } from "../game/GameContext";

const Categories = () => {
   const { setGameCategory } = useGame();

   return (
      <section id="categories-section">
         <p id="type-btn" onClick={() => setGameCategory(1)}>Pokémon Types</p>
         <p id="name-btn" onClick={() => setGameCategory(2)}>Pokémon Names</p>
      </section>
   )
}

export default Categories;