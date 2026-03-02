import { useState } from "react";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router";
import pokeball from "../assets/pokeball.png";

export default function Register() {
  const { register } = useAuth();
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const tryRegister = async (e) => {
    e.preventDefault();
    setError(null);
    const formData = new FormData(e.target);
    const username = formData.get("username");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");

    if (password !== confirmPassword) {
      setError("Passwords do not match. Please try again.");
      return;
    }

    try {
      await register({ username, password });
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <div className="authPage">
      <div className="registerCard">
        <img src={pokeball} alt="pokeball logo" id="pokeLogo" />
        <h1 id="register-header">POKÉMON TRIVIA</h1>
        <p>Create your Pokémon account</p>
        <form onSubmit={tryRegister}>
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
          <label>
            Confirm password
            <input
              type="password"
              name="confirmPassword"
              placeholder="Enter confirmed password"
              required
            ></input>
          </label>
          <button id="registerBtn" type="submit">
            Register
          </button>
        </form>
        {error ? (
          <p id="error-msg">{error}</p>
        ) : (
          <p>Already have an account? Log in</p>
        )}
      </div>
    </div>
  );
}
