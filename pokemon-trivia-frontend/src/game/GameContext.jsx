import { createContext, useContext, useState } from "react";

const GameContext = createContext()

const GameProvider = ({ children }) => {
   const [gameCategory, setGameCategory] = useState(0);

   const getPokemonData = async () => {
       const pokeId = randomId();
       const pokemonData = await getPokemon(pokeId);
       setCurrPokemon(pokemonData);
   };

   const randomId = (gameCategory) => {
      const newId = Math.floor(Math.random() * 1025) + 1;
      if (gameCategory === 2 && currPokemon.id === newId) {
         return randomId();
      } else if (previousPokemon.includes(newId)) {
         return randomId();
      } else {
         return newId;
      }
   };
   
   const answerShuffle = (answerArray) => {
    for (let i = answerArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [answerArray[i], answerArray[j]] = [answerArray[j], answerArray[i]];
    }
    return answerArray;
  };

   const value = {setGameCategory}
   return <GameContext.Provider value={value}>{ children }</GameContext.Provider>
}

export const useGame = () => {
   const context = useContext(GameContext)
   if (!context) {
      throw new Error("Must have access to GameProvider to use")
   }
   return context;
}

export default GameProvider;