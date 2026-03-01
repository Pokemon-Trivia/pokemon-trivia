const AnswerList = ({answerList}) => {
   return (
      <ul>
         {answerList.map((answer) => {
            <AnswerListItem key={answer} answer={answer} />
         })}
      </ul>
   )
}

const AnswerListItem = ({answer}) => {
   <li>{answer}</li>
}

export default AnswerList;