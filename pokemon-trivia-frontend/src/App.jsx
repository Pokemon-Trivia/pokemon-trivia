import "./index.css";
import Register from "./auth/Register.jsx";
import Login from "./auth/Login.jsx";
import Home from "./home/Home.jsx";
import Account from "./account/Account.jsx";
import Layout from "./layout/Layout.jsx";

import { Routes, Route, Outlet } from "react-router";
import QuestionBoard from "./question-answer/QuestionBoard.jsx";
import Friends from "./friends/Friends.jsx";
import Leaderboard from "./leaderboard/Leaderboard.jsx";
import GameProvider from "./game/GameContext.jsx";
import Categories from "./categories/Categories.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route element={<GameProvider><Outlet /></GameProvider>}>
        <Route path="/question" element={<QuestionBoard />} />
        <Route path="/category" element={<Categories />} />
        <Route path="/account" element={<Account />} />
        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/friends" element={<Friends />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
