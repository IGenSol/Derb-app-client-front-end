import React, { useState, useEffect } from "react";
import { Table } from "antd";

import { DeleteIcon, EditIcon } from "../../../../svgs";
import { OrderStyle } from "./Order.style";
import axios from "axios";

function Order() {

  const [order, setOrder] = useState([]);

  useEffect(() => {

    LoadData();

  }, []);

  const LoadData = async () => {

    const data = await axios.get("http://localhost:3000/api/orders");
    setOrder(data.data.data);

  }

  // var today = order.created_date;
  // today = mm + '/' + dd + '/' + yyyy;



  return (
    <OrderStyle>
      <h2 className="order-title">Manage Orders</h2>

      <table>
        <thead>
          <tr>
            <th scope="col">Order ID</th>
            <th scope="col">Product Name</th>
            <th scope="col">Amount</th>
            <th scope="col">Date</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>

          {order.map((order, index) => {

            const { id, created_date, product_price, product_name, status } = order;

            return (

              <tr key={index}>
                <td data-label="Order ID">{id}</td>
                <td data-label="Product Name">{product_name}</td>
                <td data-label="Amount">{product_price}</td>
                <td data-label="Date">{created_date}</td>
                <td data-label="Status">
                  <span className="pending">{status}</span>
                </td>
                <td data-label="Action">
                  <article className="action-buttons-wrapper">
                    <button className="action-button">
                      <EditIcon />
                    </button>
                    <button className="action-button">
                      <DeleteIcon />
                    </button>
                  </article>
                </td>
              </tr>


            )
          })}

        </tbody>
      </table>

    </OrderStyle>
  );
}

export default Order;
