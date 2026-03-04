import { useNavigate } from "react-router";

const PlayOrHome = ({resetGame}) => {
   const navigate = useNavigate()
   return (
      <section id="play-or-home">
         <button id="play-again" onClick={() => resetGame()}>Play Again</button>
         <button id="return-home" onClick={() => navigate('/home')}>Home</button>
      </section>
   )
}

export default PlayOrHome;