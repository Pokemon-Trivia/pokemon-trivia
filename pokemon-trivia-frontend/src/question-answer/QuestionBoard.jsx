import { useEffect, useState } from "react";
import PokeImage from "./PokeImage";
import Question from "./Question";
import AnswerList from "./AnswerList";
import { getPokemon, getTypes } from "../api/questions";
import QuestionScore from "./QuestionScore";
import GameResults from "./GameResults";
import { useGame } from "../game/GameContext";

const QuestionBoard = () => {
  const {
    currPokemon, types, questionCount, answers, currScore, setCurrPokemon, setPreviousPokemon, setAnswers, setQuestionCount, setCurrScore, getRightPokemonData, getPokemonTypes, createAnswerList, checkAnswer
  } = useGame();

  const [timeLeft, setTimeLeft] = useState(10);

  useEffect(() => {
    if (questionCount > 10) return;

    setTimeLeft(10);

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev === 1) {
          clearInterval(timer);
          setQuestionCount((count) => count + 1);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [questionCount]);

  const getPokemonData = async () => {
    const pokeId = randomId();
    const pokemonData = await getPokemon(pokeId);
    setCurrPokemon(pokemonData);
  };

  const resetGame = () => {
    setCurrPokemon(null);
    setPreviousPokemon([]);
    setAnswers([]);
    setCurrScore(0);
    setQuestionCount(1);
  };

  useEffect(() => {
    getRightPokemonData();
  }, [questionCount]);

  useEffect(() => {
    getPokemonTypes();
  }, []);

  useEffect(() => {
    if (currPokemon && types.length > 0) createAnswerList();
  }, [currPokemon, types]);

  if (!currPokemon) return <p>Loading...</p>;

  return questionCount < 11 ? (
    <section id="game-board">
      <QuestionScore
        questionCount={questionCount}
        currScore={currScore}
        timeLeft={timeLeft}
      />
      <PokeImage imgUrl={currPokemon.imgUrl} name={currPokemon.name} />
      <Question name={currPokemon.name} />
      <AnswerList answerList={answers} checkAnswer={checkAnswer} />
    </section>
  ) : (
    <section id="game-board">
      <GameResults currScore={currScore} resetGame={resetGame} />
    </section>
  );
};

export default QuestionBoard;
