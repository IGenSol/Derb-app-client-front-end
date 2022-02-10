import React from "react";
import { NavgationCarousalStyle } from "../../components/Carousal/Carousal";
import Carousel from "react-multi-carousel";
import ProductCarousal from "../../components/Carousal/ProductCarousal";
import { trendingItems } from "../../mockData/trendingItems";
import { StoreStyle, SiteBannerStyle } from "./Store.style";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

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

  const [categorydata, setcategorydata] = useState([])

  const categoryurl = `${process.env.REACT_APP_BASE_URL}/categories`

  useEffect(() => {
    getcategory();
  }, [])

  const getcategory = async () => {
    await axios.get(categoryurl).then((res) => {
      setcategorydata(res.data.data)
    }).catch((err) => {
      alert(err)
    })
  }




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
    <StoreStyle>
      {/* <NavigationCarousal /> */}
      <NavgationCarousalStyle>
        <Carousel responsive={responsive} centerMode="true">
          {categorydata &&
            categorydata.map((categorydata, index) => {
              const { category_name, primary_category_image } = categorydata;

              return (
                <a key={index} href="" className="carouselItem">
                  <span className="tab-image">
                    <img className="image" src={primary_category_image} alt="category" />
                  </span>
                  <p className="text">{category_name}</p>
                </a>
              );
            })}
        </Carousel>
      </NavgationCarousalStyle>
      <SiteBanner />
      <ProductCarousal heading="Trending" cardData={trendingItems} />
      <ProductCarousal heading="HOT Products" cardData={trendingItems} />
    </StoreStyle>
  );
}

export default Store;
