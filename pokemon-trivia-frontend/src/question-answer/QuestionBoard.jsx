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

   const getPokemonTypes = async() => {
      setTypes(await getTypes());
   }

   const answerShuffle = () => {
      const newAnswers = answers;
      for (let i = answers.length -1; i > 0; i--) {
         const j = Math.floor(Math.random() * (i + 1))
         [newAnswers[i], newAnswers[j] = [newAnswers[j], newAnswers[i]]];
      }
      console.log(newAnswers)
   }

   useEffect(() => {
      getPokemonData();
      getPokemonTypes();
   }, [])

   if (!currPokemon) return <p>Loading</p>

   return (
      <section>
         <PokeImage />
         <Question />
         {/* <AnswerList /> */}
      </section>
   )
}

export default QuestionBoard;