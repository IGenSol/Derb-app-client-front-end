import React from "react";
import { Tabs } from "antd";

import Card from "../../components/Card/Card";
import {
  discoverItems,
  followingProfiles,
  profiles,
} from "../../mockData/discoverData";

import { DiscoverStyle, FollowingStyle } from "./Discover.style";
import { trendingItems } from "../../mockData/trendingItems";

const Following = () => {
  return (
    <FollowingStyle>
      <aside className="following-wrapper">
        <h4 className="heading">My Following</h4>

        <article className="following-suggestion-profie">
          {followingProfiles.map((profile, index) => {
            return <Card key={index} cardType="verticalCard" {...profile} />;
          })}
        </article>
      </aside>

      <article className="user-profiles-wrapper">
        {trendingItems.map((profile, index) => {
          return (
            <article key={index} className="user-profile">
              {/* <Card cardType="verticalCard" {...profile} /> */}
              <Card cardType="liveCard" {...profile} />
            </article>
          );
        })}
      </article>
    </FollowingStyle>
  );
};

function Discover() {
  const { TabPane } = Tabs;

  return (
    <DiscoverStyle>
      <Tabs
        tabBarGutter={100}
        size="large"
        centered="true"
        defaultActiveKey="1"
      >
        <TabPane tab="Discover" key="descover">
          <article className="discover-prducts-wrapper">
            {trendingItems.map((discoverItem, index) => {
              return <Card key={index} cardType="liveCard" {...discoverItem} />;
            })}
          </article>
        </TabPane>
        <TabPane tab="Following" key="following">
          <Following />
        </TabPane>
      </Tabs>
    </DiscoverStyle>
  );
}

export default Discover;
