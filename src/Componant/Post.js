import React from "react";
import "../App.css";

function Post({userImg,displayName,verified,userName,caption,imgPost}) {
  return (
    <div className="post">
      <div className="post__header">
        <div className="tweetBox__input-avtar">
          <img src={userImg} />
        </div>
        <div className="post__header-info">
          <span>{displayName}</span>
          <i class="fas fa-check-circle"></i>
          <span>{userName}</span>
        </div>
      </div>
      <div className="post__txt">
        <p>{caption}</p>
      </div>
      <div className="post__img">
        <img src={imgPost} />
      </div>
      <div className="post__footer">
        <i class="far fa-comment"></i>
        <i class="fas fa-retweet"></i>
        <i class="far fa-heart"></i>
        <i class="far fa-share-square"></i>
      </div>
    </div>
  );
}

export default Post;
