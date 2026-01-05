export default function ResultCard({ result }) {
  return (
    <div style={styles.card}>
      <h2>Assessment Result</h2>

      <p><strong>Risk Category:</strong> {result.risk_category}</p>
      <p><strong>Legal Characterisation:</strong> {result.legal_characterisation}</p>
      <p><strong>Legal Basis:</strong> {result.legal_basis.join(", ")}</p>

      <h4>Applicable Obligations</h4>
      <ul>
        {result.applicable_obligations.map((o, i) => (
          <li key={i}>{o}</li>
        ))}
      </ul>

      <h4>Required Controls</h4>
      <ul>
        {result.required_controls.map((c, i) => (
          <li key={i}>{c}</li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  card: {
    padding: "24px",
    borderRadius: "10px",
    background: "#ecfeff",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
  }
};
