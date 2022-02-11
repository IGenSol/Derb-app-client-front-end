import React from "react";
import { Link } from "react-router-dom";

import { EyeIcon, HeartIcon } from "../../svgs";
import { LiveCardStyle } from "./Card.style";

const CardSidebar = (props) => {
  const { idUrl, profilePic, profileAlt } = props;
  return (
    <article className="card-tabs">
      <ul className="tabs-wrapper">
        <li className="icon-container">
          <button className="like-button">
            <HeartIcon />
          </button>
          <span className="count">3</span>
        </li>
        <li className="icon-container">
          <span className="eye-icon">
            <EyeIcon />
          </span>
          <span className="count">23k</span>
        </li>
        {/* <li className="icon-container">
          <a href={idUrl} className="profile-link">
            <img
              src={profilePic}
              alt={profileAlt}
              className="user-profile-image"
            />
          </a>
        </li> */}
      </ul>
    </article>
  );
};

const CardDetails = (props) => {
  const { comments } = props;
  return (
    <figcaption className="details">
      <article className="card-text">
        <article className="comment-wrapper">
          {comments &&
            comments.map((comment, index) => {
              const { name, text, image, imageAlt } = comment;
              return (
                <article key={index} className="comments">
                  <picture className="profile-image">
                    <img src={image} alt={imageAlt} className="user-profile" />
                  </picture>
                  <article className="user-details">
                    <h4 className="user-name">{name}</h4>
                    <p className="comment">{text}</p>
                  </article>
                </article>
              );
            })}
        </article>
        {/* <input type="text" className="comment-box" placeholder="Comment.." /> */}
      </article>

      <CardSidebar {...props} />
    </figcaption>
  );
};

function LiveCard(props) {
  const { product_images, product_id, product_name } = props;
  let id = product_id;
  return (
    <LiveCardStyle>
      <Link to={
        {
          pathname: `/show-case/${product_name}`,
          state: id
        }}
        className="buynow-btn">
        buy Now
      </Link>
      {product_images && (
        <picture className="image-thumbnail">
          <img src={product_images} alt="Product_Image" className="thumbnail" />
        </picture>
      )}

      <CardDetails {...props} />
    </LiveCardStyle>
  );
}

export default LiveCard;
