import { NavLink, useLocation } from "react-router";
import pokeLogo from "../assets/pokeball.png";
import { useAuth } from "../auth/AuthContext";
import { FaHome } from "react-icons/fa";

export default function Navbar() {
  const { token, logout } = useAuth();
  const location = useLocation();

  const isHomePage = location.pathname === "/home";

  return (
    <section className="navbar">
      <header>
        <NavLink to="/home" className="navbar-header">
          <img id="logo" src={pokeLogo} alt="Pokemon logo" />
          <p>Pokemon Trivia</p>
        </NavLink>
      </header>
      <nav>
        {token && (
          <>
            {!isHomePage && (
              <NavLink to="/home" className="homeIcon">
                <FaHome />
              </NavLink>
            )}
            <NavLink to="/login" onClick={logout}>
              Logout
            </NavLink>
          </>
        )}
      </nav>
    </section>
  );
}
