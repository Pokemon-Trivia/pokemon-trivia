import { useNavigate } from "react-router";
import { useAuth } from "../auth/AuthContext";
import { useEffect, useState } from "react";
import { FaPlay, FaTrophy, FaUserFriends } from "react-icons/fa";

export default function Home() {
  const [profile, setProfile] = useState(null);
  const { token } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  useEffect(() => {
    const storedProfile = localStorage.getItem("trainerProfile");
    if (storedProfile) {
      setProfile(JSON.parse(storedProfile));
    }
  }, []);

  return (
    <div className="homePage">
      <section className="welcomeSection">
        <h2>Welcome, {profile?.name || "Trainer"}!</h2>
        <p>Ready to test your Pokémon knowledge?</p>
        <div className="homeCard">
          <div
            className="buttonCard startCardBtn"
            onClick={() => navigate("/question")}
          >
            <div id="playIcon">
              <FaPlay />
            </div>
            <h3 id="startGameBtn">Start Game</h3>
            <p>Begin a new trivia challenge</p>
          </div>
          <div
            className="buttonCard leaderboardCardBtn"
            onClick={() => navigate("/leaderboard")}
          >
            <div id="trophyIcon">
              <FaTrophy />
            </div>
            <h3 id="leaderboardBtn">Leaderboard</h3>
            <p>View top trainers</p>
          </div>
          <div
            className="buttonCard friendsCardBtn"
            onClick={() => navigate("/friends")}
          >
            <div id="friendsIcon">
              <FaUserFriends />
            </div>
            <h3 id="friendBtn">Friends</h3>
            <p>Manage your friend list</p>
          </div>
        </div>
      </section>
    </div>
  );
}
