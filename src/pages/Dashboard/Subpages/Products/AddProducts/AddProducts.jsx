import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { CameraIcon, LeftArrowIcon } from "../../../../../svgs";
import { AddProductsStyle } from "./AddProducts.style";


function AddProducts(props) {
  const [productId, setProductId] = useState(0);
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [productCatagory, setProductCatagory] = useState("");
  const [productSize, setProductSize] = useState("");
  const [productColor, setProductColor] = useState("");
  const [image, setImage] = useState([]);
  const [productDescription, setProductDescription] = useState("");

  const url = `${process.env.REACT_APP_BASE_URL}/products`;


  const [file, setFile] = useState([]);


  function uploadMultipleimage(e) {
    let ImagesArray = Object.entries(e.target.files).map((e) =>
      URL.createObjectURL(e[1])
    );
    setFile([...file, ...ImagesArray]);
    setImage([...image, e.target.files]);
  }

  const formData = new FormData();
  formData.append("product_id", productId);
  formData.append("product_name", productName);
  formData.append("product_price", productPrice);
  formData.append("category_id", productCatagory);
  formData.append("store_id", productSize);
  formData.append("description", productDescription);
  formData.append("product_color", productColor);
  image.forEach(_file => {
    for (let i = 0; i < _file.length; i++) {
      const element = _file[i];
      // formData.append("post_image", _file[i], i + "");
      formData.append("image", _file[i], i + "");
    }
  });





  const postProductData = (e) => {
    e.preventDefault();
    axios
      .post(url, formData)
      .then((res) => {

        props.history.push("/dashboard/products-list");
      })
      .catch((err) => {
        console.log(`there is an error >> ${err}`);
      });

  };

  return (
    <AddProductsStyle>
      <article className="card">
        <Link to="/dashboard/products-list" className="go-back-link">
          <span className="icon">
            <LeftArrowIcon />
          </span>
          Back
        </Link>
        <h3 className="title">Add Product</h3>

        <form className="card-body">
          <input
            type="file"
            id="upload-product-photo"
            className="input-img-upload"
            onChange={uploadMultipleimage}
          />

          <label htmlFor="upload-product-photo" className="upload-photo">
            {file[0] ? (
              <img className="preview-image" src={file[0]}></img>
            ) : (
              <span className="icon">
                <CameraIcon />
              </span>
            )}

          </label>

          <article className="product-images-list">

            <label htmlFor="upload-product-photo" className="upload-photo">
              {file[1] ? (
                <img className="preview-image" src={file[1]}></img>
              ) : (
                <span className="icon">
                  <CameraIcon />
                </span>
              )}
              <input type="file" id="upload-product-photo" onChange={uploadMultipleimage} />
            </label>


            <label htmlFor="upload-product-photo" className="upload-photo">
              {file[2] ? (
                <img className="preview-image" src={file[2]}></img>
              ) : (
                <span className="icon">
                  <CameraIcon />
                </span>
              )}
              <input type="file" id="upload-product-photo" onChange={uploadMultipleimage} />
            </label>


            <label htmlFor="upload-product-photo" className="upload-photo">
              {file[3] ? (
                <img className="preview-image" src={file[3]}></img>
              ) : (
                <span className="icon">
                  <CameraIcon />
                </span>
              )}
              <input type="file" id="upload-product-photo" onChange={uploadMultipleimage} />
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
            <button onClick={postProductData} className="add-product-button">
              Add Product
            </button>
          </article>
        </form>
      </article>
    </AddProductsStyle>
  );
}

export default AddProducts;
