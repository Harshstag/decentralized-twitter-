import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
  TwitterMentionButton,
  TwitterHashtagButton,
  TwitterFollowButton,
  TwitterOnAirButton,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>Discover new Communities</h2>
        {/* <TwitterMentionButton screenName={"saurabhnemade"} /> */}
        {/* <TwitterHashtagButton tag={"cybersecurity"} /> */}
        {/* <TwitterFollowButton screenName={"harshstag"} /> */}
        {/* <TwitterTweetEmbed tweetId={"933354946111705097"} /> */}

        <TwitterTimelineEmbed
          sourceType="trending"
          screenName="trending"
          options={{ height: 600, width: 370 }}
        />

        {/* <TwitterShareButton
          url={"https://www.instagram.com/harshstag/"}
          options={{ text: "#HRS is awesome", via: "harshstag" }}
        /> */}
      </div>
    </div>
  );
}

export default Widgets;
