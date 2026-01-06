import { useEffect, useState } from "react";

const API_BASE = "https://risk-categorization-eu-ai.onrender.com";

export default function Glossary() {
  const [terms, setTerms] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(`${API_BASE}/glossary`)
      .then(res => res.json())
      .then(data => {
        const list = Object.values(data.terms || {});
        // sort alphabetically
        list.sort((a, b) => a.term.localeCompare(b.term));
        setTerms(list);
      });
  }, []);

  const filtered = terms.filter(t =>
    t.term.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>EU AI Act Glossary</h2>
      <p style={styles.subtitle}>
        Authoritative definitions based on the EU Artificial Intelligence Act
      </p>

      <input
        style={styles.search}
        placeholder="Search glossary terms…"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filtered.map((item, idx) => (
        <div key={idx} style={styles.card}>
          <div style={styles.header}>
            <h3>{item.term}</h3>
            <span style={styles.article}>{item.article}</span>
          </div>
          <p>{item.definition}</p>
        </div>
      ))}
    </div>
  );
}

const styles = {
  subtitle: {
    color: "#475569",
    marginBottom: "16px"
  },
  search: {
    width: "100%",
    padding: "10px",
    marginBottom: "20px",
    fontSize: "14px",
    borderRadius: "6px",
    border: "1px solid #ccc"
  },
  card: {
    background: "#f8fafc",
    padding: "16px",
    borderRadius: "10px",
    marginBottom: "14px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.08)"
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  article: {
    fontSize: "12px",
    fontWeight: "bold",
    color: "#2563eb"
  }
};
