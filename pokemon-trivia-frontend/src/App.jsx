import "./index.css";
import Register from "./auth/Register.jsx";

import { Routes, Route } from "react-router";

function App() {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
