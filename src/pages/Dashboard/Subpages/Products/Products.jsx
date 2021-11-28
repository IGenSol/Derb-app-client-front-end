import React, { useState } from "react";

import { ModalStyle, ProductStyle } from "./Products.style";
import Card from "../../../../components/Card/Card";
import { products } from "../../../../mockData/products";
import { CameraIcon } from "../../../../svgs";

const Modal = (props) => {
  const { visible, onOk, onCancel } = props;
  return (
    <ModalStyle
      title="Add Product"
      visible={visible}
      onOk={onOk}
      onCancel={onCancel}
    >
      <article className="popup-body">
        <label htmlFor="upload-product-photo" className="upload-photo">
          <span className="icon">
            <CameraIcon />
          </span>
          <input type="file" id="upload-product-photo" />
        </label>

        <article className="form-wrapper">
          <input
            type="text"
            className="custom-input"
            placeholder="Product Name"
          />

          <article className="rate-input">
            <input
              type="text"
              className="custom-input"
              placeholder="Product Rate"
            />
            <input
              type="text"
              className="custom-input"
              placeholder="Discount"
            />
          </article>
        </article>
      </article>
    </ModalStyle>
  );
};

function Products() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <ProductStyle>
      <article className="section-header">
        <h2 className="title">Products</h2>
        <button onClick={showModal} className="add-product-button">
          Add Product
        </button>
        <Modal
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        />
      </article>

      <article className="products-wrapper">
        {products.map((product, index) => {
          return <Card key={index} cardType="productCard" {...product} />;
        })}
      </article>
    </ProductStyle>
  );
}

export default Products;
