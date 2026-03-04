const GameResults = ({currScore}) => {
   return (
      <section className="game-board">
         <QuizComplete />
         <GameScore currScore={currScore} />
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