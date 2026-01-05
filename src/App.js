import { useEffect, useState } from "react";
import { startAssessment, submitAnswer } from "./api";
import QuestionCard from "./components/QuestionCard";
import ResultCard from "./components/ResultCard";

export default function App() {
  const [current, setCurrent] = useState(null);
  const [result, setResult] = useState(null);

  useEffect(() => {
    startAssessment().then(setCurrent);
  }, []);

  async function handleAnswer(answer) {
    const response = await submitAnswer(current.question_id, answer);

    if (response.assessment_complete) {
      setResult(response);
      setCurrent(null);
    } else {
      setCurrent(response);
    }
  }

  return (
    <div style={styles.container}>
      <h1>EU AI Act Risk Categorization</h1>

      {current && <QuestionCard question={current} onAnswer={handleAnswer} />}
      {result && <ResultCard result={result} />}
    </div>
  );
}
const styles = {
  container: {
    maxWidth: "720px",
    margin: "40px auto",
    fontFamily: "Arial, sans-serif"
  }
};
