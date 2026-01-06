export default function ResultCard({ result }) {
  


  // Human review case
  if (result.type === "HUMAN_REVIEW") {
    return (
      <div style={styles.card}>
        <h2>Human Review Required</h2>
        <p>{result.reason}</p>
      </div>
    );
  }

  return (
    <div style={styles.card}>
      <h2>Assessment Result</h2>

      <p><strong>Risk Category:</strong> {result.risk_category}</p>
      <p><strong>Legal Basis:</strong> {result.legal_basis?.join(", ")}</p>

      {/* Applicable Obligations */}
      {Array.isArray(result.applicable_obligations) && (
        <>
          <h4>Applicable Obligations</h4>
          <ul>
            {result.applicable_obligations.map((o, i) => (
              <li key={i}>{o}</li>
            ))}
          </ul>
        </>
      )}

      {/* Required Controls */}
      {Array.isArray(result.required_controls) && (
        <>
          <h4>Required Controls</h4>
          <ul>
            {result.required_controls.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        </>
      )}

      {/* Additional Requirements (High Risk) */}
      {Array.isArray(result.additional_requirements) && (
        <>
          <h4>Additional Regulatory Requirements</h4>
          <ul>
            {result.additional_requirements.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </>
      )}
    
      
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
