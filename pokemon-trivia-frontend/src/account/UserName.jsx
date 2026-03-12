export default function UserName({
  savedName,
  name,
  setName,
  isEditingName,
  setIsEditingName,
}) {
  return (
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
  );
}
