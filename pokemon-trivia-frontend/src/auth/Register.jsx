import { useState } from "react";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router";

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
    <>
      <h1 id="register-header">Pokémon Trivia</h1>
      <p>Create your Pokémon account</p>
      <form onSubmit={tryRegister}>
        <label>
          Username
          <input type="text" name="username" required></input>
        </label>
        <label>
          Password
          <input type="password" name="password" required></input>
        </label>
        <label>
          Confirm password
          <input type="password" name="confirmPassword" required></input>
        </label>
        <button type="submit">Register</button>
      </form>
      {error ? (
        <p id="error-msg">{error}</p>
      ) : (
        <p>Already have an account? Log in</p>
      )}
    </>
  );
}
