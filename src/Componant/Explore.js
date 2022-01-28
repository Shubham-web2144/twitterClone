import React from "react";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterFollowButton,
  TwitterHashtagButton,
  TwitterMentionButton,
  TwitterTweetEmbed,
  TwitterMomentShare,
  TwitterDMButton,
  TwitterVideoEmbed,
  TwitterOnAirButton,
} from "react-twitter-embed";
import "../App.css";

function Explore() {
  return (
    <div className="explore">
      <div className="explore__serach">
        <i class="fas fa-search"></i>
        <input type="text" placeholder="Search Twitter" />
      </div>

      <TwitterTweetEmbed tweetId={"933354946111705097"} />
      {/* <TwitterTweetEmbed tweetId={"93335494656561705097"} /> */}
      <TwitterTweetEmbed tweetId={"1483081023005282312"} />
      {/* <TwitterTweetEmbed tweetId={"877354946111705097"} /> */}
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="imVkohli"
        options={{ height: 400 }}
      />
       <TwitterShareButton
    url={'https://facebook.com/saurabhnemade'}
    options={{ text: '#reactjs is awesome', via: 'saurabhnemade' }}
  />
    </div>
  );
}

export default Explore;
