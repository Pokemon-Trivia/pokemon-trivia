import { useNavigate } from "react-router";
import { useAuth } from "../auth/AuthContext";
import { useEffect } from "react";

export default function Home() {
  const { token } = useAuth();
  const navigate = useNavigate();
  // useEffect(() => {
  //   if (!token) {
  //     navigate("/login");
  //   }
  // }, [token, navigate]);

  return (
    <div className="homePage">
      <main className="welcomeSection">
        <h2>Welcome, Trainer!</h2>
        <p>Ready to test your Pokémon knowledge?</p>
        <div className="homeCard">
          <div className="buttonCard">
            <button id="startGameBtn">Start Game</button>
            <p>Begin a new trivia challenge</p>
          </div>
          <div className="buttonCard">
            <button id="leaderboardBtn">Leaderboard</button>
            <p>View top trainers</p>
          </div>
          <div className="buttonCard">
            <button id="friendBtn">Friends</button>
            <p>Manage your friend list</p>
          </div>
        </div>
      </main>
    </div>
  );
}
