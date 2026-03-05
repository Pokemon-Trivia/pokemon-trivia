import { FaHouseUser, FaRotateRight } from "react-icons/fa6";
import { useNavigate } from "react-router";

const PlayOrHome = ({resetGame}) => {
   const navigate = useNavigate()
   return (
      <section id="play-or-home">
         <button id="play-again" className="quiz-btn" onClick={() => resetGame()}><FaRotateRight className="quiz-icon" />Play Again</button>
         <button id="return-home" className="quiz-btn" onClick={() => navigate('/home')}><FaHouseUser className="quiz-icon" />Home</button>
      </section>
   )
}

export default PlayOrHome;