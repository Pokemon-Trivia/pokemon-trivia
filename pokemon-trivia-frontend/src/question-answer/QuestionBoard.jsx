import { useEffect, useState } from "react";
import PokeImage from "./PokeImage";
import Question from "./Question";
import AnswerList from "./AnswerList";
import { getPokemon } from "../api/questions";



const QuestionBoard = () => {
   const [currPokemon, setCurrPokemon] = useState(null);
   const [previousPokemon, setPreviousPokemon] = useState([]);
   const [answers, setAnswers] = useState([]);
   const [types, setTypes] = useState([]);
   const [currScore, setCurrScore] = useState(0);
   const [questionCount, seQuestionCount] = useState(1);

   const getPokemonData = async() => {
      const pokemonData = await getPokemon(6);
      console.log('Pokemon Data', pokemonData)
      setCurrPokemon(pokemonData)
   }

   useEffect(() => {
      getPokemonData();
   }, [])

   if (!currPokemon) return <p>Loading</p>

   return (
      <section>
         <PokeImage />
         <Question />
         <AnswerList />
      </section>
   )
}

export default QuestionBoard;