import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useVideoList from "../hooks/useVideoList";
import Video from "./Video";

const Videos = () => {
  const [page, setPage] = useState(1);
  const { loading, error, videos, hasMore } = useVideoList(page);

  const updatePage = () => {
    // setTimeout(() => {
    // }, 500);
    setPage((page) => page + 32);
  };

  return (
    <div>
      {error ? (
        <div className="msg">{error}</div>
      ) : loading ? (
        <div className="msg">Loading...</div>
      ) : null}

      {!loading && !error && videos.length == 0 && (
        <div className="msg">No data found!</div>
      )}

      {!loading && !error && videos.length > 0 && (
        <InfiniteScroll
          dataLength={videos.length}
          next={updatePage}
          hasMore={hasMore}
          loader={<h4 style={{ gridColumn: "1 / -1" }}>Loading...</h4>}
          endMessage={<p>No more data to load.</p>}
          scrollThreshold={0.8}
        >
          {videos.map((video) => (
            <Video
              key={video.youtubeID}
              title={video.title}
              youtubeID={video.youtubeID}
              noq={video.noq}
            />
          ))}
        </InfiniteScroll>
      )}
    </div>
  );
};

export default Videos;
