import React from "react";
import { VerticalCardStyle } from "./Card.style";

function VerticalCard(props) {
  const { icon, image, imageAlt, heading, subHeading, className, url } = props;
  return (
    <VerticalCardStyle to={url} className={className}>
      {image ? (
        image && (
          <picture className="thumbnail-wrapper">
            <img src={image} alt={imageAlt} className="user-image" />
          </picture>
        )
      ) : (
        <span class="card-icon">{icon}</span>
      )}
      {heading && (
        <figcaption className="user-details">
          <h1 className="heading">{heading}</h1>
          {subHeading && <p className="sub-heading">{subHeading}</p>}
        </figcaption>
      )}
    </VerticalCardStyle>
  );
}

export default VerticalCard;
