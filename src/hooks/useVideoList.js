import {
  get,
  getDatabase,
  limitToFirst,
  orderByKey,
  query,
  ref,
  startAt,
} from "firebase/database";
import { useEffect, useState } from "react";

export default function useVideoList(page) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [videos, setVideos] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    async function fetchVideos() {
      // getting videos
      const db = getDatabase();
      const videosRef = ref(db, "videos");
      const videoQuery = query(
        videosRef,
        orderByKey(),
        startAt(page + ""),
        limitToFirst(6)
      );

      try {
        setLoading(true);
        setError("");

        // request firebase database
        const snapshot = await get(videoQuery);

        if (snapshot.exists()) {
          setVideos((preVideos) => {
            return [...preVideos, ...Object.values(snapshot.val())];
          });
        } else {
          setHasMore(false);
        }
      } catch (err) {
        console.log(err);
        setError("Failed to fetched!");
      } finally {
        setLoading(false);
      }
    }

    fetchVideos();
  }, [page]);

  return {
    hasMore,
    loading,
    error,
    videos,
  };
}
