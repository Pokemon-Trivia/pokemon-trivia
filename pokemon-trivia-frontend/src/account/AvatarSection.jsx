export default function AvatarSection({
  avatars,
  selectedAvatar,
  savedAvatar,
  setSelectedAvatar,
}) {
  return (
    <>
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
    </>
  );
}
