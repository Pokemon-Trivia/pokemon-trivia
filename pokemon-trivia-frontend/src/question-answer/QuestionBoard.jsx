import { Query } from "pg"
import PokeImage from "./PokeImage";
import Question from "./Question";
import AnswerList from "./AnswerList";

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