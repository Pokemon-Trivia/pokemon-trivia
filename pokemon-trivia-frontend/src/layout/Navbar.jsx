import { NavLink, useLocation } from "react-router";
import pokeLogo from "../assets/pokeball_header.gif";
import pokemenTrivia from "../assets/pokemon_trivia.png";
import { useAuth } from "../auth/AuthContext";
import { FaHome } from "react-icons/fa";

export default function Navbar() {
  const { token, logout } = useAuth();
  const location = useLocation();

  const isHomePage = location.pathname === "/home";

  return (
    <header className="navbar">
      <NavLink to="/home" className="navbar-header">
        <img id="headerLogo" src={pokeLogo} alt="Pokemon logo" />
      </NavLink>
      <NavLink to="/home">
        <img
          className="navbar-title"
          src={pokemenTrivia}
          alt="Pokemon Trivia header"
        />
      </NavLink>
      <nav>
        {token && (
          <>
            <NavLink to="/login" id="logoutBtn" onClick={logout}>
              Logout
            </NavLink>
          </>
        )}
      </nav>
    </header>
  );
}
