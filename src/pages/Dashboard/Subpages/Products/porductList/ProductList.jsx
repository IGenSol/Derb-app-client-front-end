import React, { useState } from "react";

import { ProductListStyle } from "./ProductList.style";
import Card from "../../../../../components/Card/Card";
import { products } from "../../../../../mockData/products";
import { Link } from "react-router-dom";

function ProductList() {
  return (
    <ProductListStyle>
      <article className="section-header">
        <h2 className="title">Products</h2>
        <Link to="/dashboard/add-products" className="add-product-button">
          Add Product
        </Link>
      </article>

      <article className="products-wrapper">
        {products.map((product, index) => {
          return <Card key={index} cardType="productCard" {...product} />;
        })}
      </article>
    </ProductListStyle>
  );
}

export default ProductList;
