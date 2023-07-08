import { useState, useEffect } from "react";

export default function useFetch(url, headers, method) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState(null);

  useEffect(() => {
    async function requestFetch() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(url, {
          method: method | "GET",
          headers: headers,
        });

        const data = await response.json();

        setResult(data);
      } catch (err) {
        console.log(err);
        setError("Failed to fetched!");
      } finally {
        setLoading(false);
      }
    }

    requestFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    loading,
    error,
    result,
  };
}
