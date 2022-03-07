import React, { useState, useEffect } from "react";
import { EditIcon } from "../../../../svgs";
import { OrderStyle } from "./Order.style";
import axios from "axios";

const userId = sessionStorage.getItem("userId")

const Modal = ({ handleClose, details }) => {

  const url = `${process.env.REACT_APP_BASE_URL}/orders`;
  const { order_id, status } = details;
  const [Status, setStatus] = useState(status);

  const data = {
    status: Status
  }

  const hanldeClick = async () => {
    await axios
      .patch(`${url}/${order_id}`, data)
      .then(() => {
        alert("data is updated");
        window.location.reload();
      })
      .catch((err) => {
        console.log(`error >> ${err}`);
      });
  };



  return (

    <div className="modal display-block">
      <section className="modal-main">
        <div className="App">
          <h2 className="heading">Update Status</h2>
          <hr></hr>
          <select
            className="custom-container"
            value={Status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="PENDING">
              PENDING
            </option>
            <option value="CANCEL">
              CANCEL
            </option>
            <option value="DELIVERED">
              DELIVERED
            </option>

          </select>
        </div>
        <button className="add-button"
          onClick={() => {
            hanldeClick();
            handleClose();
          }}
        >UpDate</button>
      </section>
    </div>
  );
};





function Order() {
  const [orders, setOrders] = useState([]);
  // const ordersUrl = `${process.env.REACT_APP_BASE_URL}/orders/${userId}`;
  const ordersUrl = `${process.env.REACT_APP_BASE_URL}/orders`;

  const [selectedData, setSelectedData] = useState({});
  const [show, setShow] = useState(false);

  const hanldeClick = (selectedRec) => {
    setSelectedData(selectedRec);
    setShow(true);
  };

  const hideModal = () => {
    setShow(false);
  };



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
                      <button className="action-button"
                        onClick={() => hanldeClick(orders)}>
                        <EditIcon />
                      </button>

                    </article>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      {show && <Modal details={selectedData} handleClose={hideModal} />}
    </OrderStyle>
  );
}

export default Order;
