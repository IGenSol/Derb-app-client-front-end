import axios from "axios";
import React, { useEffect, useState } from "react";

import { DeleteIcon, EditIcon } from "../../../../../svgs";
import { AddCatagoryModalStyle, CatagoriesStyle } from "./Catagroies.style";

const AddCatagoryModal = (props) => {
  const { isModalVisible, handleOk, handleCancel } = props;

  return (
    <AddCatagoryModalStyle
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      title="Add Catagory"
      footer={null}
    >
      <article className="modal-body">
        <lable className="input-title">Category Name:</lable>
        <input type="text" className="custom-input" />
        <lable className="input-title">Category Image:</lable>
        <input type="file" className="custom-input" />

        <button className="add-button">Add Catagory</button>
      </article>
    </AddCatagoryModalStyle>
  );
};

function Catagories() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [catagories, setCatagories] = useState([]);
  const url = "http://localhost:5000/api/categories";

  useEffect(() => {
    getCatagories();
  }, []);

  const getCatagories = async () => {
    const data = await axios.get(url);
    setCatagories(data.data.data);
  };

  const deleteCatagory = async (id) => {
    await axios.delete(`${url}/${id}`);
    getCatagories();
  };

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
    <CatagoriesStyle>
      <section className="section-header">
        <h2 className="title">Catagories</h2>
        <button className="add-catagories-link" onClick={showModal}>
          Add catagories
        </button>
        <AddCatagoryModal
          isModalVisible={isModalVisible}
          handleOk={handleOk}
          handleCancel={handleCancel}
        />
      </section>

      <table className="catagories-table" width="100%">
        <thead>
          <tr>
            <td>No.</td>
            <td>Image</td>
            <td>Product Name</td>
            <td>Price</td>
            <td>Catagory</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>

        <tbody>
          {catagories.map((catagory, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>ProductImage</td>
                <td>{catagory.store_name}</td>
                <td>$250</td>
                <td>{catagory.category_name}</td>
                <td>Pending</td>
                <td>
                  <article className="button-wrapper">
                    <button
                      className="delete-button"
                      onClick={() => deleteCatagory(catagory.category_id)}
                    >
                      <DeleteIcon />
                    </button>
                    <button className="edit-button">
                      <EditIcon />
                    </button>
                  </article>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </CatagoriesStyle>
  );
}

export default Catagories;
