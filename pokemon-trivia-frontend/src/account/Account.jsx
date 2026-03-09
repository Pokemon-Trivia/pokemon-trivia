import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

export default function Account() {
  const navigate = useNavigate();

  const avatars = [
    "trainer1.png",
    "trainer2.png",
    "trainer3.png",
    "trainer4.png",
    "trainer5.png",
    "trainer6.png",
  ];

  const [username, setUsername] = useState("");
  const [selectedAvatar, setSelectedAvatar] = useState(null);

  useEffect(() => {
    const storedProfile = localStorage.getItem("trainerProfile");

    if (storedProfile) {
      const parsed = JSON.parse(storedProfile);
      setUsername(parsed.username || "");
      setSelectedAvatar(parsed.avatar || null);
    }
  }, []);

  const handleSave = () => {
    const profile = {
      username,
      avatar: selectedAvatar,
    };

    localStorage.setItem("trainerProfile", JSON.stringify(profile));
    navigate("/home");
  };

  const handleCancel = () => {
    navigate("/home");
  };

  return (
    <div className="accountPage">
      <h2>User Account</h2>

      <section>
        <label>Trainer Name</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your name"
        />
      </section>

      <section>
        <h3>Select Avatar</h3>

        <div className="avatarGrid">
          {avatars.map((avatar) => (
            <img
              key={avatar}
              src={`/avatars/${avatar}`}
              alt="trainer avatar"
              className={
                selectedAvatar === avatar ? "avatar selected" : "avatar"
              }
              onClick={() => setSelectedAvatar(avatar)}
            />
          ))}
        </div>
      </section>

      <section>
        <h3>Your Stats</h3>
        <p>Games Played: 0</p>
        <p>High Score: 0</p>
        <p>Accuracy: 0%</p>
      </section>

      <section className="accountButtons">
        <button onClick={handleSave}>Save</button>
        <button onClick={handleCancel}>Cancel</button>
      </section>
    </div>
  );
}
