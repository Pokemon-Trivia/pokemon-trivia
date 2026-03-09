import "./index.css";
import Register from "./auth/Register.jsx";
import Login from "./auth/Login.jsx";
import Home from "./home/Home.jsx";
import Account from "./account/Account.jsx";
import Layout from "./layout/Layout.jsx";

import { Routes, Route } from "react-router";
import QuestionBoard from "./question-answer/QuestionBoard.jsx";
import Friends from "./friends/Friends.jsx";

function App() {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/question" element={<QuestionBoard />} />
      <Route path="/account" element={<Account />} />
      <Route element={<Layout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/leaderboard" element={<h1>Leaderboard</h1>} />
        <Route path="/friends" element={<Friends />} />
      </Route>
    </Routes>
  );
}

export default App;
