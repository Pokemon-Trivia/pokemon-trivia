import { useState } from "react";
import { useAuth } from "./AuthContext";
import { Link } from "react-router";
import pokeball from "../assets/pokeball.png";

export default function Login() {
  const { register } = useAuth();
  const [error, setError] = useState(null);

  return (
    <div className="loginPage">
      <div className="loginCard">
        <img src={pokeball} alt="pokeball logo" id="pokeLogo" />
        <h1 id="login-header">POKÉMON TRIVIA</h1>
        <p>Become a Pokémon Master!</p>
        <form onSubmit>
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
            Need an account?
            <Link to="/register">Register here.</Link>
          </p>
        )}
      </div>
    </div>
  );
}
