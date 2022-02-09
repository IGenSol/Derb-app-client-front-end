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

const PostFooter = (props) => {
  const { likes, rate, comment } = props
  return (
    <PostFooterStyle>
      <article className="post-buttons-wrapper">
        <button className="post-button">
          <span className="icon">
            <LikeIcon />
          </span>
          {likes}
        </button>
        <button className="post-button">
          <span className="icon">
            <CommentIcon />
          </span>
          {comment}
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
          <SendButtonIcon  />
        </button>
      </article>
    </PostFooterStyle>
  );
};


const CardBody = (props) => {
  const { post_description, post_image, Video_url } = props;
  return (
    <CardBodyStyle>
      {post_description && <h3 className="post-text">{post_description}</h3>}
      {post_image && (
        <picture className="image-wrapper">
          <img src={post_image} alt="Post Image" className="post-image" />
        </picture>
      )}
    </CardBodyStyle>
  );
};

function PostCard(props) {
  const { userName, created_date, post_image, first_name, last_name } = props;
  return (
    <PostCardStyle>
      <article className="card-header">
        <article className="user-details">
          <img
            src={post_image}
            alt="User Image"
            className="user-img"
          />
          <article className="user-info">
            <h2 className="user-name">{first_name}{last_name}</h2>
            <h4 className="post-date">{created_date}</h4>
          </article>
        </article>
        <article className="more-options">
          <button className="more-option-button">
            <MoreButtonIcon />
          </button>
        </article>
      </article>
      <CardBody {...props} />
      <PostFooter {...props} />
    </PostCardStyle>
  );
}

export default PostCard;
