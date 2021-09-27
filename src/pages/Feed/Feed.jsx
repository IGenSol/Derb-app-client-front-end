import React from "react";

import Card from "../../components/Card/Card";
import { followingProfiles, profiles } from "../../mockData/discoverData";

import { FeedStyle } from "./Feed.style";

function Feed() {
  return (
    <FeedStyle>
      <aside className="following-wrapper">
        <h4 className="heading">My Following</h4>

        <article className="following-suggestion-profie">
          {followingProfiles.map((profile, index) => {
            return <Card key={index} cardType="profileCard" {...profile} />;
          })}
        </article>
      </aside>

      <article className="user-profiles-wrapper">
        {profiles.map((profile, index) => {
          return (
            <article key={index} className="user-profile">
              <Card cardType="profileCard" {...profile} />
              <Card cardType="liveCard" {...profile} />
            </article>
          );
        })}
      </article>
    </FeedStyle>
  );
}

export default Feed;
