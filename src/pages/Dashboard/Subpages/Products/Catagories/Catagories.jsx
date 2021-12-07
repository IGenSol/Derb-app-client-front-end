import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { DeleteIcon, EditIcon } from "../../../../../svgs";
import { CatagoriesStyle } from "./Catagroies.style";

function Catagories() {
  const [catagories, setCatagories] = useState([]);
  const [isStatusActive, setStatusActive] = useState(true);
  const [statusValue, setStatusValue] = useState("pending");
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

  return (
    <CatagoriesStyle>
      <section className="section-header">
        <h2 className="title">Catagories</h2>
        {/* <Link to="/dashboard/add-catagories" className="add-catagories-link">
          Add catagories
        </Link> */}
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
                <td>
                  {isStatusActive ? (
                    statusValue
                  ) : (
                    <select onChange={(e) => setStatusValue(e.target.value)}>
                      <option value="Pending">Pending</option>
                      <option value="Canceled">Canceled</option>
                      <option value="Deliverd">Deliverd</option>
                    </select>
                  )}
                </td>
                <td>
                  <article className="button-wrapper">
                    <button
                      className="delete-button"
                      onClick={deleteCatagory(catagory.category_id)}
                    >
                      <DeleteIcon />
                    </button>
                    <button
                      className="edit-button"
                      onClick={() => setStatusActive(!isStatusActive)}
                    >
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
