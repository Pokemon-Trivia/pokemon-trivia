const QuestionScore = ({ questionCount, currScore, timeLeft }) => {
  return (
    <section id="question-score">
      <Timer timeLeft={timeLeft} />
      <QuestionCount questionCount={questionCount} />
      <Score currScore={currScore} />
    </section>
  );
};

const Timer = ({ timeLeft }) => <p className="timer">{timeLeft} sec</p>;

const QuestionCount = ({ questionCount }) => (
  <p>Question {questionCount} out of 10</p>
);

const Score = ({ currScore }) => <p>Score: {currScore}</p>;

export default QuestionScore;
