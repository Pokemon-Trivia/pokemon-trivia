import { sendScore } from "../api/score";
import PlayOrHome from "./PlayOrHome";
import { useAuth } from "../auth/AuthContext";
import { useEffect, useState } from "react";
import Ash from "../assets/Ash.png";

const GameResults = ({ currScore, resetGame }) => {
  const [isNewHighScore, setIsNewHighScore] = useState(false);
  const { token } = useAuth();

  const trySendHighScore = async (scoreInfo) => {
    const isHighScore = await sendScore(scoreInfo);
    setIsNewHighScore(isHighScore);
  };

  useEffect(() => {
    const trySendScore = async () => {
      try {
        await trySendHighScore({ token, newScore: currScore });
      } catch (error) {
        console.log(error);
      }
    };

    trySendScore();

    const currentUser = localStorage.getItem("username");
    if (!currentUser) return;

    const storedProfile = localStorage.getItem(`trainerProfile_${currentUser}`);
    const profile = storedProfile ? JSON.parse(storedProfile) : {};

    const totalCorrect = (profile.totalCorrect || 0) + currScore;
    const totalQuestions = (profile.totalQuestions || 0) + 10;

    const accuracy = Math.round((totalCorrect / totalQuestions) * 100);

    const updatedProfile = {
      ...profile,
      gamesPlayed: (profile.gamesPlayed || 0) + 1,
      totalCorrect,
      totalQuestions,
      accuracy,
      highScore: Math.max(profile.highScore || 0, currScore),
    };

    localStorage.setItem(
      `trainerProfile_${currentUser}`,
      JSON.stringify(updatedProfile),
    );
  }, []);

  return (
    <>
      <QuizComplete />
      <GameScore currScore={currScore} isNewHighScore={isNewHighScore} />
      <PlayOrHome resetGame={resetGame} />
    </>
  );
};

const QuizComplete = () => <p id="quiz-complete">Quiz Complete</p>;

const GameScore = ({ currScore, isNewHighScore }) => {
  return (
    <>
      <p id="game-score">
        You got <span>{currScore}</span> / 10 Correct!
      </p>
      {isNewHighScore ? (
        <>
          <p id="new-high-score">
            Congratulations! New High Score: {currScore}
          </p>
          <img
            src={Ash}
            alt="Ash Ketchum holding a pokeball out to the front of him"
          />
        </>
      ) : (
        <article></article>
      )}
    </>
  );
};

export default GameResults;
