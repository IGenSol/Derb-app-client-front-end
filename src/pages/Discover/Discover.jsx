import React, { useState, useEffect } from "react";
import axios from "axios";
import { Tabs } from "antd";

import Card from "../../components/Card/Card";
import {
  discoverItems,
  followingProfiles,
  profiles,
} from "../../mockData/discoverData";

import { DiscoverStyle, FollowingStyle } from "./Discover.style";
import { trendingItems } from "../../mockData/trendingItems";
import { LiveCardStyle, PostFooterStyle } from "../../components/Card/Card.style";
import { CommentIcon, LikeIcon, SendButtonIcon, ShareIcon } from "../../svgs";
import { Link } from "react-router-dom";


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
  const [descover, setdescover] = useState([])
  const url = `${process.env.REACT_APP_BASE_URL}/posts/discovery/data`

  useEffect(() => {
    getDescoverPost()
  }, [])

  const getDescoverPost = async () => {
    await axios.get(url).then((res) => {
      setdescover(res.data)
    }).catch((err) => {
      alert(err)
    })
  }


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
            {descover.map((descover, index) => {
              const { post_image, store_id, product_name } = descover;

              return (
                <LiveCardStyle>
                  {store_id >= 1 ? (
                    <Link to={
                      {
                        pathname: `/show-case/${product_name}`,
                        descover
                      }
                    } className="buynow-btn">
                      buy Now
                    </Link>) : (" ")}


                  <picture className="image-thumbnail" key={index}>
                    <img src={post_image} alt="image" className="thumbnail" />
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
                    {/* <article className="comment-box-wrapper">
                      <input
                        type="text"
                        className="comment-input-box"
                        placeholder="Write your comment..."
                      />
                      <button className="send-button">
                        <SendButtonIcon />
                      </button>
                    </article> */}
                  </PostFooterStyle>


                  {/* <CardDetails {...props} /> */}
                </LiveCardStyle>
              )
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
