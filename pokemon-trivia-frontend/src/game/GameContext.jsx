import { createContext, useContext, useState } from "react";
import { getPokemon } from "../api/questions";

const GameContext = createContext()

const GameProvider = ({ children }) => {
   const [gameCategory, setGameCategory] = useState(0);
   const [currPokemon, setCurrPokemon] = useState(null);
   const [previousPokemon, setPreviousPokemon] = useState([]);
   const [answers, setAnswers] = useState([]);
    const [questionCount, setQuestionCount] = useState(1);

   const getRightPokemonData = async () => {
       const pokeId = randomId();
       const pokemonData = await getPokemon(pokeId);
       setCurrPokemon(pokemonData);
   };

   const getWrongPokemonName = async (wrongAnswers) => {
      const pokeId = randomId();
      const pokemonData = await getPokemon(pokeId);
      if (wrongAnswers.includes(pokemonData.name)) getWrongPokemonName(wrongAnswers);
      return pokemonData.name;
   }

   const randomId = () => {
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

   const createAnswerList = () => {
      let rightAnswer = ""
      if (gameCategory === 1) {
         rightAnswer = currPokemon.type;
      } else if (gameCategory === 2) {
         rightAnswer = currPokemon.name;
      }

      const wrongAnswers = [];
      while (wrongAnswers.length < 3) {
         let newAnswer = "";
         if (gameCategory === 1) {
            newAnswer = randomTypeIndex(wrongAnswers, rightAnswer);
         } else if (gameCategory === 2) {
            newAnswer = getWrongPokemonName(wrongAnswers);
         }
         wrongAnswers.push(newAnswer);
      }
      const answerList = [rightAnswer, ...wrongAnswers];
      const randomAnswerList = answerShuffle(answerList);
      setAnswers(randomAnswerList);
  };
   
   const checkAnswer = (selectedAnswer) => {
      if (gameCategory === 2 && selectedAnswer === currPokemon.name) {
         setCurrScore(currScore + 1);
      } else if (selectedAnswer === currPokemon.type) {
         setCurrScore(currScore + 1);
      }
      setPreviousPokemon([...previousPokemon, currPokemon.id]);
      setQuestionCount(questionCount + 1);
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