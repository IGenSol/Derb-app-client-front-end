import React from "react";

import { HorizontalCardStyle } from "./Card.style";

function HorizontalCard(props) {
  const { icon, heading, description, className } = props;
  return (
    <HorizontalCardStyle className={className}>
      {icon && (
        <picuture className="thumbnail-wrapper">
          <span className="icon">{icon}</span>
        </picuture>
      )}

      <figcaption className="card-details">
        {heading && <h2 className="heading">{heading}</h2>}
        {description && <p className="description">{description}</p>}
      </figcaption>
    </HorizontalCardStyle>
  );
}

export default HorizontalCard;
