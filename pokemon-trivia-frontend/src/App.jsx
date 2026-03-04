import "./index.css";
import Register from "./auth/Register.jsx";
import Login from "./auth/Login.jsx";
import Home from "./home/Home.jsx";

import { Routes, Route } from "react-router";
import QuestionBoard from "./question-answer/QuestionBoard.jsx";

function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/question" element={<QuestionBoard />} />
      <Route path="/leaderboard" element={<h1>Leaderboard</h1>} />
      <Route path="/friends" element={<h1>Friends</h1>} />
    </Routes>
  );
}

export default App;
