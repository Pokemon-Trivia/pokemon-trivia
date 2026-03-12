import { createContext, useContext } from "react";

const GameContext = createContext()

const GameProvider = ({ children }) => {
   const value = {}
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