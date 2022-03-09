import React, { useEffect, useState } from "react";
import { Tabs } from "antd";
import {
  LivePost,
  ProfileModalStyle,
  ProfileTabsStyle,
  UserProfileStyle,
} from "./UserProfile.style";
import axios from "axios";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { PostFooterStyle } from "../Card/Card.style";
import { CommentIcon, CrossIcon, LikeIcon, SendButtonIcon, ShareIcon } from "../../svgs";
import { Modelstyle } from "../../pages/Feed/Feed.style";
import { CommentStyle } from "../../pages/Discover/Discover.style";

function UserProfile() {
  const location = useLocation();

  if (location.state !== undefined) {
    var userid = location.state;
  }

  const url = `${process.env.REACT_APP_BASE_URL}/users/${userid}`;
  const followerCounturl = `${process.env.REACT_APP_BASE_URL}/follower/AllFollowerCount/${userid}`;
  const getfollowers = `${process.env.REACT_APP_BASE_URL}/follower/${userid}`;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [user, setUser] = useState([]);
  const [follow, setfollow] = useState(false)
  const [followerCount, setFollowerCount] = useState([]);

  const loginuserid = sessionStorage.getItem("userId")

  useEffect(() => {
    geFollowers();
    getUserData();
    getfollowerCount();
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
  let follows = ""
  const geFollowers = async () => {
    await axios.get(getfollowers).then((res) => {
      const data = res.data.data
      follows = data.find(function (post, index) {

        if (post.following_id == loginuserid)
          return setfollow(!follow);
      });

    })
  };
  const getfollowerCount = async () => {
    await axios.get(followerCounturl).then((res) => {
      setFollowerCount(res.data.data[0]);
      // follows = data.find(({ following_id }) => following_id == loginuserid);  
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

  const [follower, setfollowerd] = useState({
    follower_id: loginuserid,
    following_id: userid
  })
  const onclickactive = () => {

    // if (rating_user_id == loginuserid) {
    if (follow) {
      axios.put(`${process.env.REACT_APP_BASE_URL}/follower/${loginuserid}`, follower).then((res) => {
        setfollow(!follow)

      }).catch((err) => {
        console.log(err)
      })

    }
    else {
      axios.post(`${process.env.REACT_APP_BASE_URL}/follower`, follower).then((res) => {

        setfollow(!follow)

      }).catch((err) => {
        console.log(err)
      })
    }
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
            {/* {rating_user_id == loginuserid ? */}
            {follow ?
              (
                <button className="profile-button" onClick={onclickactive}>Unfollow</button>
              ) :
              (<button className="profile-button" onClick={onclickactive}>Follow</button>)
            }
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
            <h2 className="counter-no">{followerCount?.total_post}</h2>
            <p className="counter-text">Post</p>
          </article>
          <article className="counter">
            <h2 className="counter-no">{followerCount?.total_following}</h2>
            <p className="counter-text">Following</p>
          </article>
          <article className="counter">
            <h2 className="counter-no">{followerCount?.total_followers}</h2>
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

const Modal = ({ handleClose, data }) => {

  const loginuserid = sessionStorage.getItem("userId")
  const [comment, setcomment] = useState()
  const [text, settext] = useState("")
  const [productid, setproductid] = useState()
  const [postid, setpostid] = useState()
  const [storeid, setstoreid] = useState()
  const url = `${process.env.REACT_APP_BASE_URL}/posts/comments/''/7`
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



const PorfileModal = (props) => {


  const { isModalVisible, handleCancel, handleOk, user } = props;
  const [image, setImage] = useState([]);
  const [postimage, setpostimage] = useState();
  const { first_name, last_name, mobile, password, status, picture, id } = user;
  const [userData, setUserData] = useState({
    first_name: first_name,
    last_name: last_name,
    mobile: mobile,
    password: password,
    status: status,
  });



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

          <h2 className="profile-name">{`${userData?.first_name} ${userData?.last_name}`}</h2>
        </article>

        <article className="profile-form-data">
          <h3 className="form-title">Profile Details</h3>

          <article className="form-details">
            <article className="form-content">
              <label>First Name</label>
              <input
                type="text"
                name="first_name"
                value={userData?.first_name}
                onChange={(e) => onInputSubmit(e)}
                className="custom-input"
              />
            </article>
            <article className="form-content">
              <label>Last Name</label>
              <input
                type="text"
                name="last_name"
                value={userData?.last_name}
                onChange={(e) => onInputSubmit(e)}
                className="custom-input"
              />
            </article>
            <article className="form-content">
              <label>Mobile</label>
              <input
                type="tel"
                name="mobile"
                value={userData?.mobile}
                onChange={(e) => onInputSubmit(e)}
                className="custom-input"
              />
            </article>
            <article className="form-content">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={userData?.password}
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
                value={userData?.status}
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
  const [show, setShow] = useState(false);
  const [selectedData, setSelectedData] = useState({});
  const hanldeClick = (data) => {
    setSelectedData(data);
    setShow(true);
  };
  const hideModal = () => {
    setShow(false);
  };

  if (location.state !== undefined) {
    var userid = location.state;
  }
  const userId = sessionStorage.getItem("userId")
  const { TabPane } = Tabs;
  const [postsData, setPostsData] = useState([]);
  const [followerCount, setFollowerCount] = useState([]);
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
                        <span className="icon" onClick={() => hanldeClick(postsData)}>
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
                  {show && <Modal data={selectedData} handleClose={hideModal} />}


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
