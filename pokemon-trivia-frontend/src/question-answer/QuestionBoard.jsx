import { useEffect, useState } from "react";
import PokeImage from "./PokeImage";
import Question from "./Question";
import AnswerList from "./AnswerList";
import { getPokemon, getTypes } from "../api/questions";



const QuestionBoard = () => {
   const [currPokemon, setCurrPokemon] = useState(null);
   const [previousPokemon, setPreviousPokemon] = useState([]);
   const [answers, setAnswers] = useState([]);
   const [types, setTypes] = useState([]);
   const [currScore, setCurrScore] = useState(0);
   const [questionCount, seQuestionCount] = useState(1);

   const getPokemonData = async() => {
      const pokeId = randomId();
      const pokemonData = await getPokemon(pokeId);
      console.log('Pokemon Data', pokemonData)
      setCurrPokemon(pokemonData)
   }

   const randomId = () => {
      const newId = Math.floor(Math.random() * 1025) + 1;
      if (previousPokemon.includes(newId)) {
         return randomId();
      } else {
         return newId;
      }
   }

   const randomTypeIndex = (array, rightAnswer) => {
      const newTypeIndex = Math.floor(Math.random() * 18);
      if (array.includes(types[newTypeIndex]) || types[newTypeIndex] === rightAnswer) {
         return randomTypeIndex(array, rightAnswer);
      } else {
         return types[newTypeIndex];
      }
   }

   const getPokemonTypes = async() => {
      setTypes(await getTypes());
   }

   const answerShuffle = (answerArray, rightAnswer) => {
      for (let i = answerArray.length -1; i > 0; i--) {
         const j = Math.floor(Math.random() * (i + 1));
         [answerArray[i], answerArray[j]] = [answerArray[j], answerArray[i]];
      }
      return answerArray
   }

   const createAnswerList = () => {
      const rightAnswer = currPokemon.type;
      const wrongAnswers = []
      while (wrongAnswers.length < 3) {
         const newType = randomTypeIndex(wrongAnswers, rightAnswer);
         wrongAnswers.push(newType)
      }
      const answerList = ([rightAnswer, ...wrongAnswers])
      const randomAnswerList = answerShuffle(answerList)
      setAnswers(randomAnswerList)
      
   }

   useEffect(() => {
      getPokemonData();
   }, [questionCount])

   useEffect(() => {
      getPokemonTypes();
   }, [])

   useEffect(() => {
      if (currPokemon && types.length > 0) createAnswerList();
   }, [currPokemon, types])

   if (!currPokemon) return <p>Loading...</p>

   return (
      <section>
         <PokeImage />
         <Question />
         {/* <AnswerList /> */}
      </section>
   )
}

export default QuestionBoard;