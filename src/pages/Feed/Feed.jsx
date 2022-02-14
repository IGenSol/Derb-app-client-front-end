import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../../components/Card/Card";
import { CameraIcon, CrossIcon, FileIcon, VideoIcon } from "../../svgs";
import { getUserId } from "../../utils/Common";

import { FeedStyle, Modelstyle } from "./Feed.style";
import { VerticalCardStyle } from "../../components/Card/Card.style";



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


  const url = `${process.env.REACT_APP_BASE_URL}/posts/${userId}`;

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
  const [followerCount, setFollowerCount] = useState([]);
  const [follower, setFollower] = useState([]);

  const [show, setShow] = useState(false);
  const hanldeClick = (e) => {
    setShow(true);
  };

  const hideModal = () => {
    setShow(false);
  };


  const userId = sessionStorage.getItem("userId")


  const url = `${process.env.REACT_APP_BASE_URL}/follower/posts/${userId}`;
  const followerurl = `${process.env.REACT_APP_BASE_URL}/follower/${userId}`;
  const followerCounturl = `${process.env.REACT_APP_BASE_URL}/follower/AllFollowerCount/${userId}`;


  useEffect(() => {
    getPost();
    getfollowerCount();
    getFollower();
  }, []);

  const getPost = async () => {
    await axios.get(url).then((res) => {
      setPostsData(res.data.data);
    });
  };
  const getFollower = async () => {
    await axios.get(followerurl).then((res) => {
      setFollower(res.data.data);
    });
  };
  const getfollowerCount = async () => {
    await axios.get(followerCounturl).then((res) => {
      setFollowerCount(res.data.data[0]);
    });
  };




  return (
    <FeedStyle>
      <aside className="friends-wrapper">
        <h4 className="title">Following</h4>

        <article className="friends-list">
          {follower.map((follower, index) => {
            const id = follower.follower_id
            return (
              <VerticalCardStyle to={
                {
                  pathname: "/user-profile",
                  state: id
                }
              } className="friend-card" key={index}>

                <picture className="thumbnail-wrapper">
                  <img src={follower?.user_image} alt="image" className="user-image" />
                </picture>

                {/* <span className="card-icon">{icon}</span> */}


                <figcaption className="user-details">
                  <h1 className="heading">{follower?.first_name}{follower?.last_name}</h1>
                </figcaption>

              </VerticalCardStyle>
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
              <h3 className="no">{followerCount?.total_followers}</h3>
            </article>

            <article className="details">
              <h3 className="title">Posts</h3>
              <h3 className="no">{followerCount?.total_post}</h3>
            </article>
          </article>
        </section>
        {show && <Modal handleClose={hideModal} />}
      </aside>

    </FeedStyle>
  );
}

export default Feed;
