const API_BASE = "http://127.0.0.1:5000";

export async function startAssessment() {
  const res = await fetch(`${API_BASE}/start`, { method: "POST" });
  return res.json();
}

export async function submitAnswer(questionId, answer) {
  const res = await fetch(`${API_BASE}/answer`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      question_id: questionId,
      answer
    })
  });
  return res.json();
}
