export default function StatsSection({ gamesPlayed, highScore, accuracy }) {
  return (
    <section className="statsSection">
      <h3>Your Stats</h3>

      <p>
        <span className="statIcon">🎮</span>Games Played: {gamesPlayed}
      </p>

      <p>
        <span className="statIcon">🏆</span>High Score: {highScore}
      </p>

      <p>
        <span className="statIcon">🎯</span>Accuracy: {accuracy}%
      </p>
    </section>
  );
}
