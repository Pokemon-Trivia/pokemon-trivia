import { sendScore } from "../api/score";
import PlayOrHome from "./PlayOrHome"
import { useAuth } from '../auth/AuthContext'; 
import { useState } from "react";

const GameResults = ({currScore, resetGame}) => {
   const [isNewHighScore, setIsNewHighScore] = useState(false);
   const { token } = useAuth();

   const trySendHighScore = async (scoreInfo) => {
      await sendScore(scoreInfo);
   }

   try {
      trySendHighScore({token, newScore: currScore})
   } catch (error) {
      console.log(error)
   }

   return (
      <>
         <QuizComplete />
         <GameScore currScore={currScore} />
         <PlayOrHome resetGame={resetGame} isNewHighScore={isNewHighScore} />
      </>
   )
}

const QuizComplete = () => <p id="quiz-complete">Quiz Complete</p>

const GameScore = ({currScore, isNewHighScore}) => {
   return (
      <>
         <p id="game-score">You got <span>{currScore}</span> / 10 Correct!</p>
         {isNewHighScore 
            ? <p id="new-high-score">Congratulations! New High Score: {currScore}</p>
            : <article></article>}
      </>
   )
}

export default GameResults;