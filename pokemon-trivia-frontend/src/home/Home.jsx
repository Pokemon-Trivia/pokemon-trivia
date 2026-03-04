import { useNavigate } from "react-router";
import { useAuth } from "../auth/AuthContext";
import { useEffect } from "react";
import { FaPlay, FaTrophy, FaUserFriends } from "react-icons/fa";

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
            <div id="playIcon">
              <FaPlay />
            </div>
            <button id="startGameBtn" onClick={() => navigate("/question")}>
              Start Game
            </button>
            <p>Begin a new trivia challenge</p>
          </div>
          <div className="buttonCard">
            <div id="trophyIcon">
              <FaTrophy />
            </div>
            <button
              id="leaderboardBtn"
              onClick={() => navigate("/leaderboard")}
            >
              Leaderboard
            </button>
            <p>View top trainers</p>
          </div>
          <div className="buttonCard">
            <div id="friendsIcon">
              <FaUserFriends />
            </div>
            <button id="friendBtn" onClick={() => navigate("/friends")}>
              Friends
            </button>
            <p>Manage your friend list</p>
          </div>
        </div>
      </main>
    </div>
  );
}
