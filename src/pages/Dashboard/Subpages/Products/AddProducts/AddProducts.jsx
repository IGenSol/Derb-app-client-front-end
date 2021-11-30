import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { CameraIcon } from "../../../../../svgs";
import { AddProductsStyle } from "./AddProducts.style";

function AddProducts() {
  const [productId, setProductId] = useState(0);
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [productDiscount, setProductDiscount] = useState(0);
  const [productCatagory, setProductCatagory] = useState("");
  const [productSize, setProductSize] = useState("");
  const [productColor, setProductColor] = useState("");
  const [productDescription, setProductDescription] = useState("");

  const url = "http://localhost:5000/api/products";

  const postProductData = (e) => {
    e.preventDefault();
    axios
      .post(url, {
        product_id: productId,
        product_name: productName,
        product_price: productPrice,
        category_id: productCatagory,
        store_id: productSize,
        description: productDescription,
        product_color: productColor,
      })
      .then((res) => {
        console.log(`response >> ${JSON.stringify(res)}`);
      })
      .catch((err) => {
        console.log(`there is an error >> ${err}`);
      });
  };

  return (
    <AddProductsStyle>
      <article className="card">
        <h3 className="title">Add Product</h3>

        <form className="card-body">
          <input
            type="file"
            id="upload-product-photo"
            className="input-img-upload"
          />

          <label htmlFor="upload-product-photo" className="upload-photo">
            <span className="icon">
              <CameraIcon />
            </span>
            <input type="file" id="upload-product-photo" />
          </label>

          <article>
            <label htmlFor="upload-product-photo" className="upload-photo">
              <span className="silde-icon">
                <CameraIcon />
              </span>
              <input type="file" id="upload-product-photo" />
            </label>
            <label htmlFor="upload-product-photo" className="upload-photo">
              <span className="silde-icon">
                <CameraIcon />
              </span>
              <input type="file" id="upload-product-photo" />
            </label>
            <label htmlFor="upload-product-photo" className="upload-photo">
              <span className="silde-icon">
                <CameraIcon />
              </span>
              <input type="file" id="upload-product-photo" />
            </label>
            <label htmlFor="upload-product-photo" className="upload-photo">
              <span className="silde-icon">
                <CameraIcon />
              </span>
              <input type="file" id="upload-product-photo" />
            </label>
            <label htmlFor="upload-product-photo" className="upload-photo">
              <span className="silde-icon">
                <CameraIcon />
              </span>
              <input type="file" id="upload-product-photo" />
            </label>
          </article>

          <section className="form-content">
            <article className="input-layout">
              <h3>Product ID:</h3>
              <input
                type="text"
                className="custom-input"
                placeholder="Product ID"
                name="productId"
                value={productId}
                onChange={(e) => setProductId(e.target.value)}
              />
            </article>
            <article className="input-layout">
              <h3>Product Name:</h3>
              <input
                type="text"
                className="custom-input"
                placeholder="Product Name"
                name="productName"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
              />
            </article>
            <article className="input-layout">
              <h3>Product Price:</h3>
              <input
                type="number"
                className="custom-input"
                placeholder="Product Rate"
                value={productPrice}
                onChange={(e) => setProductPrice(e.target.value)}
              />
            </article>
            {/* <article className="input-layout">
              <h3>Discount:</h3>
              <input
                type="number"
                className="custom-input"
                placeholder="Discount"
                value={productDiscount}
                onChange={(e) => setProductDiscount(e.target.value)}
              />
            </article> */}

            <article className="input-layout">
              <h3>Product Category:</h3>
              <select
                className="custom-input"
                onChange={(e) => setProductCatagory(e.target.value)}
              >
                <option value="1">Food</option>
                <option value="2">Electronic</option>
                <option value="3">Vechicle</option>
              </select>
            </article>

            <article className="input-layout">
              <h3>Product Size:</h3>
              <select
                className="custom-input"
                onChange={(e) => setProductSize(e.target.value)}
              >
                <option value="11">Small</option>
                <option value="12">Medium</option>
                <option value="13">Large</option>
                <option value="14">Extra Large</option>
              </select>
            </article>

            <article className="input-layout">
              <h3>Product Color:</h3>
              <select
                className="custom-input"
                onChange={(e) => setProductColor(e.target.value)}
              >
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="yellow">yellow</option>
              </select>
            </article>
            <article className="input-layout">
              <h3>Product Description:</h3>
              <textarea
                className="custom-input"
                name="description"
                cols="30"
                rows="10"
                value={productDescription}
                onChange={(e) => setProductDescription(e.target.value)}
              ></textarea>
            </article>
          </section>

          <article className="card-footer">
            <Link
              onClick={postProductData}
              to="/dashboard/products-list"
              className="add-product-button"
            >
              Add Product
            </Link>
          </article>
        </form>
      </article>
    </AddProductsStyle>
  );
}

export default AddProducts;
