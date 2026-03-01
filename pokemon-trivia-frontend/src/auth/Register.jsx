export default function Register() {
  return (
    <>
      <h1>Pokemon Trivia</h1>
      <form>
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
      <p>Already have an account?</p>
    </>
  );
}
