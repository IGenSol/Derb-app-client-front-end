import React from "react";

import { DeleteIcon, EditIcon } from "../../svgs/index";
import { ProductCardStyle } from "./Card.style";

function ProductCard(props) {
  const {
    image,
    imageAlt,
    product_name,
    product_price,
    product_old_price,
    deleteProduct,
    updateProduct,
    id,
  } = props;
  return (
    <ProductCardStyle>
      <picture className="thumbnail-wrapper">
        <article className="image-hover-buttons">
          <button className="icon" onClick={() => updateProduct(id)}>
            <EditIcon />
          </button>
          <button className="icon" onClick={() => deleteProduct(id)}>
            <DeleteIcon />
          </button>
        </article>
        <img
          src="/images/products-images/cream-image.jpg"
          alt="Product Image"
          className="thumbnail"
        />
      </picture>

      <figcaption className="card-detail">
        <h2 className="heading">{product_name}</h2>
        <h3 className="price">
          ${product_price} <strike>${product_old_price}</strike>
        </h3>
      </figcaption>
    </ProductCardStyle>
  );
}

export default ProductCard;
