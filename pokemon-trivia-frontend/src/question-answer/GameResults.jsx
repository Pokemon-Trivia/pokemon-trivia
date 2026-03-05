import PlayOrHome from "./PlayOrHome"

const GameResults = ({currScore, resetGame}) => {
   return (
      <>
         <QuizComplete />
         <GameScore currScore={currScore} />
         <PlayOrHome resetGame={resetGame} />
      </>
   )
}

const QuizComplete = () => <p id="quiz-complete">Quiz Complete</p>

const GameScore = ({currScore}) => <p id="game-score">You got {currScore} / 10 Correct!</p>

export default GameResults;