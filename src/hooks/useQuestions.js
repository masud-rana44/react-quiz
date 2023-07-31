import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function useQuestions(videoId) {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchQuestions() {
      // database connection
      const db = getDatabase();
      const questionRef = ref(db, "quiz/" + videoId + "/questions");
      const questionQuery = query(questionRef, orderByKey());

      try {
        setLoading(true);
        setError("");

        const snapshot = await get(questionQuery);

        if (snapshot.exists()) {
          setQuestions([...Object.values(snapshot.val())]);
        }
      } catch (err) {
        console.log(err);
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    fetchQuestions();
  }, [videoId]);

  return {
    loading,
    error,
    questions,
  };
}
