import { createContext, useContext } from "react";

const GameContext = createContext()

const GameProvider = ({ children }) => {
   
}

export const useGame = () => {
   const context = useContext(GameContext)
}