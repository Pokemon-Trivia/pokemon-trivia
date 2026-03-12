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

import UserName from "./UserName";
import AvatarSection from "./AvatarSection";
import Stats from "./Stats";

export default function Account() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [savedName, setSavedName] = useState(null);
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [savedAvatar, setSavedAvatar] = useState(null);
  const [isEditingName, setIsEditingName] = useState(false);

  const [gamesPlayed, setGamesPlayed] = useState(0);
  const [accuracy, setAccuracy] = useState(0);
  const [highScore, setHighScore] = useState(0);

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

      setGamesPlayed(parsed.gamesPlayed || 0);
      setAccuracy(parsed.accuracy || 0);
      setHighScore(parsed.highScore || 0);
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

        <UserName
          savedName={savedName}
          name={name}
          setName={setName}
          isEditingName={isEditingName}
          setIsEditingName={setIsEditingName}
        />

        <AvatarSection
          avatars={avatars}
          selectedAvatar={selectedAvatar}
          savedAvatar={savedAvatar}
          setSelectedAvatar={setSelectedAvatar}
        />

        {savedName && (
          <Stats
            gamesPlayed={gamesPlayed}
            highScore={highScore}
            accuracy={accuracy}
          />
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
