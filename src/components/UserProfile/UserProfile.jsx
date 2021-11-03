import React from "react";
import { Tabs } from "antd";

import Card from "../Card/Card";
import { ProfileTabsStyle, UserProfileStyle } from "./UserProfile.style";
import { discoverItems } from "../../mockData/discoverData";

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
              <h2 className="name">Jahangir Khan</h2>
              <p className="description">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum
                harum expedita quasi enim odit labore eius consequatur illo!
                Voluptatem animi impedit beatae, rem eos ipsum assumenda veniam
                corrupti magni excepturi
              </p>
            </figcaption>
          </figure>

          <article className="buttons-wrapper">
            <button className="profile-button">Edit Profile</button>
            <button className="profile-button">Visit Store</button>
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
