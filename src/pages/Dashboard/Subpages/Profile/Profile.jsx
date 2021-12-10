import React, { useEffect, useState } from "react";

import { Tabs } from "antd";

import {
  FacebookIcon,
  InstagramIcon,
  MoreButtonIcon,
  TabSettingIcon,
  TwitterIcon,
  UserTabIcon,
} from "../../../../svgs";
import {
  ProfileDetailsStyle,
  ProfileInfoStyle,
  ProfileStyle,
  UpdateProfileModalStyle,
} from "./Profile.style";
import { getUserId } from "../../../../utils/Common";
import axios from "axios";

const UpdateProfileModal = (props) => {
  const url = "http://localhost:5000/api/users";
  const id = getUserId();
  const { handleCancel, handleOk, isModalVisible } = props;
  const [userData, setUserData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    mobile: "",
  });

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
        console.log(err);
      });
  };

  const onSubmitInput = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const submitUpdateUser = async (e) => {
    await axios
      .put(`${url}/${id}`, userData)
      .then(() => {
        console.log("User Udpated");
      })
      .catch((err) => {
        alert(err);
      });

    handleOk();
  };

  return (
    <UpdateProfileModalStyle
      title="Update Profile"
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
    >
      <form>
        <input
          type="text"
          placeholder="First Name"
          name="first_name"
          className="custom-input"
          value={userData.first_name}
          onChange={(e) => onSubmitInput(e)}
        />
        <input
          type="text"
          placeholder="Last Name"
          name="last_name"
          className="custom-input"
          value={userData.last_name}
          onChange={(e) => onSubmitInput(e)}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="custom-input"
          value={userData.email}
          onChange={(e) => onSubmitInput(e)}
        />
        <input
          type="number"
          placeholder="Mobile"
          className="custom-input"
          name="mobile"
          value={userData.mobile}
          onChange={(e) => onSubmitInput(e)}
        />

        <input
          type="password"
          placeholder="Password"
          className="custom-input"
          name="password"
          value={userData.password}
          onChange={(e) => onSubmitInput(e)}
        />

        <article className="modal-footer">
          <button
            className="update-button"
            onClick={(e) => submitUpdateUser(e)}
          >
            Update
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
      </form>
    </UpdateProfileModalStyle>
  );
};

const ProfileDetails = (props) => {
  const { first_name, last_name, email, mobile, password } = props;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { TabPane } = Tabs;

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
    <ProfileDetailsStyle>
      <Tabs defaultActiveKey="1" tabBarGutter={50}>
        <TabPane
          tab={
            <span className="tab">
              <UserTabIcon />
              Profile
            </span>
          }
          key="1"
        >
          <article className="profile-header">
            <h3 className="heading">Profile</h3>
            <button className="more-option-button" onClick={showModal}>
              <MoreButtonIcon />
            </button>

            <UpdateProfileModal
              handleOk={handleOk}
              handleCancel={handleCancel}
              isModalVisible={isModalVisible}
            />
          </article>

          <article className="user-details">
            <article className="user-data">
              <h4 className="data-title">First Name :</h4>
              <h4>{first_name}</h4>
            </article>
            <article className="user-data">
              <h4 className="data-title">Last Name :</h4>
              <h4>{last_name}</h4>
            </article>
            <article className="user-data">
              <h4 className="data-title">Email :</h4>
              <h4>{email}</h4>
            </article>
            <article className="user-data">
              <h4 className="data-title">Phone :</h4>
              <h4>{mobile}</h4>
            </article>
            <article className="user-data">
              <h4 className="data-title">Gender :</h4>
              <h4>Male</h4>
            </article>
            <article className="user-data">
              <h4 className="data-title">DOB :</h4>
              <h4>17/07/1995</h4>
            </article>
          </article>
        </TabPane>
        <TabPane
          tab={
            <span className="tab">
              <TabSettingIcon />
              Setting
            </span>
          }
          key="2"
        >
          <h3 className="heading">Notification</h3>
          <article className="option-wrapper">
            <label className="setting">
              <input type="checkbox" name="check" id="Check" />
              <p className="text">Allow Desktop Notifications</p>
            </label>
            <label className="setting">
              <input type="checkbox" name="check" id="Check" />
              <p className="text">Enable Notifications</p>
            </label>
            <label className="setting">
              <input type="checkbox" name="check" id="Check" />
              <p className="text">Get Notification for my own activity</p>
            </label>
            <label className="setting">
              <input type="checkbox" name="check" id="Check" />
              <p className="text">DND</p>
            </label>
          </article>

          <h3 className="heading">Deactivate Account</h3>
          <article className="option-wrapper">
            <label className="setting">
              <input type="radio" name="check" id="Check" />
              <p className="text">I have Privacy concern</p>
            </label>
            <label className="setting">
              <input type="radio" name="check" id="Check" />
              <p className="text">This is temporary</p>
            </label>
            <label className="setting">
              <input type="radio" name="check" id="Check" />
              <p className="text">Others</p>
            </label>
          </article>

          <button className="deactive-btn">Deactive account</button>
        </TabPane>
      </Tabs>
    </ProfileDetailsStyle>
  );
};

const ProfileInfo = (props) => {
  const { first_name, last_name, email } = props;
  return (
    <ProfileInfoStyle>
      <article className="user-details">
        <picture className="user-profile-wrapper">
          <img
            src="/images/icons/user-icon.png"
            alt="User Profile"
            className="user-profile"
          />
        </picture>

        <h2 className="name">{`${first_name} ${last_name}`}</h2>
        <h3 className="email">{email}</h3>
        <article className="social-icons-wrapper">
          <a href="#" className="icon">
            <FacebookIcon />
          </a>
          <a href="#" className="icon">
            <TwitterIcon />
          </a>
          <a href="#" className="icon">
            <InstagramIcon />
          </a>
        </article>
      </article>

      <article className="employee-status">
        <h3 className="heading">Employ Status</h3>

        <article className="employee-performance">
          <h3 className="label">Performance</h3>
          <h3 className="percentage">80%</h3>
        </article>
        <article className="employee-performance">
          <h3 className="label">Overtime</h3>
          <h3 className="percentage">20%</h3>
        </article>
        <article className="employee-performance">
          <h3 className="label">Leave Taken</h3>
          <h3 className="percentage">30%</h3>
        </article>
      </article>
    </ProfileInfoStyle>
  );
};

function Profile() {
  const [user, setUser] = useState([]);
  const url = "http://localhost:5000/api/users";

  const id = getUserId();

  useEffect(() => {
    getUserData();
  }, []);

  console.log(user);

  const getUserData = async () => {
    await axios
      .get(`${url}/${id}`)
      .then((res) => {
        setUser(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <ProfileStyle>
      <article className="section-header">
        <h2 className="section-title">Profile</h2>
        <p className="description">Derb Admin Panel</p>
      </article>

      <section className="profile-body">
        <ProfileInfo {...user} />
        <ProfileDetails {...user} />
      </section>
    </ProfileStyle>
  );
}

export default Profile;
