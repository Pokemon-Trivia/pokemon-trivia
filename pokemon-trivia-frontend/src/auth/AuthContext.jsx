import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const register = async (credentials) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/users/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });

    const result = await response.json();
    if (!response.ok) {
      throw Error(result.message);
    }

    setToken(result.token);
    localStorage.setItem("token", result.token);
    localStorage.setItem("username", credentials.username);
    return result;
  };

  const login = async (credentials) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/users/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });

    const result = await response.json();
    if (!response.ok) {
      throw Error(result.message);
    }

    setToken(result.token);
    localStorage.setItem("token", result.token);
    localStorage.setItem("username", credentials.username);
    return result;
  };

  const logout = () => {
    localStorage.removeItem("trainerProfile");
    setToken(null);
    localStorage.removeItem("token");
  };

  const value = { token, register, logout, login };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw Error("useAuth must be used within AuthProvider.");
  return context;
}
