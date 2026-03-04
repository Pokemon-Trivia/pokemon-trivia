import "./index.css";
import Register from "./auth/Register.jsx";
import Login from "./auth/Login.jsx";

import { Routes, Route } from "react-router";
import QuestionBoard from "./question-answer/QuestionBoard.jsx";

function App() {
  return (
    <Routes>
      <Route path="/home" element={<h1>Home Page</h1>} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/question" element={<QuestionBoard />} />
    </Routes>
  );
}

export default App;
