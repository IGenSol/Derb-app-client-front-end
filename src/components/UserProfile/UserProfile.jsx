import React, { useEffect, useState } from "react";
import { Tabs } from "antd";

import { discoverItems } from "../../mockData/discoverData";
import Card from "../Card/Card";

import { getUserId } from "../../utils/Common";

import {
  ProfileModalStyle,
  ProfileTabsStyle,
  UserProfileStyle,
} from "./UserProfile.style";
import axios from "axios";

const PorfileModal = (props) => {
  const { isModalVisible, handleCancel, handleOk } = props;
  const [userData, setUserData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    mobile: "",
    password: "",
    description: "",
  });

  const { first_name, last_name, email, mobile, password, description } =
    userData;

  const url = "http://localhost:5000/api/users";
  const id = getUserId();

  const onInputSubmit = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    await axios
      .get(`${url}/${id}`)
      .then((res) => {
        setUserData(res.data.data);
      })
      .catch((err) => {
        alert(err);
      });
  };

  const updateUser = async () => {
    await axios
      .put(`${url}/${id}`, userData)
      .then(() => {
        console.log("User Updated");
      })
      .catch((err) => alert(err));
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
            <input type="file" name="profile_image" id="upload-image" />
            <img
              src="./images/users/user-four.jpg"
              alt="User Proifle"
              className="image-placeholder"
            />
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
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={email}
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
              <label>Description</label>
              <textarea
                name="description"
                className="custom-input"
                value={description}
                onChange={(e) => onInputSubmit(e)}
                cols="30"
                rows="10"
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

const ProfileTabs = () => {
  const { TabPane } = Tabs;

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
            {discoverItems.map((item, index) => {
              return <Card cardType="liveCard" {...item} />;
            })}
          </article>
        </TabPane>
        <TabPane tab="Tagged" key="2">
          <article className="posts-wrapper">
            {discoverItems.map((item, index) => {
              return <Card cardType="liveCard" {...item} />;
            })}
          </article>
        </TabPane>
      </Tabs>
    </ProfileTabsStyle>
  );
};

function UserProfile() {
  const id = getUserId();
  const url = "http://localhost:5000/api/users";
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [user, setUser] = useState([]);

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    await axios
      .get(`${url}/${id}`)
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

  return (
    <UserProfileStyle>
      <section className="user-details">
        <article className="user-profile">
          <figure className="user-info">
            <picture className="user-thumbnail">
              <img
                src="/images/users/user-four.jpg"
                alt="User Profile"
                className="user-image"
              />
            </picture>
            <figcaption className="user-profile-details">
              <h2 className="name">{`${user.first_name} ${user.last_name}`}</h2>
              <p className="description">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum
                harum expedita quasi enim odit labore eius consequatur illo!
                Voluptatem animi impedit beatae, rem eos ipsum assumenda veniam
                corrupti magni excepturi
              </p>
            </figcaption>
          </figure>

          <article className="buttons-wrapper">
            <button className="profile-button" onClick={showModal}>
              Edit Profile
            </button>
            <button className="profile-button">Visit Store</button>
            <PorfileModal
              handleOk={handleOk}
              handleCancel={handleCancel}
              isModalVisible={isModalVisible}
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

      <ProfileTabs />
    </UserProfileStyle>
  );
}

export default UserProfile;
