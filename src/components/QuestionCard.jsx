export default function QuestionCard({ question, onAnswer }) {
  return (
    <div style={styles.card}>
      <h2>{question.question}</h2>

      <div style={styles.buttons}>
        {question.allowed_answers.map((ans) => (
          <button
            key={ans}
            onClick={() => onAnswer(ans)}
            style={styles.button}
          >
            {ans.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  );
}

const styles = {
  card: {
    padding: "24px",
    borderRadius: "10px",
    background: "#f8fafc",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
  },
  buttons: {
    display: "flex",
    gap: "12px",
    marginTop: "20px"
  },
  button: {
    padding: "10px 18px",
    fontSize: "14px",
    cursor: "pointer"
  }
};
