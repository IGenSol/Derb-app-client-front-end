import React from "react";
import Carousel from "react-multi-carousel";

import { navCarouselTab } from "../../mockData/homeData";
import { NavgationCarousalStyle } from "./Carousal";

function NavigationCarousal() {
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
    <NavgationCarousalStyle>
      <Carousel responsive={responsive} centerMode="true">
        {navCarouselTab.map((tab, index) => {
          const { icon, text, url } = tab;

          return (
            <a key={index} href={url} className="carouselItem">
              <span className="tab-icon">{icon}</span>
              <p className="text">{text}</p>
            </a>
          );
        })}
      </Carousel>
    </NavgationCarousalStyle>
  );
}

export default NavigationCarousal;
