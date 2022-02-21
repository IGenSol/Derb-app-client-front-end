import React, { useEffect, useState } from "react";
import { Tabs } from "antd";

import { discoverItems } from "../../mockData/discoverData";
import Card from "../Card/Card";
import {
  LivePost,
  ProfileModalStyle,
  ProfileTabsStyle,
  UserProfileStyle,
} from "./UserProfile.style";
import axios from "axios";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { PostFooterStyle } from "../Card/Card.style";
import { CommentIcon, LikeIcon, SendButtonIcon, ShareIcon } from "../../svgs";

function UserProfile() {
  const location = useLocation();

  if (location.state !== undefined) {
    var userid = location.state;
  }

  console.log(userid)



  const url = `${process.env.REACT_APP_BASE_URL}/users/${userid}`;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [user, setUser] = useState([]);
  const [Like, setLike] = useState(false)

  const loginuserid = sessionStorage.getItem("userId")

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    await axios
      .get(url)
      .then((res) => {
        setUser(res.data.data);
      })
      .catch((err) => {
        alert(err);
      });
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };


  // #### Follow Unfollow Code####
  const onclickactive = () => {
    setLike(!Like)
  }

  let text = ""

  if (Like) {
    text = "Follow"
  }
  else {
    text = "Unfollow"
  }

  return (
    <UserProfileStyle>
      <section className="user-details">
        <article className="user-profile">
          <figure className="user-info">
            <picture className="user-thumbnail">
              <img
                src={user?.picture}
                alt="User Profile"
                className="user-image"
              />
            </picture>
            <figcaption className="user-profile-details">
              <h2 className="name">{`${user?.first_name} ${user?.last_name}`}</h2>
              <p className="description">
                {user?.status}
              </p>
            </figcaption>
          </figure>

          <article className="buttons-wrapper">
            {userid == loginuserid &&

              <button className="profile-button" onClick={showModal}>
                Edit Profile
              </button>
            }
            <button className="profile-button" onClick={onclickactive}>{text}</button>
            <PorfileModal
              handleOk={handleOk}
              handleCancel={handleCancel}
              isModalVisible={isModalVisible}
              user={user}
            />
          </article>
        </article>

        <article className="user-connections">
          <article className="counter">
            <h2 className="counter-no">23</h2>
            <p className="counter-text">Post</p>
          </article>
          <article className="counter">
            <h2 className="counter-no">80</h2>
            <p className="counter-text">Following</p>
          </article>
          <article className="counter">
            <h2 className="counter-no">100</h2>
            <p className="counter-text">Followers</p>
          </article>
        </article>

        <article className="about-user">
          <h3 className="heading">Interest :</h3>
          <article className="tags-wrapper">
            <span className="tags">Photography</span>
            <span className="tags">Design</span>
            <span className="tags">UI/UX</span>
            <span className="tags">Football</span>
          </article>
        </article>
      </section>

      <ProfileTabs user={user} />
    </UserProfileStyle>
  );
}

export default UserProfile;


const PorfileModal = (props) => {


  const { isModalVisible, handleCancel, handleOk, user } = props;
  const [image, setImage] = useState([]);
  const [postimage, setpostimage] = useState();
  const [userData, setUserData] = useState({
    first_name: "",
    last_name: "",
    mobile: "",
    password: "",
    status: "",
  });

  const { first_name, last_name, mobile, password, status, picture, id } = user;

  const url = `${process.env.REACT_APP_BASE_URL}/users/${id}`;

  const onInputSubmit = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };


  const formData = new FormData();
  formData.append("first_name", userData.first_name);
  formData.append("last_name", userData.last_name);
  formData.append("mobile", userData.mobile);
  formData.append("password", userData.password);
  formData.append("status", userData.status);
  formData.append("image", image);

  const updateUser = async () => {
    await axios
      .put(`${url}/${id}`, userData)
      .then(() => {
        console.log("User Updated");
      })
      .catch((err) => alert(err));
  };

  const filehandler = (e) => {
    setImage(e.target.files[0]);

    if (e.target.files.length !== 0) {
      setpostimage(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <ProfileModalStyle
      title="User Profile"
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      centered
      width="80%"
      footer={null}
    >
      <form className="profile-form">
        <article className="profile-detail-wrapper">
          <label htmlFor="upload-image" className="user-profile-image-wrapper">
            {postimage ? (
              (
                <img
                  src={postimage}
                  alt="Select Image"
                  className="image-placeholder"
                />
              )
            ) : (
              <img
                src={picture}
                alt="User Proifle"
                className="image-placeholder"
              />
            )}

          </label>

          <h2 className="profile-name">{`${first_name} ${last_name}`}</h2>
        </article>

        <article className="profile-form-data">
          <h3 className="form-title">Profile Details</h3>

          <article className="form-details">
            <article className="form-content">
              <label>First Name</label>
              <input
                type="text"
                name="first_name"
                value={first_name}
                onChange={(e) => onInputSubmit(e)}
                className="custom-input"
              />
            </article>
            <article className="form-content">
              <label>Last Name</label>
              <input
                type="text"
                name="last_name"
                value={last_name}
                onChange={(e) => onInputSubmit(e)}
                className="custom-input"
              />
            </article>
            <article className="form-content">
              <label>Mobile</label>
              <input
                type="number"
                name="email"
                value={mobile}
                onChange={(e) => onInputSubmit(e)}
                className="custom-input"
              />
            </article>
            <article className="form-content">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => onInputSubmit(e)}
                className="custom-input"
              />
            </article>
            <article className="form-content">
              <label>Profile Image</label>
              <input
                type="file"
                onChange={(e) => filehandler(e)}
                className="custom-input"
              />
            </article>
            <article className="form-content">
              <label>Description</label>
              <textarea
                name="status"
                className="custom-input"
                value={status}
                onChange={(e) => onInputSubmit(e)}
                cols="30"
                rows="5"
              ></textarea>
            </article>
          </article>

          <article className="form-footer">
            <button className="update-button" onClick={updateUser}>
              Updated
            </button>
            <button
              className="cancel-button"
              onClick={(e) => {
                e.preventDefault();
                handleCancel();
              }}
            >
              Cancel
            </button>
          </article>
        </article>
      </form>
    </ProfileModalStyle>
  );
};

const ProfileTabs = (props) => {
  const location = useLocation();

  if (location.state !== undefined) {
    var userid = location.state;
  }
  const { TabPane } = Tabs;
  const [postsData, setPostsData] = useState([]);
  const { user } = props
  const url = `${process.env.REACT_APP_BASE_URL}/follower/posts/${userid}`



  useEffect(() => {
    getPost();

  }, []);

  const getPost = async () => {
    await axios.get(url).then((res) => {
      setPostsData(res.data.data);
    });
  };

  return (
    <ProfileTabsStyle>
      <Tabs
        defaultActiveKey="1"
        centered="true"
        size="large"
        tabBarGutter="10rem"
        className="profile-tabs"
      >
        <TabPane tab="Posts" key="1">
          <article className="posts-wrapper">
            {postsData.map((postsData, index) => {
              return (
                <LivePost key={index}>


                  <picture className="image-thumbnail" >
                    <img src={postsData?.post_image} alt="image" className="thumbnail" />
                  </picture>
                  <PostFooterStyle>
                    <article className="post-buttons-wrapper">
                      <button className="post-button">
                        <span className="icon">
                          <LikeIcon />
                        </span>
                        5
                      </button>
                      <button className="post-button">
                        <span className="icon">
                          <CommentIcon />
                        </span>
                        4
                      </button>
                      <button className="post-button">
                        <span className="icon">
                          <ShareIcon />
                        </span>
                        12
                      </button>
                    </article>
                    <article className="comment-box-wrapper">
                      <input
                        type="text"
                        className="comment-input-box"
                        placeholder="Write your comment..."
                      />
                      <button className="send-button">
                        <SendButtonIcon />
                      </button>
                    </article>
                  </PostFooterStyle>


                  {/* <CardDetails {...props} /> */}
                </LivePost>
              );
            })}
          </article>


        </TabPane>
        {/* <TabPane tab="Tagged" key="2">
          <article className="posts-wrapper">
            {discoverItems.map((item, index) => {
              return <Card cardType="liveCard" {...item} />;
            })}
          </article>
        </TabPane> */}
      </Tabs>
    </ProfileTabsStyle>
  );
};
