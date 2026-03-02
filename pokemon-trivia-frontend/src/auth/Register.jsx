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

    try {
      await register({ username, password });
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <>
      <h1 id="register-header">Pokemon Trivia</h1>
      <form onSubmit={tryRegister}>
        <label>
          Username
          <input type="text" name="username" required></input>
        </label>
        <label>
          Password
          <input type="password" name="password" required></input>
        </label>
        <button type="submit">Register</button>
      </form>
      {error ? (
        <div>
          <p id="error-msg">{error}</p>
          <p>Please log in here.</p>
        </div>
      ) : (
        <p>Already have an account? Log in here.</p>
      )}
    </>
  );
}
