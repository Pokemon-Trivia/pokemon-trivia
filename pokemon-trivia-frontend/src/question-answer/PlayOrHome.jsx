import { useNavigate } from "react-router";

const PlayOrHome = ({resetGame}) => {
   const navigate = useNavigate()
   return (
      <section id="play-or-home">
         <p onClick={() => resetGame()}>Play Again</p>
         <p onClick={navigate('/home')}>Home</p>
      </section>
   )
}

export default PlayOrHome;