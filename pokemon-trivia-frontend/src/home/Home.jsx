import { useNavigate } from "react-router";
import { useAuth } from "../auth/AuthContext";
import { useEffect } from "react";

export default function Home() {
  const { token } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  return <h1>Welcome to Pokémon Trivia</h1>;
}
