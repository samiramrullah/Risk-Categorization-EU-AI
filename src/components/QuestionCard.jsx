export default function QuestionCard({ question, onAnswer }) {
  return (
    <div style={styles.card}>
      <h2>{question.question}</h2>

      {question.gpai_state && (
        <div style={styles.notice}>
          <strong>Additional GPAI obligations identified:</strong>
          <ul>
            {question.gpai_state.map((g, i) => (
              <li key={i}>{g}</li>
            ))}
          </ul>
        </div>
      )}

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
  card: { padding: "24px", borderRadius: "10px", background: "#f8fafc" },
  buttons: { display: "flex", gap: "12px", marginTop: "20px" },
  button: { padding: "10px 18px", cursor: "pointer" },
  notice: {
    background: "#fff7ed",
    padding: "12px",
    marginTop: "12px",
    borderRadius: "6px"
  }
};
