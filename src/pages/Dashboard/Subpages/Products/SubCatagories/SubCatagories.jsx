import React, { useEffect, useState } from "react";
import axios from "axios";

import { DeleteIcon, EditIcon } from "../../../../../svgs";

import {
  SubCatagoriesStyle,
  AddSubCatagoryModalStyle,
} from "./SubCatagories.style";

const AddSubCatagoryModal = (props) => {
  const { isModalVisible, handleOk, handleCancel } = props;

  return (
    <AddSubCatagoryModalStyle
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      title="Add Catagory"
      footer={null}
    >
      <article className="modal-body">
        <select className="catagory-list">
          <option value="electronic">Electronic</option>
          <option value="food">Food</option>
          <option value="grocery">Grocery</option>
          <option value="Cosmetics">Cosmetics</option>
        </select>

        <lable className="input-title">Category Image:</lable>
        <input type="file" className="custom-input" />

        <button className="add-button">Add Catagory</button>
      </article>
    </AddSubCatagoryModalStyle>
  );
};

function SubCatagories() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [subCatagories, setSubCatagories] = useState([]);
  const url = "http://localhost:5000/api/subcategories";

  useEffect(() => {
    getSubCatagories();
  }, []);

  const getSubCatagories = async () => {
    const data = await axios.get(url);
    setSubCatagories(data.data.data);
  };

  const deleteSubCatagory = async (id) => {
    await axios.delete(`${url}/${id}`);
    getSubCatagories();
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
    <SubCatagoriesStyle>
      <section className="section-header">
        <h2 className="title">Sub Catagories</h2>
        <button className="sub-catagory-link" onClick={showModal}>
          Add Subcatagories
        </button>
        <AddSubCatagoryModal
          isModalVisible={isModalVisible}
          handleOk={handleOk}
          handleCancel={handleCancel}
        />
      </section>

      <table className="sub-catagories-table" width="100%">
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
          {subCatagories.map((catagory, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{catagory.image}</td>
                <td>{catagory.sub_category_name}</td>
                <td>$250</td>
                <td>{catagory.primary_category_id}</td>
                <td>Pending</td>
                <td>
                  <article className="button-wrapper">
                    <button
                      className="delete-button"
                      onClick={() =>
                        deleteSubCatagory(catagory.sub_category_id)
                      }
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
    </SubCatagoriesStyle>
  );
}

export default SubCatagories;
