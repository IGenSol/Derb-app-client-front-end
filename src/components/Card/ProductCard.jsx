import React from "react";

import { DeleteIcon, EditIcon } from "../../svgs/index";
import { ProductCardStyle } from "./Card.style";

function ProductCard(props) {
  const { image, imageAlt, heading, price, oldPrice } = props;
  return (
    <ProductCardStyle>
      {image && (
        <picture className="thumbnail-wrapper">
          <article className="image-hover-buttons">
            <button className="icon">
              <EditIcon />
            </button>
            <button className="icon">
              <DeleteIcon />
            </button>
          </article>
          <img src={image} alt={imageAlt} className="thumbnail" />
        </picture>
      )}

      <figcaption className="card-detail">
        <h2 className="heading">{heading}</h2>
        <h3 className="price">
          ${price} <strike>${oldPrice}</strike>
        </h3>
      </figcaption>
    </ProductCardStyle>
  );
}

export default ProductCard;
