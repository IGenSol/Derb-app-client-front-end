import React from "react";
import {
  CommentIcon,
  HeartIcon,
  LikeIcon,
  MoreButtonIcon,
  SendButtonIcon,
  ShareIcon,
} from "../../svgs";

import { CardBodyStyle, PostFooterStyle, PostCardStyle } from "./Card.style";

const PostFooter = () => {
  return (
    <PostFooterStyle>
      <article className="post-buttons-wrapper">
        <button className="post-button">
          <span className="icon">
            <LikeIcon />
          </span>
          12
        </button>
        <button className="post-button">
          <span className="icon">
            <CommentIcon />
          </span>
          12
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
  );
};

const CardBody = (props) => {
  const { post_description, picture_url, Video_url } = props;
  return (
    <CardBodyStyle>
      {post_description && <h3 className="post-text">{post_description}</h3>}
      {picture_url && (
        <picture className="image-wrapper">
          <img src={picture_url} alt="Post Image" className="post-image" />
        </picture>
      )}
    </CardBodyStyle>
  );
};

function PostCard(props) {
  const { userName, createdAt, userImage } = props;
  return (
    <PostCardStyle>
      <article className="card-header">
        <article className="user-details">
          <img
            src="./images/users/user-four.jpg"
            alt="User Image"
            className="user-img"
          />
          <article className="user-info">
            <h2 className="user-name">Jahangir Khan</h2>
            <h4 className="post-date">04 Dec at 5:34 PM</h4>
          </article>
        </article>
        <article className="more-options">
          <button className="more-option-button">
            <MoreButtonIcon />
          </button>
        </article>
      </article>
      <CardBody {...props} />
      <PostFooter />
    </PostCardStyle>
  );
}

export default PostCard;
