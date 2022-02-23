import React, { useState, useEffect } from "react";
import axios from "axios";
import { Tabs } from "antd";
import Card from "../../components/Card/Card";
import { DiscoverStyle, FollowingStyle } from "./Discover.style";
import { trendingItems } from "../../mockData/trendingItems";
import { LiveCardStyle, PostFooterStyle, VerticalCardStyle } from "../../components/Card/Card.style";
import { CommentIcon, LikeIcon, SendButtonIcon, ShareIcon } from "../../svgs";
import { Link } from "react-router-dom";


const Following = () => {

  const id = sessionStorage.getItem("userId")

  const [following, setfollowing] = useState([])
  const [follower, setFollower] = useState([]);
  const url = `${process.env.REACT_APP_BASE_URL}/follower/posts/${id}`
  const followerurl = `${process.env.REACT_APP_BASE_URL}/follower/${id}`;


  useEffect(() => {
    getfollowerPost()
    getFollower()
  }, [])

  const getfollowerPost = async () => {
    await axios.get(url).then((res) => {
      setfollowing(res.data.data)
    }).catch((err) => {
      alert(err)
    })
  }

  const getFollower = async () => {
    await axios.get(followerurl).then((res) => {
      setFollower(res.data.data);
    });
  };





  return (
    <FollowingStyle>
      <aside className="following-wrapper">
        <h4 className="heading">My Following</h4>

        <article className="following-suggestion-profie">
          {follower.map((follower, index) => {
            const id = follower.follower_id
            return (
              // <Card
              //   key={index}
              //   className="friend-card"
              //   cardType="verticalCard"
              //   {...follower}
              // />
              <Link key={index}>
                <VerticalCardStyle to={
                  {
                    pathname: "/user-profile",
                    state: id
                  }
                } className="friend-card" >

                  <picture className="thumbnail-wrapper" >
                    <img src={follower?.user_image} alt="image" className="user-image" />
                  </picture>

                  {/* <span className="card-icon">{icon}</span> */}


                  <figcaption className="user-details">
                    <h1 className="heading">{follower?.first_name}{follower?.last_name}</h1>
                  </figcaption>

                </VerticalCardStyle>
              </Link>
            );
          })}
        </article>
      </aside>

      <article className="user-profiles-wrapper">
        {/* {trendingItems.map((profile, index) => {
          return (
            <article key={index} className="user-profile">
              <Card cardType="verticalCard" {...profile} />
              <Card cardType="liveCard" {...profile} />
            </article>
          );
        })}  */}

        {following.map((following, index) => {
          const { post_image, store_id, product_name, product_id } = following;
          const id = product_id
          return (
            <article key={index} className="user-profile">
              <LiveCardStyle>
                {store_id >= 1 ? (
                  <Link to={
                    {
                      pathname: `/show-case/${product_name}`,
                      state: id
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
            </article>
          )
        })}
      </article>
    </FollowingStyle>
  );
};

function Discover() {
  const { TabPane } = Tabs;
  const [descover, setdescover] = useState([])
  const [Like, setLike] = useState(false)
  const url = `${process.env.REACT_APP_BASE_URL}/posts/discovery/data`
  const loginuserid = sessionStorage.getItem("userId")

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



  const [productid, setproductid] = useState()
  const [postid, setpostid] = useState()
  const [storeid, setstoreid] = useState()


  const handleLike = (e) => {

    setproductid(e.product_id)
    setpostid(e.post_id)
    setstoreid(e.store_id)

    const data = {
      user_id: loginuserid,
      product_id: productid,
      post_id: postid,
      store_id: storeid

    }
    console.log(data)
    setLike(!Like)

    if (Like) {

      axios.put(`${process.env.REACT_APP_BASE_URL}/reviews/likes/Dislike/${loginuserid}`, data).then((res) => {
        console.log(res)
      }).catch((err) => {
        console.log(err)
      })

    }
    else {
      axios.post(`${process.env.REACT_APP_BASE_URL}/reviews/likes`, data).then((res) => {
        console.log(res)
      }).catch((err) => {
        console.log(err)
      })
    }



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
              const { post_image, user_id, post_id, store_id, product_name, product_id } = descover;
              const id = product_id
              const userid = user_id;

              return (
                <article key={index}>
                  <LiveCardStyle>
                    {store_id >= 1 ? (
                      <Link to={
                        {
                          pathname: `/show-case/${product_name}`,
                          state: id
                        }
                      } className="buynow-btn">
                        buy Now
                      </Link>) : (" ")}


                    <Link className="image-thumbnail" to={
                      {
                        pathname: "/user-profile",
                        state: userid
                      }
                    } >
                      <img src={post_image} alt="image" className="thumbnail" />
                    </Link>
                    <PostFooterStyle>
                      <article className="post-buttons-wrapper">
                        <button className="post-button">
                          <i onClick={() => handleLike(descover)} className={`fa fa-heart  mx-3 ${Like ? "likecolor" : ""}`} ></i>
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
                </article>
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
