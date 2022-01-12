import React, { useContext } from "react";
import { Link } from "react-router-dom";

import Carousal from "../../components/Carousal/Carousal.jsx";

import {
  EyeIcon,
  FacebookIcon,
  HeartIconOutline,
  InstagramIcon,
  TwitterIcon,
} from "../../svgs";
import QuantityCounter from "../QuantityCounter/QuantityCounter";
import { products } from "../../App";

import {
  LiveChannelsStyle,
  ProductDetailStyle,
  ProductFooterStyle,
  ProductSideBarStyle,
  ShowCaseStyle,
} from "./ShowCase.style";

import { trendingItems } from "../../mockData/trendingItems";

const LiveChannels = () => {
  return (
    <LiveChannelsStyle>
      <Carousal
        className="live-channels-wrapper"
        carousalType="productCarousal"
        heading="LiveProducts"
        cardData={trendingItems}
      />
    </LiveChannelsStyle>
  );
};

const ProductSideBar = (props) => {
  const { profilePic, profileAlt } = props;
  return (
    <ProductSideBarStyle>
      <a href="#" className="profile-image-wrapper">
        <img src={profilePic} alt={profileAlt} className="profile-picutre" />
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

const ProductFooter = (props) => {
  const { addItem } = useContext(products);
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

        {/* <article className="quantity">
          <h4 className="heading">Quantitiy</h4>
          <QuantityCounter {...props} />
        </article> */}

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
        <button className="action-btn" onClick={() => addItem(props)}>
          Add to cart
        </button>
        <Link to="/cart-list" className="action-btn">
          Buy Now
        </Link>
      </article>
    </ProductFooterStyle>
  );
};

const ProductDetial = (props) => {
  const { productName, productPrice } = props;

  return (
    <ProductDetailStyle>
      <article className="details-wrapper">
        <article className="header">
          <h3 className="heading">{productName}</h3>
          <h3 className="price">${productPrice}</h3>
        </article>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore non
          voluptatibus praesentium ratione eveniet consectetur, quasi corporis
          accusantium fuga reprehenderit. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Inventore non voluptatibus praesentium ratione
          eveniet consectetur, quasi corporis accusantium fuga reprehenderit.
        </p>
        <ProductFooter {...props} />
      </article>
      <ProductSideBar {...props} />
    </ProductDetailStyle>
  );
};

function ShowCase(props) {
  const { url } = props;

  const product = trendingItems.find((currentItem) => currentItem.url === url);

  return (
    <ShowCaseStyle>
      <section className="product-container">
        <picture className="product-placeholder">
          <img
            src={product.productImage}
            alt={product.imageAlt}
            className="product-image"
          />
        </picture>
        <ProductDetial {...props} {...product} />
      </section>

      <LiveChannels />
    </ShowCaseStyle>
  );
}

export default ShowCase;
