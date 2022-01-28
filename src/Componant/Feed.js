import React from "react";
import "../App.css";
import Post from "./Post";
import TweetBox from "./TweetBox";

function Feed() {
  return (
    <div className="feed">
      <div className="feed__header">
          <span>Home</span>
          <i class="far fa-star"></i>
      </div>
      {/* TweetBox */}
      <TweetBox />

      {/* Posts */}
      <Post />
      
    </div>
  );
}

export default Feed;
