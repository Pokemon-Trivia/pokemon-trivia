import { Outlet } from "react-router";
import Navbar from "./Navbar";
import { useAuth } from "../auth/AuthContext";

export default function Layout() {
  const { token } = useAuth();
  return (
    <section id="root-children">
      {token && <Navbar />}
      <main className="pageContent">
        <Outlet />
      </main>
    </section>
  );
}
