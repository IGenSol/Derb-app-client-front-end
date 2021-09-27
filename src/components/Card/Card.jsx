import React from "react";

import HorizontalCard from "./HorizontalCard";
import LiveCard from "./LiveCard";
import ProfileCard from "./ProfileCard";

function Card(props) {
  const { cardType } = props;
  switch (cardType) {
    case "horizontalCard":
      return <HorizontalCard {...props} />;

    case "liveCard":
      return <LiveCard {...props} />;

    case "profileCard":
      return <ProfileCard {...props} />;

    default:
      <HorizontalCard {...props} />;
  }
}

export default Card;
