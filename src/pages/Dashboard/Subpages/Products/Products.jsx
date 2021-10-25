import React from "react";
import { ProductStyle } from "./Products.style";
import Card from "../../../../components/Card/Card";
import { products } from "../../../../mockData/products";

function Products() {
  return (
    <ProductStyle>
      {products.map((product, index) => {
        return <Card key={index} cardType="productCard" {...product} />;
      })}
    </ProductStyle>
  );
}

export default Products;
