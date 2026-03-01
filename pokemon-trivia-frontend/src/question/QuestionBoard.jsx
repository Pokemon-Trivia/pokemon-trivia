import { Query } from "pg"

const QuestionBoard = () => {
   return (
      <section>
         <h1>Loading...</h1>
         <PokeImage />
         <Question />
         <AnswerList />
      </section>
   )
}

export default QuestionBoard;