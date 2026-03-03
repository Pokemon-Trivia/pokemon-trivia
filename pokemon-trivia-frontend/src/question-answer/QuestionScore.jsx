const QuestionScore = ({questionCount, currScore}) => {
   return (
      <section id="question-score">
         <QuestionCount questionCount={questionCount} />
         <Score currScore={currScore} />
      </section>
   )
}

const QuestionCount = ({questionCount}) => <p>Question {questionCount} out of 10</p>

const Score = ({currScore}) => <p>Score: {currScore}</p>


export default QuestionScore;