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
    currPokemon, types, questionCount, answers, currScore, gameCategory,
    setCurrPokemon, setPreviousPokemon, setAnswers, setQuestionCount,
    setCurrScore, setGameCategory, getRightPokemonData, getPokemonTypes,
    createAnswerList, checkAnswer
  } = useGame();

  const [timeLeft, setTimeLeft] = useState(10);

  useEffect(() => {
    if (questionCount > 10 || gameCategory === 0) return;

    setTimeLeft(10);

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev === 1) {
          clearInterval(timer);
          setQuestionCount(questionCount + 1);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [questionCount, gameCategory]);

  const resetGame = () => {
    setCurrPokemon(null);
    setPreviousPokemon([]);
    setAnswers([]);
    setCurrScore(0);
    setGameCategory(0);
    setQuestionCount(1);
  };

  useEffect(() => {
    if (gameCategory < 1) return;
    getRightPokemonData();
  }, [questionCount]);

  useEffect(() => {
    if (gameCategory !== 1) return;
    getPokemonTypes();
  }, []);

  useEffect(() => {
    if (currPokemon) createAnswerList();
  }, [currPokemon, types]);

  if (!currPokemon || gameCategory < 1) return <p>Loading...</p>;

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
