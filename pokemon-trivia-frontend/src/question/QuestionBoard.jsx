import { Query } from "pg"
import PokeImage from "./PokeImage";

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