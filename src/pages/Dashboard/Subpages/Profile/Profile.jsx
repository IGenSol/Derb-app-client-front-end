import React from "react";

import { Tabs } from "antd";

import {
  FacebookIcon,
  InstagramIcon,
  TabSettingIcon,
  TwitterIcon,
  UserTabIcon,
} from "../../../../svgs";
import {
  ProfileDetailsStyle,
  ProfileInfoStyle,
  ProfileStyle,
} from "./Profile.style";

const ProfileDetails = () => {
  const { TabPane } = Tabs;
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
          <h3 className="heading">Profile</h3>

          <article className="user-details">
            <article className="user-data">
              <h4 className="data-title">First Name :</h4>
              <h4>Jahangir</h4>
            </article>
            <article className="user-data">
              <h4 className="data-title">Last Name :</h4>
              <h4>Khan</h4>
            </article>
            <article className="user-data">
              <h4 className="data-title">Email :</h4>
              <h4>jahangirjay5@gmail.com</h4>
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

const ProfileInfo = () => {
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

        <h2 className="name">Jahangir Khan</h2>
        <h3 className="email">jahangirjay5@gmail.com</h3>
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
  return (
    <ProfileStyle>
      <article className="section-header">
        <h2 className="section-title">Profile</h2>
        <p className="description">Derb Admin Panel</p>
      </article>

      <section className="profile-body">
        <ProfileInfo />
        <ProfileDetails />
      </section>
    </ProfileStyle>
  );
}

export default Profile;
