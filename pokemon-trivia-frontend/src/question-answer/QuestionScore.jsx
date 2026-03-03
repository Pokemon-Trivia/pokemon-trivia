const QuestionScore = ({questionCount, currScore}) => {
   return (
      <section>
         <QuestionCount questionCount={questionCount} />
         <Score currScore={currScore} />
      </section>
   )
}

const QuestionCount = ({questionCount}) => {
   return (
      <p>
         Question {questionCount} out of 10
      </p>
   )
}

const Score = ({currScore}) => {
   <p>
      Score: {currScore}
   </p>
}

export default QuestionScore;