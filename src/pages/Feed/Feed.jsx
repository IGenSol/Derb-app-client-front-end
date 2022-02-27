import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Card from "../../components/Card/Card";
import { CameraIcon, CrossIcon, FileIcon, VideoIcon } from "../../svgs";
import { FeedStyle, Modelstyle } from "./Feed.style";
import { VerticalCardStyle } from "../../components/Card/Card.style";



const Modal = ({ handleClose }) => {
  const [description, setdescription] = useState("")
  const [image, setImage] = useState([]);
  const [vedio, setVedio] = useState([]);
  const userId = sessionStorage.getItem("userId")

  const [file, setFile] = useState([]);


  function uploadSingleFile(e) {

    let ImagesArray = Object.entries(e.target.files).map((e) =>
      URL.createObjectURL(e[1])
    );
    setFile([...file, ...ImagesArray]);
    setImage([...image, e.target.files]);
    // setImage([...image, e.target.files[0]]);
  }

  //  ####For Vedio Upload
  const inputRef = React.useRef();

  const [source, setSource] = React.useState();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setVedio(file)
    const url = URL.createObjectURL(file);
    setSource(url);
  };


  const handleChoose = (event) => {
    inputRef.current.click();
  };


  const url = `${process.env.REACT_APP_BASE_URL}/posts`;







  const feedPost = () => {
    debugger
    const formData = new FormData();
    formData.append("post_description", description);
    formData.append("vedio", vedio);
    formData.append("user_id", userId);

    image.forEach(_file => {
      for (let i = 0; i < _file.length; i++) {
        const element = _file[i];
        // formData.append("post_image", _file[i], i + "");
        formData.append("post_image", _file[i], i + "");
      }
    });
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
          <article className="multi_image_container">
            {file.length > 0 &&
              file.map((item, index) => {
                return (
                  <div key={item}>
                    <img src={item} className="multi_image" alt="Post_Image" />
                    {/* <button type="button" onClick={() => deleteFile(index)}>
                    delete
                  </button> */}
                  </div>
                );
              })}

            {source && (
              <video
                className="VideoInput_video"
                width="100%"
                height="200"
                controls
                src={source}
              />)
            }

          </article>

          {/* <div className="imagecontainer">
            {image &&
              <img className="preview-image" src={postimage}></img>
            }
            <Player
              playsInline
              src={videoSrc}
              fluid={false}
              width={480}
              height={272}
            />
          </div> */}
          <article className="add-post-footer my-3">
            <label htmlFor="upload-photo" className="add-post-btn">
              <input
                type="file"
                disabled={file.length === 5}
                className="form-control"
                onChange={uploadSingleFile}
                multiple
                id="upload-photo"

              />
              <span className="icon" >
                <CameraIcon />
              </span>
              Photo
            </label>

            <label htmlFor="upload-video" className="add-post-btn" onClick={handleChoose}>
              <input
                ref={inputRef}
                className="VideoInput_input"
                type="file"
                onChange={handleFileChange}
                accept=".mov,.mp4"

              />
              <span className="icon" >
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

  const id = followerCount?.user_id || "";

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

            <Link to={
              {
                pathname: "/user-profile",
                state: id
              }
            }>
              <img
                src={followerCount?.picture}
                alt="User Profile Image"
                className="profile-image"
              />
            </Link>

            <textarea
              name="Post"
              cols="30"
              rows="3"
              placeholder="Share Your thoughts.."
            ></textarea>
          </article>

          <article className="add-post-footer">
            <label className="add-post-btn" onClick={() => hanldeClick()}>
              <span className="icon" >
                <CameraIcon />
              </span>
              Photo
            </label>

            <label className="add-post-btn" onClick={() => hanldeClick()}>

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
            <Link to={
              {
                pathname: "/user-profile",
                state: id
              }
            }>
              <img
                src={followerCount?.picture}
                alt="User Profile Image"
                className="profile-image"
              />
            </Link>
          </article>
          <h3 className="name">{followerCount?.first_name}</h3>
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
