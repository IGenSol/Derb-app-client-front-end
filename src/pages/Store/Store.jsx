import React from "react";

import NavigationCarousal from "../../components/Carousal/NavigationCarousal";
import ProductCarousal from "../../components/Carousal/ProductCarousal";
import { trendingProductsData } from "../../mockData/homeData";
import { trendingItems } from "../../mockData/trendingItems";

import { StoreStyle, SiteBannerStyle } from "./Store.style";

const SiteBanner = () => {
  return (
    <SiteBannerStyle>
      <picutre className="banner-wrapper">
        <img
          src="./images/banner-images/banner-one.jpg"
          alt="banner image"
          className="site-banner"
        />
      </picutre>
    </SiteBannerStyle>
  );
};

function Store() {
  return (
    <StoreStyle>
      <NavigationCarousal />
      <SiteBanner />
      <ProductCarousal heading="Trending" cardData={trendingItems} />
      <ProductCarousal heading="HOT Products" cardData={trendingItems} />
    </StoreStyle>
  );
}

export default Store;
