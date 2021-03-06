import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
import { useLocation } from "react-router-dom";

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
        {/* <img src={profilePic} alt={profileAlt} className="profile-picutre" /> */}
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
  const { product } = props


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
        <button className="action-btn" onClick={() => addItem(product)}>
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
  const { addItem } = useContext(products);
  const { product } = props;
  const [promocode, setpromocode] = useState("")
  const [discount, setdiscount] = useState(false)


  const handlediscount = () => {
    // if (product.promocode === promocode) {
    if (product.promo_code == promocode) {
      sessionStorage.setItem("promocode", promocode)
      toast.success("Promo code Added", {
        theme: 'dark'
      });
      setdiscount(true)
    }
    else {
      sessionStorage.setItem("promocode", "")
      toast.error("Promo code Not Valid", {
        theme: 'dark'
      });
    }
  }




  return (
    <ProductDetailStyle>
      <article className="details-wrapper">
        <article className="header">
          <h3 className="heading">{product?.product_name}</h3>
          <h3 className="price">${product?.product_price}</h3>

        </article>
        {discount &&
          <article className="header my-3">
            <h3 className="heading">Discount</h3>
            <h3 className="price">{product?.discount.toString().slice(1)}%</h3>
          </article>
        }

        <p className="description">
          {product?.description}
        </p>
        {/* <ProductFooter {...props} /> */}
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
          <article className="discountbtn">
            {product?.discount >= 1 &&
              <article className="input-layout">
                <h3>Promo Code:</h3>
                <input type="text" className="custom-input" onChange={(e) => setpromocode(e.target.value)} ></input>
                <button className="btn" onClick={handlediscount}>Add</button>

              </article>}

          </article>
          <article className="buttons-wrapper">
            <button className="action-btn" onClick={() => addItem(product)}>
              Add to cart
            </button>
            <Link to="/cart-list" className="action-btn">
              Buy Now
            </Link>
          </article>
        </ProductFooterStyle>
      </article>
      <ProductSideBar {...props} />
    </ProductDetailStyle>
  );
};

function ShowCase(props) {

  const location = useLocation();
  const [product, setproduct] = useState([]);

  if (location.state !== undefined) {
    var productid = location.state;
  }


  const url = `${process.env.REACT_APP_BASE_URL}/products/${productid}`

  useEffect(() => {
    getProduct()
  }, [])

  const getProduct = async () => {
    await axios.get(url).then((res) => {
      setproduct(res.data)
    }).catch((err) => {
      alert(err)
    })
  }


  return (
    <>
      <ToastContainer
      />
      <ShowCaseStyle>

        <section className="product-container">
          <picture className="product-placeholder">
            <img
              src={product?.product_images}
              alt="image"
              className="product-image"
            />
          </picture>
          <ProductDetial product={product} />
        </section>

        {/* <LiveChannels /> */}
      </ShowCaseStyle>
    </>
  );
}

export default ShowCase;
