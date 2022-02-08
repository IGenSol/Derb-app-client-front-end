import axios from "axios";
import React, { useEffect, useState } from "react";

import { DeleteIcon, EditIcon } from "../../../../../svgs";
import { AddCatagoryModalStyle, CatagoriesStyle } from "./Catagroies.style";

const AddCatagoryModal = (props) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const { isModalVisible, handleOk, handleCancel } = props;
  const url = `${process.env.REACT_APP_BASE_URL}/categories`;

  const submitCatagory = async () => {
    const catagoryData = new FormData();

    catagoryData.append("category_name", name);
    catagoryData.append("image", image);

    await axios
      .post(url, catagoryData)
      .then(() => {
        setName = "";
        alert("Data Posted");
        handleOk();
      })
      .catch((err) => {
        console.log(`error >> ${err}`);
      });

    handleOk();
  };

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
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="custom-input"
        />
        <lable className="input-title">Category Image:</lable>
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          className="custom-input"
        />

        <button className="add-button" onClick={submitCatagory}>
          Add Catagory
        </button>
      </article>
    </AddCatagoryModalStyle>
  );
};

function Catagories() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [catagories, setCatagories] = useState([]);
  const [isStatusActive, setStatusActive] = useState(true);
  const [statusValue, setStatusValue] = useState("pending");
  const url = `${process.env.REACT_APP_BASE_URL}/categories`;

  useEffect(() => {
    getCatagories();
  }, []);

  const getCatagories = async () => {
    await axios.get(url).then((res) => {
      setCatagories(res.data.data);
      console.log(res.data.data);
    });
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
        {/* <button className="add-catagories-link" onClick={showModal}>
          Add catagories
        </button>
        <AddCatagoryModal
          isModalVisible={isModalVisible}
          handleOk={handleOk}
          handleCancel={handleCancel}
        /> */}
      </section>

      <table>
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Image</th>
            {/* <th scope="col">Product Name</th> */}
            {/* <th scope="col">Price</th> */}
            <th scope="col">Catagory</th>
            <th scope="col">Status</th>
            {/* <th scope="col">Action</th> */}
          </tr>
        </thead>
        <tbody>
          {catagories.map((catagory, index) => {
            return (
              <tr key={index}>
                <td data-label="No">{index + 1}</td>
                <td data-label="Image">
                  <img
                    src={catagory.image}
                    alt={catagory.category_name}
                    className="catagory-image"
                  />
                </td>
                {/* <td data-label="Product Name">{catagory.store_name}</td> */}
                {/* <td data-label="Price">$250</td> */}
                <td data-label="Catagory">{catagory.category_name}</td>
                <td data-label="Status">
                  <span className="pending">Pending</span>
                </td>

                {/* <td data-label="Action">
                  <article className="action-buttons-wrapper">
                    <button className="action-button">
                      <EditIcon />
                    </button>
                    <button
                      className="action-button"
                      onClick={() => deleteCatagory(catagory.category_id)}
                    >
                      <DeleteIcon />
                    </button>
                  </article>
                </td> */}
              </tr>
            );
          })}
        </tbody>
      </table>
    </CatagoriesStyle>
  );
}

export default Catagories;
