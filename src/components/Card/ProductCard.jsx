import React, { useState } from "react";

import { DeleteIcon, EditIcon } from "../../svgs/index";
import { DeleteModalSytle, ProductCardStyle } from "./Card.style";

const DeleteModal = (props) => {
  const { handleCancel, isModalVisible, deleteProduct, id } = props;

  return (
    <DeleteModalSytle
      visible={isModalVisible}
      onCancel={handleCancel}
      title="Confirmation"
      footer={null}
    >
      <p className="label">Are you sure you want to delete this item?</p>

      <article className="button-wrapper">
        <button className="cancel-button" onClick={handleCancel}>
          Cancel
        </button>
        <button className="delete-button" onClick={() => deleteProduct(id)}>
          Delete
        </button>
      </article>
    </DeleteModalSytle>
  );
};

function ProductCard(props) {
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

  const {
    image,
    imageAlt,
    product_name,
    product_price,
    product_old_price,
    deleteProduct,
    updateProduct,
    id,
  } = props;
  return (
    <ProductCardStyle>
      <picture className="thumbnail-wrapper">
        <article className="image-hover-buttons">
          <button className="icon" onClick={() => updateProduct(id, props)}>
            <EditIcon />
          </button>
          <button className="icon" onClick={showModal}>
            <DeleteIcon />
          </button>
        </article>
        <img
          src="/images/products-images/cream-image.jpg"
          alt="Product Image"
          className="thumbnail"
        />
      </picture>

      <figcaption className="card-detail">
        <h2 className="heading">{product_name}</h2>
        <h3 className="price">
          ${product_price} <strike>${product_old_price}</strike>
        </h3>
      </figcaption>

      <DeleteModal
        isModalVisible={isModalVisible}
        handleOk={handleOk}
        handleCancel={handleCancel}
        deleteProduct={deleteProduct}
        id={id}
      />
    </ProductCardStyle>
  );
}

export default ProductCard;
