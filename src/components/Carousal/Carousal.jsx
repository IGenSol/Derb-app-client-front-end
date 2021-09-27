import React from "react";
import NavigationCarousal from "./NavigationCarousal";
import ProductCarousal from "./ProductCarousal";

function Carousal(props) {
  const { carousalType } = props;
  switch (carousalType) {
    case "navCarousal":
      return <NavigationCarousal {...props} />;

    case "productCarousal":
      return <ProductCarousal {...props} />;

    default:
      return <ProductCarousal {...props} />;
  }
}

export default Carousal;
