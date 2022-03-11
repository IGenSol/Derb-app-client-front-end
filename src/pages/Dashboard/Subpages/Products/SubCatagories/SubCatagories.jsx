import React, { useEffect, useState } from "react";
import axios from "axios";
import { DeleteIcon, EditIcon } from "../../../../../svgs";
import {
  SubCatagoriesStyle,
  AddSubCatagoryModalStyle,
  UpdatePopupStyle,
} from "./SubCatagories.style";

const userId = sessionStorage.getItem("userId")
let url = `${process.env.REACT_APP_BASE_URL}/subcategories`;
let caturl = `${process.env.REACT_APP_BASE_URL}/categories`;


const AddSubCatagoryModal = (props) => {
  const { isModalVisible, handleOk, handleCancel } = props;
  const [primaryCatagory, setPrimaryCatagory] = useState("");
  const [catagory, setCatagory] = useState("");
  const url = `${process.env.REACT_APP_BASE_URL}/subcategories`;
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

    const data = {
      "primary_category_id": primaryCatagory,
      "sub_category_name": catagory,
      "user_id": userId
    }

    await axios
      .post(url, data)
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
                <option key={catagory.category_id} value={catagory?.category_id}>{catagory?.category_name}</option>
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


const Modal = ({ handleClose, details, getSubCategory }) => {

  const [category, setcategory] = useState([]);


  useEffect(() => {
    getcategory();
  }, []);

  const getcategory = async () => {
    const data = await axios.get(caturl);
    setcategory(data.data.data);
  };


  const { sub_category_name, primary_category_id, sub_category_id } = details;

  const [productData, setProductData] = useState({
    primary_category_id: '',
    sub_category_name: sub_category_name,

  });



  const editProductValue = (e) => {
    setProductData({
      ...productData,
      [e.target.name]: e.target.value,
    });
  };

  const update = async (e) => {

    await axios
      .put(`${url}/${sub_category_id}`, productData)
      .then(() => {
        alert("data is updated");

      })
      .catch((err) => {
        console.log(`error >> ${err}`);
      });

  };



  return (
    <div className="modal display-block">
      <section className="modal-main">
        <h2 className="heading">Update Sub-Category</h2>

        <hr></hr>
        <UpdatePopupStyle>

          <p className="description">
            Select Main Category:
          </p>


          <select
            className="dropdown"
            name="primary_category_id"
            value={productData.primary_category_id}
            onChange={(e) => editProductValue(e)}
          // value={id}
          // onChange={() => setid()}
          >
            {category &&
              category.map((category, index) => {
                const { category_name, category_id } = category;
                return (
                  <option key={index} value={category_id}>
                    {category_name}
                  </option>
                );
              })}
          </select>
          <p className="description">
            Category Name:
          </p>
          <input type="text" name="sub_category_name"
            value={productData.sub_category_name}
            onChange={(e) => editProductValue(e)}
          />


          <article className='btn' >
            <button className="submit-btn" onClick={() => {
              handleClose()
              update()
            }} >Update Category</button>
            <button className="submit-btn" onClick={() => {
              handleClose()
            }} >Cancle</button>
          </article>
        </UpdatePopupStyle>

      </section>
    </div>
  );
};

function SubCatagories() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [subCatagories, setSubCatagories] = useState([]);
  const [show, setShow] = useState(false);
  const [selectedData, setSelectedData] = useState({});
  const hanldeClick = (selectedRec) => {
    setSelectedData(selectedRec);
    setShow(true);
  };
  const hideModal = () => {
    setShow(false);
  };

  useEffect(() => {
    getSubCatagories();
  }, []);
  const storeid = sessionStorage.getItem("storeid");

  const getSubCatagories = async () => {
    await axios.get(`${url}/${storeid}`).then((res) => {
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

      <article className="tableoverflow">
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
                      <button className="action-button"
                        onClick={() => hanldeClick(catagory)}>
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
      </article>
      {show && <Modal details={selectedData} handleClose={hideModal} />}
    </SubCatagoriesStyle>
  );
}

export default SubCatagories;
