import React from "react";
import { Table } from "antd";

import { DeleteIcon, EditIcon } from "../../../../svgs";
import { OrderStyle } from "./Order.style";

function Order() {
  return (
    <OrderStyle>
      <h2 className="order-title">Manage Orders</h2>

      <table>
        <thead>
          <tr>
            <th scope="col">Order ID</th>
            <th scope="col">Avatar</th>
            <th scope="col">Amount</th>
            <th scope="col">Date</th>
            <th scope="col">Date</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-label="Order ID">Visa - 3412</td>
            <td data-label="Avatar">04/01/2016</td>
            <td data-label="Amount">$1,190</td>
            <td data-label="Date">03/01/2016 </td>
            <td data-label="Status">
              <span className="pending">Pending</span>
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
          <tr>
            <td scope="row" data-label="Order ID">
              Visa - 6076
            </td>
            <td data-label="Avatar">03/01/2016</td>
            <td data-label="Amount">$2,443</td>
            <td data-label="Date">02/01/2016 </td>
            <td data-label="Status">
              <span className="completed">Completed</span>
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
          <tr>
            <td scope="row" data-label="Order ID">
              Corporate AMEX
            </td>
            <td data-label="Avatar">03/01/2016</td>
            <td data-label="Amount">$1,181</td>
            <td data-label="Date">02/01/2016 </td>
            <td data-label="Status">
              <span className="cancel">Cancel</span>
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
          <tr>
            <td scope="row" data-label="Acount">
              Visa - 3412
            </td>
            <td data-label="Avatar">02/01/2016</td>
            <td data-label="Amount">$842</td>
            <td data-label="Date">01/01/2016 </td>
            <td data-label="Status">
              <span className="pending">Pending</span>
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
        </tbody>
      </table>

      {/* <div className="table-container">
        <table className="orders-list">
          <thead>
            <tr>
              <td>Order Id</td>
              <td>Images</td>
              <td>Status</td>
              <td>Payment_method</td>
              <td>Order_status</td>
              <td>Date</td>
              <td>Total</td>
              <td>Action</td>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>#12541</td>
              <td>images</td>
              <td>
                <span className="status-badge">Cash on Dilvery</span>
              </td>
              <td>Visa</td>
              <td>
                <span className="order-badge">Dilvery</span>
              </td>
              <td>Dec 10,21</td>
              <td>$254</td>
              <td>
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
          </tbody>
        </table>
      </div> */}
    </OrderStyle>
  );
}

export default Order;
