import React from "react";
import { DeleteIcon, EditIcon } from "../../../../svgs";
import { OrderStyle } from "./Order.style";

function Order() {
  return (
    <OrderStyle>
      <h2 className="order-title">Manage Orders</h2>

      <table className="orders-list" width="100%">
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
    </OrderStyle>
  );
}

export default Order;
