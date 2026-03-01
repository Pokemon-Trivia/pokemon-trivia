const AnswerList = ({answerList}) => {
   return (
      <ul>
         {answerList.map((answer) => {
            <AnswerListItem key={answer} answer={answer} />
         })}
      </ul>
   )
}

export default AnswerList;