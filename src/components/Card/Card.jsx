import React from "react";

import HorizontalCard from "./HorizontalCard";
import LiveCard from "./LiveCard";
import VerticalCard from "./VerticalCard";

function Card(props) {
  const { cardType } = props;
  switch (cardType) {
    case "horizontalCard":
      return <HorizontalCard {...props} />;

    case "liveCard":
      return <LiveCard {...props} />;

    case "verticalCard":
      return <VerticalCard {...props} />;

    default:
      <HorizontalCard {...props} />;
  }
}

export default Card;
