import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Assessment from "./page/Assessment";
import Glossary from "./page/Glossary";

export default function App() {
  return (
    <Router>
      <div style={styles.container}>
        <header style={styles.header}>
          <h1>EU AI Act Risk Categorization</h1>
          <nav style={styles.nav}>
            <Link to="/" style={styles.link}>Assessment</Link>
            <Link to="/glossary" style={styles.link}>Glossary</Link>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Assessment />} />
          <Route path="/glossary" element={<Glossary />} />
        </Routes>
      </div>
    </Router>
  );
}

const styles = {
  container: {
    maxWidth: "900px",
    margin: "40px auto",
    fontFamily: "Arial, sans-serif"
  },
  header: {
    marginBottom: "30px"
  },
  nav: {
    display: "flex",
    gap: "16px",
    marginTop: "10px"
  },
  link: {
    textDecoration: "none",
    color: "#2563eb",
    fontWeight: "bold"
  }
};
