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

const QuizComplete = () => <p>Quiz Complete</p>

const GameScore = ({currScore}) => <p>You got {currScore} / 10 Correct!</p>

export default GameResults;