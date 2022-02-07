import React, { useState, useEffect } from "react";
import axios from "axios";

import Card from "../../components/Card/Card";
import { followingProfiles, profiles } from "../../mockData/discoverData";
import { CameraIcon, CrossIcon, FileIcon, VideoIcon } from "../../svgs";
import { getUserId } from "../../utils/Common";

import { FeedStyle, Modelstyle } from "./Feed.style";



const Modal = ({ handleClose }) => {
  const [description, setdescription] = useState("")
  const [image, setImage] = useState([]);
  const [postimage, setpostimage] = useState([]);

  const userId = sessionStorage.getItem("userId")

  const filehandler = (e) => {
    setImage(e.target.files[0]);

    if (e.target.files.length !== 0) {
      setpostimage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const url = `${process.env.REACT_APP_BASE_URL}/posts`

  const [videoSrc, seVideoSrc] = useState("");

  const handleChange = (e) => {
    var reader = new FileReader();
    // var url = URL.createObjectURL(e.originFileObj);
    // seVideoSrc(url);
  };

  const formData = new FormData();
  formData.append("post_description", description);
  formData.append("post_image", image);
  formData.append("user_id", userId);

  for (var value of formData.values()) {
    console.log(value);
  }


  const feedPost = () => {
    axios.post(url, formData)
      .then((res) => {
        alert("Successfully Posted")
      })
      .catch((err) => {
        alert(`error >> ${err}`)
      });
  };


  return (
    <Modelstyle>
      <div className="modal display-block">
        <section className="modal-main">

          <div className="container">
            <p className="heading">Create Post</p>
            <article className="cancel" onClick={handleClose}><CrossIcon /></article>
          </div>
          <hr className="mb-3"></hr>
          <article className="textbox">
            <textarea
              name="Post"
              rows="3"
              placeholder="Share Your thoughts.."
              // value={postText}
              onChange={(e) => setdescription(e.target.value)}
            ></textarea>

          </article>

          <div className="imagecontainer">
            {image &&
              <img className="preview-image" src={postimage}></img>
            }
            {/* <Player
              playsInline
              src={videoSrc}
              fluid={false}
              width={480}
              height={272}
            /> */}
          </div>
          <article className="add-post-footer my-3">
            <label htmlFor="upload-photo" className="add-post-btn">
              <input
                type="file"
                onChange={filehandler}

                id="upload-photo"

              />
              <span className="icon" >
                <CameraIcon />
              </span>
              Photo
            </label>

            <label htmlFor="upload-video" className="add-post-btn">
              <input
                type="file"
                onChange={(e) => { handleChange(e) }}
                id="upload-photo"

              />
              <span className="icon">
                <VideoIcon />
              </span>
              Videos
            </label>
            <button className="add-post-btn" onClick={(e) => { feedPost(e) }}>
              Post
            </button>
          </article>



        </section>
      </div>
    </Modelstyle >
  );
};


function Feed() {

  const [postsData, setPostsData] = useState([]);
  const userId = getUserId();

  const [show, setShow] = useState(false);
  const hanldeClick = (e) => {
    setShow(true);
  };

  const hideModal = () => {
    setShow(false);
  };


  const url = `${process.env.REACT_APP_BASE_URL}/follower/posts/1`;
  const followerurl = `${process.env.REACT_APP_BASE_URL}/follower`;


  const getPost = async () => {
    await axios.get(url).then((res) => {
      setPostsData(res.data.data);
    });
  };

  useEffect(() => {
    getPost();
  }, []);

  console.log(postsData)


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
            <label htmlFor="upload-photo" className="add-post-btn" onClick={() => hanldeClick()}>
              <span className="icon" >
                <CameraIcon />
              </span>
              Photo
            </label>

            <label htmlFor="upload-video" className="add-post-btn">

              <span className="icon">
                <VideoIcon />
              </span>
              Videos
            </label>
            <button className="add-post-btn" >
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
        {show && <Modal handleClose={hideModal} />}
      </aside>

    </FeedStyle>
  );
}

export default Feed;
