import React from "react";
import { ProfileCardStyle } from "./Card.style";

function ProfileCard(props) {
  const { image, imageAlt, name, place, className } = props;
  return (
    <ProfileCardStyle className={className}>
      {image && (
        <picture className="thumbnail-wrapper">
          <img src={image} alt={imageAlt} className="user-image" />
        </picture>
      )}
      {name && (
        <figcaption className="user-details">
          <h1 className="name">{name}</h1>
          {place && <p className="place">{place}</p>}
        </figcaption>
      )}
    </ProfileCardStyle>
  );
}

export default ProfileCard;
