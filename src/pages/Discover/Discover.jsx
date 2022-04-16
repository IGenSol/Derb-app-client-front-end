import React, { useState, useEffect } from "react";
import axios from "axios";
import { Tabs } from "antd";
import { CommentStyle, DiscoverStyle, FollowingStyle } from "./Discover.style";
import { LiveCardStyle, PostFooterStyle, VerticalCardStyle } from "../../components/Card/Card.style";
import { CommentIcon, CrossIcon, LikeIcon, SendButtonIcon, ShareIcon } from "../../svgs";
import { FacebookShareButton, TwitterShareButton, TelegramShareButton, LinkedinShareButton } from "react-share";
import { FacebookIcon, TelegramIcon, LinkedinIcon, TwitterIcon } from "react-share";
import { Link } from "react-router-dom";
import { Modelstyle } from "../Feed/Feed.style";
import Carousel from "react-multi-carousel";


const Following = () => {

  const id = sessionStorage.getItem("userId")

  const [following, setfollowing] = useState([])
  const [follower, setFollower] = useState([]);
  const [show, setShow] = useState(false);
  const [selectedData, setSelectedData] = useState({});
  const hanldeClick = (data) => {
    setSelectedData(data);
    setShow(true);
  };

  const hideModal = () => {
    setShow(false);
  };
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

                  <article className="thumbnail-wrapper" >
                    <img src={follower?.user_image} alt="image" className="user-image" />
                  </article>

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

        {following &&
          following.map((following, index) => {
            const { post_image, store_id, product_name, product_id, user_id } = following;
            const id = product_id
            const userid = user_id;
            return (
              <article key={index} className="user-profile">
                <Link className="profilewrapper"
                  to={
                    {
                      pathname: "/user-profile",
                      state: userid
                    }
                  }>
                  <picture className="img my-4">
                    <img src={following?.user_image} alt="img"></img>

                  </picture>
                  <h3>{following?.first_name} {following?.last_name} </h3>
                </Link>
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
                        <span className="icon" onClick={() => hanldeClick(following)}>
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

                  {show && <Modal data={selectedData} handleClose={hideModal} />}
                  {/* <CardDetails {...props} /> */}
                </LiveCardStyle>
              </article>
            )
          })}
      </article>
    </FollowingStyle>
  );
};

const Modal = ({ handleClose, data }) => {

  const loginuserid = sessionStorage.getItem("userId")
  const [comment, setcomment] = useState()
  const [text, settext] = useState("")
  const [productid, setproductid] = useState()
  const [postid, setpostid] = useState()
  const [storeid, setstoreid] = useState()
  const url = `${process.env.REACT_APP_BASE_URL}/posts/comments/${data?.post_id} || ""/${data?.product_id}`
  const posturl = `${process.env.REACT_APP_BASE_URL}/posts/comments`

  useEffect(() => {

    getcomments()
  }, [])




  const getcomments = async () => {
    await axios.get(url).then((res) => {
      setcomment(res.data)
    }).catch((err) => {
      alert(err)
    })
  }



  const postcomment = async () => {
    setproductid(data.product_id)
    setpostid(data.post_id)
    setstoreid(data.store_id)


    const postdata = {
      user_id: loginuserid,
      product_id: productid,
      post_id: postid,

    }

    axios.post(posturl, postdata).then((res) => {
      alert("add")
    }).catch((err) => {
      alert(err)
    })
  }



  return (
    <Modelstyle>
      <div className="modal display-block">
        <section className="modal-main">

          <div className="container">
            <p className="heading">Add Comment</p>
            <article className="cancel" onClick={handleClose}><CrossIcon /></article>
          </div>
          <hr className="mb-3"></hr>
          <CommentStyle>
            <article className="comments">
              {comment &&
                comment.map((data, index) => {
                  return (
                    <article key={index}>
                      <article className="profilewrapper">
                        <picture className="img">
                          <img src={data?.user_image} alt="img"></img>

                        </picture>
                        <h3>{data?.first_name} {data?.last_name}</h3>
                      </article>
                      <h4 className="text">{data.comment}</h4>
                    </article>

                  )
                })
              }

            </article>

            <hr className="mt-4"></hr>
            <article className="comment-box-wrapper">
              <input
                type="text"
                className="comment-input-box"
                placeholder="Write your comment..."
                onChange={(e) => settext(e.target.value)}
              />
              <button className="send-button" onClick={postcomment}>
                <SendButtonIcon />
              </button>
            </article>

          </CommentStyle>




        </section>
      </div>
    </Modelstyle >
  );
};

const PostModal = ({ handleClose, data }) => {


  const img = data[5]

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Modelstyle>
      <div className="modal display-block">
        <section className="modal-main">

          <DiscoverStyle>
            <div className="container">

              <article className="profilewrapper">
                <picture className="img my-4">
                  <img src={data?.[0]} alt="img"></img>

                </picture>
                <h3>{data?.[1]} {data?.[2]} </h3>
              </article>
              <article className="cancel" onClick={handleClose}><CrossIcon /></article>
            </div>
            <hr className="mb-3"></hr>

            <article className="postimagecontainer mb-2">
              <Carousel responsive={responsive}>
                {
                  img.filter(img => img.user_id == data[4]).map((img, index) => {
                    return (

                      <article key={index}>
                        <img src={img?.post_image} alt="img"></img>
                        {/* <p>{img.post_image}</p> */}
                      </article>

                    )

                  })
                }
              </Carousel>
            </article>

          </DiscoverStyle>




        </section>
      </div>
    </Modelstyle >
  );
};

function Discover() {
  const { TabPane } = Tabs;
  const [descover, setdescover] = useState([])
  const [show, setShow] = useState(false);
  const [Postshow, setPostShow] = useState(false);
  const [selectedData, setSelectedData] = useState({});
  const hanldeClick = (data) => {
    setSelectedData(data);
    setShow(true);
  };
  const hanldePostClick = (data) => {
    setSelectedData(data);
    setPostShow(true)
  };
  const hideModal = () => {
    setShow(false);
    setPostShow(false)
  };
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


  let filterpostdata = [
    ...new Map(descover.map((item) => [item["post_id"], item])).values(),
  ];


  let filterproductData = [
    ...new Map(descover.map((item) => [item["product_id"], item])).values(),
  ];

  const filterdata = [...filterpostdata, ...filterproductData];


  const handleLike = (e) => {
    const { product_id, post_id, store_id } = e
    const data = {
      user_id: loginuserid,
      product_id: product_id,
      post_id: post_id,
      store_id: store_id
    }
    console.log(e.rating_user_id, loginuserid)
    if (e.rating_user_id == loginuserid) {
      axios.put(`${process.env.REACT_APP_BASE_URL}/reviews/likes/Dislike/${loginuserid}`, data).then((res) => {
        getDescoverPost();
        alert("Likes")
      }).catch((err) => {
        console.log(err)
        alert("Likes err")

      })

    }
    else {
      axios.post(`${process.env.REACT_APP_BASE_URL}/reviews/likes`, data).then((res) => {
        console.log(res)
        getDescoverPost();
        alert("Dislike ")
      }).catch((err) => {
        console.log(err)
        alert("Dislikes err")
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

            {/* {descover.map((descover, index) => { */}
            {filterdata.map((data, index) => {
              const { post_image, user_id, post_id, store_id, product_name, first_name, last_name, product_id, user_image, rating_user_id, LIKES } = data;
              const id = product_id
              const userid = user_id;

              return (
                <article key={index}>
                  <Link className="profilewrapper"
                    to={
                      {
                        pathname: "/user-profile",
                        state: userid
                      }
                    }>
                    <picture className="img my-4">
                      <img src={user_image} alt="img"></img>

                    </picture>
                    <h3>{first_name} {last_name} </h3>
                  </Link>
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


                    {/* <Link to={
                      {
                        pathname: "/user-profile",
                        state: userid
                      }
                    } > */}
                    <article className="image-thumbnail" onClick={() => hanldePostClick([user_image, first_name, last_name, post_image, user_id, descover])}>
                      <img src={post_image} alt="image" className="thumbnail" />
                    </article>
                    {/* </Link> */}
                    <PostFooterStyle>
                      <article className="post-buttons-wrapper">
                        <button className="post-button">
                          {/* {rating_user_id == loginuserid && LIKES == "1"  */}
                          {rating_user_id == loginuserid
                            ? (<i onClick={() => handleLike(data)} className='fa fa-heart  mx-3 likecolor' ></i>) : (
                              <i onClick={() => handleLike(data)} className={`fa fa-heart  mx-3`} ></i>
                            )}

                          {product_id}{post_id}
                        </button>

                        <button className="post-button">
                          <span className="icon" onClick={() => hanldeClick(data)}>
                            <CommentIcon />
                          </span>
                          4
                        </button>
                        <button className="post-button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                          <span className="icon">
                            <ShareIcon />
                          </span>
                          12
                        </button>
                      </article>


                      {/* *************Share Model************************* */}

                      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h3 class="modal-title" id="exampleModalLabel">Share Now</h3>
                              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                              <article class="d-flex justify-content-center aligns-items-center">
                                <article>
                                  <FacebookShareButton
                                    url={"http://www.igensolution.com/"}
                                    quote={"I-Gen Soultion"}
                                    hashtag={"#hashtag"}
                                    description={"aiueo"}
                                    className="Demo__some-network__share-button"
                                  >
                                    <FacebookIcon class="" size={45} round />
                                  </FacebookShareButton>
                                </article>

                                <article class="mx-3">
                                  <TwitterShareButton
                                    title={"test"}
                                    url={"http://www.igensolution.com/"}
                                    hashtags={["hashtag1", "hashtag2"]}
                                  >
                                    <TwitterIcon size={45} round />

                                  </TwitterShareButton>

                                </article>
                                <article>
                                  <LinkedinShareButton>
                                    <LinkedinIcon size={45} round></LinkedinIcon>
                                  </LinkedinShareButton>
                                </article>
                                <article className="mx-3">
                                  <TelegramShareButton>
                                    <TelegramIcon size={45} round></TelegramIcon>
                                  </TelegramShareButton>
                                </article>
                              </article>
                            </div>

                          </div>
                        </div>
                      </div>



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
          {show && <Modal data={selectedData} handleClose={hideModal} />}
          {Postshow && <PostModal data={selectedData} handleClose={hideModal} />}
        </TabPane>
        <TabPane tab="Following" key="following">
          <Following />
        </TabPane>
      </Tabs>
    </DiscoverStyle>
  );
}

export default Discover;
