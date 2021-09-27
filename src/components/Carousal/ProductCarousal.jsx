import React from "react";
import Carousel from "react-multi-carousel";
import Card from "../Card/Card";

import LiveCard from "../Card/LiveCard";

import { ProductCarousalStyle } from "./Carousal";

function ProductCarousal(props) {
  const { heading, cardData } = props;
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <ProductCarousalStyle>
      <article className="carousal-header">
        <h3 className="carousal-title">{heading}</h3>
        <div className="line"></div>
      </article>

      <article className="carousal-wrapper">
        <Carousel responsive={responsive}>
          {cardData.map((data, index) => {
            return (
              <article key="index" className="card-wrapper">
                <Card cardType="liveCard" {...data} />
              </article>
            );
          })}
        </Carousel>
      </article>
    </ProductCarousalStyle>
  );
}

export default ProductCarousal;
