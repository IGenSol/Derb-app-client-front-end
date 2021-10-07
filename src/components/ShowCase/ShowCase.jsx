import React from "react";
import { Link } from "react-router-dom";

import Card from "../../components/Card/Card";
import Carousal from "../../components/Carousal/Carousal.jsx";
import { liveChannels } from "../../mockData/showcaseData";
import {
  EyeIcon,
  FacebookIcon,
  HeartIconOutline,
  InstagramIcon,
  TwitterIcon,
} from "../../svgs";
import QuantityCounter from "../QuantityCounter/QuantityCounter";

import {
  LiveChannelsStyle,
  ProductDetailStyle,
  ProductFooterStyle,
  ProductSideBarStyle,
  ShowCaseStyle,
} from "./ShowCase.style";

const LiveChannels = () => {
  return (
    <LiveChannelsStyle>
      <Carousal
        className="live-channels-wrapper"
        carousalType="productCarousal"
        heading="LiveProducts"
        cardData={liveChannels}
      />
    </LiveChannelsStyle>
  );
};

const ProductSideBar = () => {
  return (
    <ProductSideBarStyle>
      <a href="#" className="profile-image-wrapper">
        <img
          src="./images/users/user-four.jpg"
          alt="User Profile Image"
          className="profile-picutre"
        />
      </a>

      <article className="counter">
        <span className="icon">
          <HeartIconOutline />
        </span>
        <span className="counter-text">234</span>
      </article>

      <article className="counter">
        <span className="icon">
          <EyeIcon />
        </span>
        <span className="counter-text">234</span>
      </article>
    </ProductSideBarStyle>
  );
};

const ProductFooter = () => {
  return (
    <ProductFooterStyle>
      <article className="product-properties">
        <article className="ingrediants-wrapper">
          <h4 className="heading">key Ingredients</h4>
          <ul className="ingrediants">
            <li className="ingrediant">Bamboo Fibers</li>
            <li className="ingrediant">Castor Oil</li>
            <li className="ingrediant">Neem Oil</li>
          </ul>
        </article>

        <article className="quantity">
          <h4 className="heading">Quantitiy</h4>
          <QuantityCounter />
        </article>

        <article className="share-link">
          <h4 className="heading">Share it </h4>
          <article className="icons-wrapper">
            <a href="#" target="_blank" className="icon">
              <FacebookIcon />
            </a>
            <a href="#" target="_blank" className="icon">
              <InstagramIcon />
            </a>
            <a href="#" target="_blank" className="icon">
              <TwitterIcon />
            </a>
          </article>
        </article>
      </article>
      <article className="buttons-wrapper">
        <Link to="/cart-list" className="action-btn">
          Add to cart
        </Link>
        <button className="action-btn">Buy Now</button>
      </article>
    </ProductFooterStyle>
  );
};

const ProductDetial = () => {
  return (
    <ProductDetailStyle>
      <article className="details-wrapper">
        <article className="header">
          <h3 className="heading">GRATIATE</h3>
          <h3 className="price">$128.0</h3>
        </article>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore non
          voluptatibus praesentium ratione eveniet consectetur, quasi corporis
          accusantium fuga reprehenderit. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Inventore non voluptatibus praesentium ratione
          eveniet consectetur, quasi corporis accusantium fuga reprehenderit.
        </p>
        <ProductFooter />
      </article>
      <ProductSideBar />
    </ProductDetailStyle>
  );
};

function ShowCase() {
  return (
    <ShowCaseStyle>
      <section className="product-container">
        <Card
          cardType="liveCard"
          productImage="./images/products-images/camera-image.jpg"
          imageAlt="Camera Image"
          profilePic="./images/users/user-four.jpg"
          profileAlt="User Image"
          idUrl="#"
        />
        <ProductDetial />
      </section>

      <LiveChannels />
    </ShowCaseStyle>
  );
}

export default ShowCase;
