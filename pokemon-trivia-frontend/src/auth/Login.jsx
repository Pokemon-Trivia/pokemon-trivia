import { useState } from "react";
import { useAuth } from "./AuthContext";
import { Link, useNavigate } from "react-router";
import pokeball from "../assets/pokeball.png";

export default function Login() {
  const { login } = useAuth();
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const tryLogin = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const username = formData.get("username");
    const password = formData.get("password");

    try {
      await login({ username, password });
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="loginPage">
      <div className="loginCard">
        <img src={pokeball} alt="pokeball logo" id="pokeLogo" />
        <h1 id="login-header">POKÉMON TRIVIA</h1>
        <p>Become a Pokémon Master!</p>
        <form onSubmit={tryLogin}>
          <label>
            Username
            <input
              type="text"
              name="username"
              placeholder="Enter your username"
              required
            ></input>
          </label>
          <label>
            Password
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              required
            ></input>
          </label>
          <button id="loginBtn" type="submit">
            Login
          </button>
        </form>
        {error ? (
          <p id="error-msg">{error}</p>
        ) : (
          <p>
            Need an account? <Link to="/register"> Register here</Link>
          </p>
        )}
      </div>
    </div>
  );
}
