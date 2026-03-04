import { useNavigate } from "react-router";
import { useAuth } from "../auth/AuthContext";
import { useEffect } from "react";
import pokeball from "../assets/pokeball.png";

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
      <div className="homeHeader">
        <img src={pokeball} alt="pokeball logo" id="pokeLogo" />
        <h1>Welcome to Pokémon Trivia</h1>
      </div>
    </div>
  );
}
