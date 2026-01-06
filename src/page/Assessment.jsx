import { useEffect, useState } from "react";
import { startAssessment, submitAnswer } from "../api";
import QuestionCard from "../components/QuestionCard";
import ResultCard from "../components/ResultCard";

export default function Assessment() {
  const [current, setCurrent] = useState(null);
  const [result, setResult] = useState(null);

  useEffect(() => {
    startAssessment().then(setCurrent);
  }, []);

  async function handleAnswer(answer) {
    const response = await submitAnswer(current.question_id, answer);

    if (response.status === "REQUIRES_HUMAN_REVIEW") {
      setResult({ type: "HUMAN_REVIEW", reason: response.reason });
      setCurrent(null);
      return;
    }

    if (response.assessment_complete) {
      setResult(response.final_assessment);
      setCurrent(null);
    } else {
      setCurrent(response);
    }
  }

  return (
    <>
      {current && <QuestionCard question={current} onAnswer={handleAnswer} />}
      {result && <ResultCard result={result} />}
    </>
  );
}
