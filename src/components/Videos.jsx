import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useVideoList from "../hooks/useVideoList";
import Video from "./Video";

const Videos = () => {
  const [page, setPage] = useState(1);
  const { loading, error, videos, hasMore } = useVideoList(page);

  const updatePage = () => {
    setTimeout(() => {
      setPage((page) => page + 8);
    }, 500);
  };

  return (
    <div>
      {!loading && !error && videos.length > 0 && (
        <InfiniteScroll
          dataLength={videos.length}
          next={updatePage}
          hasMore={hasMore}
          loader={<h4 style={{ gridColumn: "1 / -1" }}>Loading...</h4>}
        >
          {videos.map((video) => (
            <Video key={video.youtubeID} {...video} />
          ))}
        </InfiniteScroll>
      )}
      {!loading && !error && videos.length == 0 && (
        <div className="msg">No data found!</div>
      )}
      {error && <div className="msg">{error}</div>}
      {loading && <div className="msg">Loading...</div>}
    </div>
  );
};

export default Videos;
