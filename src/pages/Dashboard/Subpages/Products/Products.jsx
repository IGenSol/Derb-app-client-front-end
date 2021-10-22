import React from "react";
import { ProductStyle } from "./Products.style";
import Card from "../../../../components/Card/Card";

function Products() {
  return (
    <ProductStyle>
      <Card cardType="productCard" />
    </ProductStyle>
  );
}

export default Products;
