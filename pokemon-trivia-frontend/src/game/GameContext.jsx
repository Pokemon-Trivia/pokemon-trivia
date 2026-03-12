import { createContext, useContext, useState } from "react";
import { getPokemon, getTypes } from "../api/questions";

const GameContext = createContext()

const GameProvider = ({ children }) => {
   const [gameCategory, setGameCategory] = useState(0);
   const [currPokemon, setCurrPokemon] = useState(null);
   const [previousPokemon, setPreviousPokemon] = useState([]);
   const [types, setTypes] = useState([]);
   const [answers, setAnswers] = useState([]);
   const [currScore, setCurrScore] = useState(0);
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

   const getPokemonTypes = async () => {
       setTypes(await getTypes());
   };

   const randomType = (array, rightAnswer) => {
      const newTypeIndex = Math.floor(Math.random() * 18);
      if (
         array.includes(types[newTypeIndex]) ||
         types[newTypeIndex] === rightAnswer
      ) {
         return randomType(array, rightAnswer);
      } else {
         return types[newTypeIndex];
      }
  };

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

   const createAnswerList = async () => {
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
            newAnswer = randomType(wrongAnswers, rightAnswer);
         } else if (gameCategory === 2) {
            newAnswer = await getWrongPokemonName(wrongAnswers);
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

   const value = {
      currPokemon,
      types,
      questionCount,
      answers,
      currScore,
      setCurrPokemon,
      setPreviousPokemon,
      setAnswers,
      setQuestionCount,
      setGameCategory,
      setCurrScore,
      getRightPokemonData,
      getPokemonTypes,
      createAnswerList,
      checkAnswer
   }
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