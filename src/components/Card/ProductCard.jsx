import React from "react";

import { ProductCardStyle } from "./Card.style";

function ProductCard() {
  return (
    <ProductCardStyle>
      <picture className="thumbnail-wrapper">
        <img
          src="/images/products-images/cream-image.jpg"
          alt="Product Image"
          className="thumbnail"
        />
      </picture>

      <figcaption className="card-detail">
        <h2 className="heading">Cocooil Cream</h2>
        <h3 className="price">
          $500 <strike>$600</strike>
        </h3>
      </figcaption>
    </ProductCardStyle>
  );
}

export default ProductCard;
