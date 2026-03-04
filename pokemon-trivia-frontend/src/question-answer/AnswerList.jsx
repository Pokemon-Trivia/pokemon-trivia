const AnswerList = ({answerList, checkAnswer}) => {
   return (
      <ul>
         {answerList.map((answer) => (
            <AnswerListItem key={answer} checkAnswer={checkAnswer} answer={answer} />
         ))}
      </ul>
   );
}

const AnswerListItem = ({answer, checkAnswer}) => {
   return <li onClick={() => checkAnswer(answer)}>{answer}</li>
}

export default AnswerList;