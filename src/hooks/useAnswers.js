import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function useAnswers(videoId) {
  const [answers, setAnswers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchAnswers() {
      // database connection
      const db = getDatabase();
      const answerRef = ref(db, "answers/" + videoId + "/questions");
      const answerQuery = query(answerRef, orderByKey());

      try {
        setLoading(true);
        setError("");

        const snapshot = await get(answerQuery);

        if (snapshot.exists()) {
          setAnswers([...Object.values(snapshot.val())]);
        }
      } catch (err) {
        console.log(err);
        setError("There was some problem. Try again later!");
      } finally {
        setLoading(false);
      }
    }
    fetchAnswers();
  }, [videoId]);

  return {
    loading,
    error,
    answers,
  };
}
