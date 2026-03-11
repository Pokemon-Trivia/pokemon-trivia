import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import trainer1 from "../assets/avatars/avatar1.png";
import trainer2 from "../assets/avatars/avatar2.png";
import trainer3 from "../assets/avatars/avatar3.png";
import trainer4 from "../assets/avatars/avatar4.png";
import trainer5 from "../assets/avatars/avatar5.png";
import trainer6 from "../assets/avatars/avatar6.png";
import trainer7 from "../assets/avatars/avatar7.png";
import trainer8 from "../assets/avatars/avatar8.png";

export default function Account() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [savedName, setSavedName] = useState(null);
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [savedAvatar, setSavedAvatar] = useState(null);
  const [isEditingName, setIsEditingName] = useState(false);

  const avatars = [
    trainer1,
    trainer2,
    trainer3,
    trainer4,
    trainer5,
    trainer6,
    trainer7,
    trainer8,
  ];

  const currentUser = localStorage.getItem("username") || "guest";

  useEffect(() => {
    const storedProfile = localStorage.getItem(`trainerProfile_${currentUser}`);

    if (storedProfile) {
      const parsed = JSON.parse(storedProfile);

      setSavedName(parsed.name || null);
      setName(parsed.name || "");
      setSelectedAvatar(parsed.avatar || null);
      setSavedAvatar(parsed.avatar || null);
    }
  }, [currentUser]);

  const handleSave = () => {
    const profile = {
      name: name || savedName,
      avatar: selectedAvatar || savedAvatar,
    };
    localStorage.setItem(
      `trainerProfile_${currentUser}`,
      JSON.stringify(profile),
    );
    setSavedName(profile.name);
    setSavedAvatar(profile.avatar);
    setSelectedAvatar(profile.avatar);
    setIsEditingName(false);
  };

  const handleCancel = () => {
    const storedProfile = localStorage.getItem(`trainerProfile_${currentUser}`);
    if (storedProfile) {
      const parsed = JSON.parse(storedProfile);
      setSavedName(parsed.name || null);
      setName(parsed.name || "");
      setSelectedAvatar(parsed.avatar || null);
      setSavedAvatar(parsed.avatar || null);
    }

    setIsEditingName(false);
  };

  return (
    <div className="accountPage">
      <div className="accountCard">
        <div className="accountHeader">
          <h2>User Account</h2>
        </div>

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
              <h3>
                Name: <span className="playerName">{savedName}</span>
              </h3>

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
                src={selectedAvatar || savedAvatar}
                alt="selected avatar"
                className="selectedAvatarImage"
              />
            </div>
          </section>
        )}

        <section>
          <h3>All Avatars</h3>

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
          <section className="statsSection">
            <h3>Your Stats</h3>
            <p>
              <span className="statIcon">🎮</span>Games Played: 0
            </p>
            <p>
              <span className="statIcon">🏆</span>High Score: 0
            </p>
            <p>
              <span className="statIcon">🎯</span>Accuracy: 0%
            </p>
          </section>
        )}

        <section className="accountButtons">
          <button
            className="saveBtn"
            onClick={handleSave}
            disabled={!selectedAvatar && !savedAvatar && !name}
          >
            SAVE
          </button>
          <button className="cancelBtn" onClick={handleCancel}>
            CANCEL
          </button>
          <button className="backBtn" onClick={() => navigate("/home")}>
            BACK
          </button>
        </section>
      </div>
    </div>
  );
}
