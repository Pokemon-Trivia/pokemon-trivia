import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import trainer1 from "../assets/avatars/avatar1.png";
import trainer2 from "../assets/avatars/avatar2.png";
import trainer3 from "../assets/avatars/avatar3.png";
import trainer4 from "../assets/avatars/avatar4.png";
import trainer5 from "../assets/avatars/avatar5.png";
import trainer6 from "../assets/avatars/avatar6.png";

export default function Account() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [savedName, setSavedName] = useState(null);
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [savedAvatar, setSavedAvatar] = useState(null);
  const [isEditingName, setIsEditingName] = useState(false);

  const avatars = [trainer1, trainer2, trainer3, trainer4, trainer5, trainer6];

  useEffect(() => {
    const storedProfile = localStorage.getItem("trainerProfile");

    if (storedProfile) {
      const parsed = JSON.parse(storedProfile);

      setSavedName(parsed.name || null);
      setSelectedAvatar(parsed.avatar || null);
      setSavedAvatar(parsed.avatar || null);
    }
  }, []);

  const handleSave = () => {
    const profile = {
      name: name || savedName,
      avatar: selectedAvatar,
    };

    localStorage.setItem("trainerProfile", JSON.stringify(profile));

    setSavedName(profile.name);
    setSavedAvatar(profile.avatar);
    setIsEditingName(false);
  };

  return (
    <div className="accountPage">
      <div className="accountCard">
        <h2>User Account</h2>

        <section>
          {!savedName || isEditingName ? (
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
            <div className="currentNameRow">
              <h3>Name: {savedName}</h3>

              <button
                className="changeNameBtn"
                onClick={() => {
                  setIsEditingName(true);
                  setName(savedName);
                }}
              >
                Change Name
              </button>
            </div>
          )}
        </section>
        {savedAvatar && (
          <section className="selectedAvatarSection">
            <h3>Selected Avatar</h3>

            <div className="selectedAvatarBox">
              <img
                src={savedAvatar}
                alt="selected avatar"
                className="selectedAvatarImage"
              />
            </div>
          </section>
        )}

        <section>
          <h3>Select Avatar</h3>

          <div className="avatarGrid">
            {avatars.map((avatar, index) => (
              <img
                key={index}
                src={avatar}
                alt="trainer avatar"
                className={
                  selectedAvatar === avatar ? "avatar selected" : "avatar"
                }
                onClick={() => setSelectedAvatar(avatar)}
              />
            ))}
          </div>
        </section>

        {savedName && (
          <section>
            <h3>Your Stats</h3>

            <p>🎮 Games Played: 0</p>
            <p>🏆 High Score: 0</p>
            <p>🎯 Accuracy: 0%</p>
          </section>
        )}

        <section className="accountButtons">
          <button
            className="saveBtn"
            onClick={handleSave}
            disabled={!selectedAvatar && !name}
          >
            SAVE
          </button>
          <button className="cancelBtn" onClick={() => navigate("/home")}>
            CANCEL
          </button>
        </section>
      </div>
    </div>
  );
}
