import PlayOrHome from "./PlayOrHome"

const GameResults = ({currScore, resetGame}) => {
   return (
      <section className="game-board">
         <QuizComplete />
         <GameScore currScore={currScore} />
         <PlayOrHome resetGame={resetGame} />
      </section>
   )
}

const QuizComplete = () => {
   <h2>Quiz Complete</h2>
}

const GameScore = ({currScore}) => {
   <p>{currScore} / 10</p>
}

export default GameResults;