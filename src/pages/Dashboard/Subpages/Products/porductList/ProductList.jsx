import React, { useState, useEffect } from "react";
import axios from "axios";

import { ProductListStyle } from "./ProductList.style";
import Card from "../../../../../components/Card/Card";
import { products } from "../../../../../mockData/products";
import { Link } from "react-router-dom";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const url = "http://localhost:5000/api/products";
    const data = await axios.get(url);
    setProducts(data.data);
  };

  console.log(products);

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
