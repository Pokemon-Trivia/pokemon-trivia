import { useEffect, useState } from "react";
import PokeImage from "./PokeImage";
import Question from "./Question";
import AnswerList from "./AnswerList";
import { getPokemon, getTypes } from "../api/questions";
import QuestionScore from "./QuestionScore";
import GameResults from "./GameResults";

const QuestionBoard = () => {
  const [currPokemon, setCurrPokemon] = useState(null);
  const [previousPokemon, setPreviousPokemon] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [types, setTypes] = useState([]);
  const [currScore, setCurrScore] = useState(0);
  const [questionCount, setQuestionCount] = useState(1);
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

  const randomId = () => {
    const newId = Math.floor(Math.random() * 1025) + 1;
    if (previousPokemon.includes(newId)) {
      return randomId();
    } else {
      return newId;
    }
  };

  const randomTypeIndex = (array, rightAnswer) => {
    const newTypeIndex = Math.floor(Math.random() * 18);
    if (
      array.includes(types[newTypeIndex]) ||
      types[newTypeIndex] === rightAnswer
    ) {
      return randomTypeIndex(array, rightAnswer);
    } else {
      return types[newTypeIndex];
    }
  };

  const getPokemonTypes = async () => {
    setTypes(await getTypes());
  };

  const answerShuffle = (answerArray) => {
    for (let i = answerArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [answerArray[i], answerArray[j]] = [answerArray[j], answerArray[i]];
    }
    return answerArray;
  };

  const createAnswerList = () => {
    const rightAnswer = currPokemon.type;
    const wrongAnswers = [];
    while (wrongAnswers.length < 3) {
      const newType = randomTypeIndex(wrongAnswers, rightAnswer);
      wrongAnswers.push(newType);
    }
    const answerList = [rightAnswer, ...wrongAnswers];
    const randomAnswerList = answerShuffle(answerList);
    setAnswers(randomAnswerList);
  };

  const checkAnswer = (selectedType) => {
    if (selectedType === currPokemon.type) {
      setCurrScore(currScore + 1);
    }
    setPreviousPokemon([...previousPokemon, currPokemon.id]);
    setQuestionCount((count) => count + 1);
  };

  const resetGame = () => {
    setCurrPokemon(null);
    setPreviousPokemon([]);
    setAnswers([]);
    setCurrScore(0);
    setQuestionCount(1);
  };

  useEffect(() => {
    getPokemonData();
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
