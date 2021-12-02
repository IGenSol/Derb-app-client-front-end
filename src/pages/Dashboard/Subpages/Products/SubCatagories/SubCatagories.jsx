import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { DeleteIcon, EditIcon } from "../../../../../svgs";

import { SubCatagoriesStyle } from "./SubCatagories.style";

function SubCatagories() {
  const [subCatagories, setSubCatagories] = useState([]);
  const url = "http://localhost:5000/api/categories";

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

  return (
    <SubCatagoriesStyle>
      <section className="section-header">
        <h2 className="title">Sub Catagories</h2>
        {/* <Link to="/dashboard/Add-subCatagoires" className="sub-catagory-link">
          Add Subcatagories
        </Link> */}
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
                <td>ProductImage</td>
                <td>{catagory.store_name}</td>
                <td>$250</td>
                <td>{catagory.category_name}</td>
                <td>Pending</td>
                <td>
                  <article className="button-wrapper">
                    <button
                      className="delete-button"
                      onClick={deleteSubCatagory(catagory.id)}
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
