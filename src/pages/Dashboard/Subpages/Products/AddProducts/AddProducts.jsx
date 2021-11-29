import axios from "axios";
import React, { useState } from "react";

import { CameraIcon } from "../../../../../svgs";
import { AddProductsStyle } from "./AddProducts.style";

function AddProducts() {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [productDiscount, setProductDiscount] = useState(0);
  const [productCatagory, setProductCatagory] = useState("");
  const [productSize, setProductSize] = useState("");
  const [productDescription, setProductDescription] = useState("");

  const postProductData = (e) => {
    e.preventDefault();
    const url = "http://localhost:5000/api/products";
    axios
      .post(url, {
        product_name: productName,
        product_price: productPrice,
        product_id: 30,
      })
      .then(() => {
        alert("data pushed");
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
            <article className="input-layout">
              <h3>Discount:</h3>
              <input
                type="number"
                className="custom-input"
                placeholder="Discount"
                value={productDiscount}
                onChange={(e) => setProductDiscount(e.target.value)}
              />
            </article>

            <article className="input-layout">
              <h3>Product Category:</h3>
              <select
                className="custom-input"
                onChange={(e) => setProductCatagory(e.target.value)}
              >
                <option value="food">Food</option>
                <option value="electronics">Electronic</option>
                <option value="vehicle">Vechicle</option>
              </select>
            </article>

            <article className="input-layout">
              <h3>Product Size:</h3>
              <select
                className="custom-input"
                onChange={(e) => setProductSize(e.target.value)}
              >
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
                <option value="extraLarge">Extra Large</option>
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
            <button className="add-product-button" onClick={postProductData}>
              Add Product
            </button>
          </article>
        </form>
      </article>
    </AddProductsStyle>
  );
}

export default AddProducts;
