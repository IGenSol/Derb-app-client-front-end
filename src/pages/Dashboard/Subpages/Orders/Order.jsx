import React, { useState, useEffect } from "react";
import { EditIcon } from "../../../../svgs";
import { OrderStyle } from "./Order.style";
import axios from "axios";

const userId = sessionStorage.getItem("userId")

function Order() {
  const [orders, setOrders] = useState([]);
  const ordersUrl = `${process.env.REACT_APP_BASE_URL}/orders/${userId}`;

  useEffect(() => {
    getOrders();
  }, []);

  const getOrders = async () => {
    const ordersData = await axios.get(ordersUrl);
    setOrders(ordersData.data.data);
  };



  return (
    <OrderStyle>
      <h2 className="order-title">Manage Orders</h2>

      <table>
        <thead>
          <tr>
            <th scope="col">Order ID</th>
            <th scope="col">Name</th>
            <th scope="col">Product</th>
            <th scope="col">Amount</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {orders &&
            orders.map((orders, index) => {
              return (
                <tr key={index}>
                  <td data-label="Order ID">{orders.product_id}</td>
                  <td data-label="Name">{orders.first_name}</td>
                  <td data-label="Product">{orders.product_name}</td>
                  <td data-label="Amount">${orders.product_price}</td>
                  <td data-label="Status">
                    <span className="pending">{orders.status}</span>
                  </td>

                  <td data-label="Action">
                    <article className="action-buttons-wrapper">
                      <button className="action-button">
                        <EditIcon />
                      </button>

                    </article>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </OrderStyle>
  );
}

export default Order;
