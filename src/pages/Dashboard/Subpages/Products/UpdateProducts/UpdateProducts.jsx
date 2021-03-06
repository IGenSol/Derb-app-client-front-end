import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { CameraIcon, LeftArrowIcon } from "../../../../../svgs";
import { UpdateProductsStyle } from "./UpdateProducts.style";

function UpdateProducts(props) {
  const location = useLocation();

  if (location.state !== undefined) {
    var productId = location.state;

  }
  const [productData, setProductData] = useState({
    productId: "",
    product_name: "",
    product_price: "",
  });
  const [productImages, setProductImages] = useState();

  const url = `${process.env.REACT_APP_BASE_URL}/products`;

  useEffect(() => {
    updateProductData();
  }, []);

  const updateProductData = async () => {
    await axios
      .get(`${url}/${productId}`)
      .then((res) => {
        setProductData(res.data);
        setProductImages(res.data.product_images)
      })
      .catch((err) => {
        console.log(`error >> ${err}`);
      });
  };

  const editProductValue = (e) => {
    setProductData({
      ...productData,
      [e.target.name]: e.target.value,
    });
  };

  // const onFormSubmit = async (e) => {
  //   debugger;
  //   e.preventDefault();

  //   await axios
  //     .put(`${url}/${productSlug}`, productData)
  //     .then(() => {
  //       alert("data is updated");
  //     })
  //     .catch((err) => {
  //       console.log(`error >> ${err}`);
  //     });

  //   props.history.push("/dashboard/products-list");
  // };

  return (
    <UpdateProductsStyle>
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
          />

          <label htmlFor="upload-product-photo" className="upload-photo">
            {productImages ? (
              <img className="preview-image" src={productImages}></img>
            ) : (
              <span className="icon">
                <CameraIcon />
              </span>
            )}
            <input type="file" id="upload-product-photo" />
          </label>

          <article className="product-images-list">
            <label htmlFor="upload-product-photo" className="upload-photo">
              {productImages ? (
                <img className="preview-image" src={productImages}></img>
              ) : (
                <span className="icon">
                  <CameraIcon />
                </span>
              )}
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
                value={productData.id}
                onChange={(e) => editProductValue(e)}
              />
            </article>
            <article className="input-layout">
              <h3>Product Name:</h3>
              <input
                type="text"
                className="custom-input"
                placeholder="Product Name"
                name="product_name"
                value={productData.product_name}
                onChange={(e) => editProductValue(e)}
              />
            </article>
            <article className="input-layout">
              <h3>Product Price:</h3>
              <input
                type="number"
                className="custom-input"
                placeholder="Product Rate"
                name="product_price"
                value={productData.product_price}
                onChange={(e) => editProductValue(e)}
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
              <select className="custom-input">
                <option value="1">Food</option>
                <option value="2">Electronic</option>
                <option value="3">Vechicle</option>
              </select>
            </article>

            <article className="input-layout">
              <h3>Product Size:</h3>
              <select className="custom-input">
                <option value="11">Small</option>
                <option value="12">Medium</option>
                <option value="13">Large</option>
                <option value="14">Extra Large</option>
              </select>
            </article>

            <article className="input-layout">
              <h3>Product Color:</h3>
              <select className="custom-input">
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
              ></textarea>
            </article>
          </section>

          <article className="card-footer">
            <button
              className="add-product-button"
            // onClick={(e) => onFormSubmit(e)}
            >
              Update Product
            </button>
          </article>
        </form>
      </article>
    </UpdateProductsStyle>
  );
}

export default UpdateProducts;
