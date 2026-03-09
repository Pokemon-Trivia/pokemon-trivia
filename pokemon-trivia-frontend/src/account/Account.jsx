import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

export default function Account() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [savedName, setSavedName] = useState(null);

  // Load saved name
  useEffect(() => {
    const storedProfile = localStorage.getItem("trainerProfile");

    if (storedProfile) {
      const parsed = JSON.parse(storedProfile);
      setSavedName(parsed.name);
    }
  }, []);

  const handleSave = () => {
    const profile = { name };

    localStorage.setItem("trainerProfile", JSON.stringify(profile));

    setSavedName(name);
  };

  return (
    <div className="accountPage">
      <h2>User Account</h2>

      <section>
        {!savedName ? (
          <>
            <label>Enter Your Name:</label>

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
            />
          </>
        ) : (
          <>
            <h3>Name: {savedName}</h3>
          </>
        )}
      </section>

      <section>
        <h3>Select Avatar</h3>

        <div className="avatarGrid">
          <div className="avatar">Avatar 1</div>
          <div className="avatar">Avatar 2</div>
          <div className="avatar">Avatar 3</div>
          <div className="avatar">Avatar 4</div>
          <div className="avatar">Avatar 5</div>
          <div className="avatar">Avatar 6</div>
        </div>
      </section>

      {savedName && (
        <section>
          <h3>Your Stats</h3>

          <p>Games Played: 0</p>
          <p>High Score: 0</p>
          <p>Accuracy: 0%</p>
        </section>
      )}

      <section>
        {!savedName && <button onClick={handleSave}>Save</button>}

        <button onClick={() => navigate("/home")}>Cancel</button>
      </section>
    </div>
  );
}
