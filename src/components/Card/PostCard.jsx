import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CommentStyle } from "../../pages/Discover/Discover.style";
import { Modelstyle } from "../../pages/Feed/Feed.style";
import {
  CommentIcon,
  CrossIcon,
  LikeIcon,
  SendButtonIcon,
  ShareIcon,
} from "../../svgs";

import { CardBodyStyle, PostFooterStyle, PostCardStyle } from "./Card.style";

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


function PostCard(props) {

  const [show, setShow] = useState(false);
  const [selectedData, setSelectedData] = useState({});
  const hanldeClick = (data) => {
    setSelectedData(data);
    setShow(true);
  };
  const hideModal = () => {
    setShow(false);
  };

  const data = props;

  const { user_id, created_date, first_name, last_name, post_image, post_description } = props;



  const id = user_id;
  return (
    <PostCardStyle
    >
      <article className="card-header"
      >
        <Link className="user-details"
          to={
            {
              pathname: "/user-profile",
              state: id
            }
          } >
          <img
            src={post_image}
            alt="User Image"
            className="user-img"
          />
          <article className="user-info">
            <h2 className="user-name">{first_name}{last_name}</h2>
            <h4 className="post-date">{created_date}</h4>
          </article>
        </Link>
        {/* <article className="more-options">
          <button className="more-option-button">
            <MoreButtonIcon />
          </button>
        </article> */}
      </article>
      {/* <CardBody {...props} /> */}
      <CardBodyStyle>
        {post_description && <h3 className="post-text">{post_description}</h3>}
        {post_image && (
          <picture className="image-wrapper">
            <img src={post_image} alt="Post Image" className="post-image" />
          </picture>
        )}
      </CardBodyStyle>
      {/* <PostFooter {...props} /> */}
      <PostFooterStyle>
        <article className="post-buttons-wrapper">
          <button className="post-button">
            <span className="icon">
              <LikeIcon />
            </span>
            {props?.likes}
          </button>
          <button className="post-button">
            <span className="icon" onClick={() => hanldeClick(data)}>
              <CommentIcon />
            </span>
            {props?.comment}
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
    </PostCardStyle>

  );
}

export default PostCard;
