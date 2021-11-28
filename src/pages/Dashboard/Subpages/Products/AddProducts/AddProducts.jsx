import React from "react";

import { CameraIcon } from "../../../../../svgs";
import { AddProductsStyle, ProductFormStyle } from "./AddProducts.style";

const ProductForm = () => {
  return (
    <ProductFormStyle>
      <article className="input-layout">
        <h3>Product Name:</h3>
        <input
          type="text"
          className="custom-input"
          placeholder="Product Name"
        />
      </article>
      <article className="input-layout">
        <h3>Product Rate:</h3>
        <input
          type="text"
          className="custom-input"
          placeholder="Product Rate"
        />
      </article>
      <article className="input-layout">
        <h3>Discount:</h3>
        <input type="text" className="custom-input" placeholder="Discount" />
      </article>

      <article className="input-layout">
        <h3>Product Category:</h3>
        <select className="custom-input">
          <option>Food</option>
          <option>Electronic</option>
          <option>Vechicle</option>
        </select>
      </article>

      <article className="input-layout">
        <h3>Product Size:</h3>
        <select className="custom-input">
          <option>Small</option>
          <option>Medium</option>
          <option>Large</option>
          <option>Extra Large</option>
        </select>
      </article>
      <article className="input-layout">
        <h3>Product Description:</h3>
        <textarea
          className="custom-input"
          name="description"
          cols="30"
          rows="10"
        ></textarea>
      </article>
    </ProductFormStyle>
  );
};

function AddProducts() {
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
            <span class="icon">
              <CameraIcon />
            </span>
            <input type="file" id="upload-product-photo" />
          </label>

          <article>
            <label htmlFor="upload-product-photo" className="upload-photo">
              <span class="silde-icon">
                <CameraIcon />
              </span>
              <input type="file" id="upload-product-photo" />
            </label>
            <label htmlFor="upload-product-photo" className="upload-photo">
              <span class="silde-icon">
                <CameraIcon />
              </span>
              <input type="file" id="upload-product-photo" />
            </label>
            <label htmlFor="upload-product-photo" className="upload-photo">
              <span class="silde-icon">
                <CameraIcon />
              </span>
              <input type="file" id="upload-product-photo" />
            </label>
            <label htmlFor="upload-product-photo" className="upload-photo">
              <span class="silde-icon">
                <CameraIcon />
              </span>
              <input type="file" id="upload-product-photo" />
            </label>
            <label htmlFor="upload-product-photo" className="upload-photo">
              <span class="silde-icon">
                <CameraIcon />
              </span>
              <input type="file" id="upload-product-photo" />
            </label>
          </article>

          <ProductForm />

          <article class="card-footer">
            <button className="add-product-button">Add Product</button>
          </article>
        </form>
      </article>
    </AddProductsStyle>
  );
}

export default AddProducts;
