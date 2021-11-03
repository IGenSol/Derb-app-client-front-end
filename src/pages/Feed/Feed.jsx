import React from "react";

import Card from "../../components/Card/Card";
import { followingProfiles, profiles } from "../../mockData/discoverData";
import { CameraIcon, FileIcon, VideoIcon } from "../../svgs";

import { FeedStyle } from "./Feed.style";

function Feed() {
  return (
    <FeedStyle>
      <aside className="friends-wrapper">
        <h4 className="title">Friends</h4>

        <article className="friends-list">
          {followingProfiles.map((profile, index) => {
            return (
              <Card
                key={index}
                className="friend-card"
                cardType="verticalCard"
                {...profile}
              />
            );
          })}
        </article>
      </aside>

      <article className="user-profiles-wrapper">
        <article className="add-post-section">
          <article className="post-input">
            <img
              src="./images/users/user-four.jpg"
              alt="User Profile Image"
              className="profile-image"
            />

            <textarea
              name="Post"
              cols="30"
              rows="3"
              placeholder="Share Your thoughts.."
            ></textarea>
          </article>

          <article className="add-post-footer">
            <button className="add-post-btn">
              <span className="icon">
                <CameraIcon />
              </span>
              Photo
            </button>
            <button className="add-post-btn">
              <span className="icon">
                <VideoIcon />
              </span>
              Videos
            </button>
            <button className="add-post-btn">
              <span className="icon">
                <FileIcon />
              </span>
              File
            </button>
            <button className="add-post-btn">Post</button>
          </article>
        </article>

        {profiles.map((profile, index) => {
          return (
            <article key={index} className="user-profile">
              <Card cardType="verticalCard" {...profile} />
              <Card cardType="liveCard" {...profile} />
            </article>
          );
        })}
      </article>

      <aside className="profile-detail">
        <section className="user-profile">
          <article className="profile-header">
            <img
              src="./images/users/user-four.jpg"
              alt="User Profile Image"
              className="profile-image"
            />
          </article>
          <h3 className="name">Jahangir Khan</h3>
          <h4 className="username">@jahangirkhan</h4>

          <article className="profile-details">
            <article className="details">
              <h3 className="title">Followers</h3>
              <h3 className="no">43</h3>
            </article>

            <article className="details">
              <h3 className="title">Posts</h3>
              <h3 className="no">53</h3>
            </article>
          </article>
        </section>
      </aside>
    </FeedStyle>
  );
}

export default Feed;
