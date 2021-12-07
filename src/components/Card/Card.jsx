import React from "react";

import HorizontalCard from "./HorizontalCard";
import LiveCard from "./LiveCard";
import PostCard from "./PostCard";
import ProductCard from "./ProductCard";
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

    case "productCard":
      return <ProductCard {...props} />;

    case "postCard":
      return <PostCard {...props} />;

    default:
      <HorizontalCard {...props} />;
  }
}

export default Card;
