import React, { useEffect, useState } from "react";
import axios from "axios";
import { DeleteIcon, EditIcon } from "../../../../../svgs";
import {
  SubCatagoriesStyle,
  AddSubCatagoryModalStyle,
} from "./SubCatagories.style";

const userId = sessionStorage.getItem("userId")


const AddSubCatagoryModal = (props) => {
  const { isModalVisible, handleOk, handleCancel } = props;
  const [primaryCatagory, setPrimaryCatagory] = useState("");
  const [catagory, setCatagory] = useState("");
  const url = `${process.env.REACT_APP_BASE_URL}/subcategories/${userId}`;
  const caturl = `${process.env.REACT_APP_BASE_URL}/categories`;

  const [catagories, setCatagories] = useState([]);


  useEffect(() => {
    getCatagories();
  }, []);

  const getCatagories = async () => {
    await axios.get(caturl).then((res) => {
      setCatagories(res.data.data);
    });
  };
  const submitSubCatagory = async () => {

    const subCatagoriesData = new FormData();

    subCatagoriesData.append("primary_category_id", primaryCatagory);
    subCatagoriesData.append("sub_category_name", catagory);
    subCatagoriesData.append("user_id", userId);


    await axios
      .post(url, subCatagoriesData)
      .then(() => {
        alert("SubCatagory Added");

      })
      .catch((err) => {
        console.log(err);
      });

    handleOk();
  };

  return (
    <AddSubCatagoryModalStyle
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      title="Add Catagory"
      footer={null}
    >
      <article className="modal-body">
        <lable className="input-title">Primary Category Name:</lable>
        <select
          className="catagory-list"
          onChange={(e) => setPrimaryCatagory(e.target.value)}
        >
          {
            catagories.map((catagory) => {
              return (
                <option key={catagory.category_id} value={catagory.category_id}>{catagory?.category_name}</option>
              )
            })
          }

        </select>

        <lable className="input-title">SubCategory Name:</lable>
        <input
          type="text"
          value={catagory}
          onChange={(e) => setCatagory(e.target.value)}
          className="custom-input"
        />

        <button className="add-button" onClick={submitSubCatagory}>
          Add Catagory
        </button>
      </article>
    </AddSubCatagoryModalStyle>
  );
};

function SubCatagories() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [subCatagories, setSubCatagories] = useState([]);
  const url = `${process.env.REACT_APP_BASE_URL}/subcategories/${userId}`;

  useEffect(() => {
    getSubCatagories();
  }, []);

  const getSubCatagories = async () => {
    await axios.get(url).then((res) => {
      setSubCatagories(res.data.data);
    });
  };

  const deleteSubCatagory = async (id) => {
    await axios
      .delete(`${url}/${id}`)
      .then(() => {
        getSubCatagories();
      })
      .catch((err) => {
        console.log(err);
      });
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

      <table>
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Catagory</th>
            <th scope="col">Subcatagory</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {subCatagories.map((catagory, index) => {
            return (
              <tr key={index}>
                <td data-label="No">{index + 1}</td>
                <td data-label="Product Name">{catagory.sub_category_name}</td>
                <td data-label="Price">{catagory.primary_category_name}</td>

                <td data-label="Action">
                  <article className="action-buttons-wrapper">
                    <button className="action-button">
                      <EditIcon />
                    </button>
                    <button
                      className="action-button"
                      onClick={() =>
                        deleteSubCatagory(catagory.sub_category_id)
                      }
                    >
                      <DeleteIcon />
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
