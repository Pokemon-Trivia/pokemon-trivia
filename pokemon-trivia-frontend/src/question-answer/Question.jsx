import { useGame } from "../game/GameContext";

const Question = ({ name }) => {
   const { gameCategory } = useGame();
   return gameCategory === 1 ? (
      <p>
         What is {name}'s primary Pokémon type?
      </p>
   )
   : <p>Who is that Pokémon?</p>
}

export default Question;