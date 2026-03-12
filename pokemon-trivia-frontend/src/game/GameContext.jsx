import { createContext, useContext, useState } from "react";

const GameContext = createContext()

const GameProvider = ({ children }) => {
   const [gameCategory, setGameCategory] = useState(0);

   const typesGame = {}
   const namesGame = {}

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