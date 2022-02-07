import React, { useState, useEffect } from "react";
import axios from "axios";

import { ProductListStyle } from "./ProductList.style";
import Card from "../../../../../components/Card/Card";
import { Link } from "react-router-dom";
import UpdateProducts from "../UpdateProducts/UpdateProducts";

function ProductList(props) {
  const [products, setProducts] = useState([]);
  const url = `${process.env.REACT_APP_BASE_URL}/products`;

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const data = await axios.get(url);
    setProducts(data.data);
  };

  const deleteProduct = async (id) => {
    await axios.delete(`${url}/${id}`).then((res) => {
      console.log(`item Deleted >> ${JSON.stringify(res)}`);
    });

    getProducts();
  };

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
          return (
            <Card
              key={index}
              cardType="productCard"
              {...product}
              deleteProduct={deleteProduct}
            />
          );
        })}
      </article>
    </ProductListStyle>
  );
}

export default ProductList;
