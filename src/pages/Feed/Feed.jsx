import React, { useState, useEffect } from "react";
import axios from "axios";

import Card from "../../components/Card/Card";
import { followingProfiles, profiles } from "../../mockData/discoverData";
import { CameraIcon, FileIcon, VideoIcon } from "../../svgs";
import { getUserId } from "../../utils/Common";

import { FeedStyle } from "./Feed.style";

function Feed() {
  const [posts, setPosts] = useState("");
  const [postsData, setPostsData] = useState([]);
  const userId = getUserId();
  const url = "http://localhost:5000/api/posts";

  console.log(`user id = ${userId}`);

  const feedPost = () => {
    axios
      .post(url, {
        post_description: posts,
        user_id: userId,
      })
      .then((res) => {
        alert("Successfully Posted");
        setPosts = "";
      })
      .catch((err) => {
        console.log(`error >> ${err}`);
      });
  };

  const getPost = async () => {
    const data = await axios.get(url);
    setPostsData(data.data);
  };

  useEffect(() => {
    getPost();
  }, []);

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
              value={posts}
              onChange={(e) => setPosts(e.target.value)}
            ></textarea>
          </article>

          <article className="add-post-footer">
            <label htmlFor="upload-photo" className="add-post-btn">
              <input type="file" id="upload-photo" />
              <span className="icon">
                <CameraIcon />
              </span>
              Photo
            </label>
            <label htmlFor="upload-video" className="add-post-btn">
              <input type="file" id="upload-video" />
              <span className="icon">
                <VideoIcon />
              </span>
              Videos
            </label>
            <button className="add-post-btn" onClick={feedPost}>
              Post
            </button>
          </article>
        </article>

        {postsData.map((post, index) => {
          return (
            <article key={index} className="user-profile">
              <Card cardType="postCard" {...post} />
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
