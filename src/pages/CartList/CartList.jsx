import React from "react";
import { Link } from "react-router-dom";

import QuantityCounter from "../../components/QuantityCounter/QuantityCounter";
import { CartListStyle } from "./CartList.style";

function CartList() {
  return (
    <CartListStyle>
      <h2 className="heading">Shopping Cart</h2>

      <table className="table-wrapper">
        <thead>
          <tr>
            <td>Product</td>
            <td>Name</td>
            <td>Price</td>
            <td>Quantity</td>
            <td>Action</td>
            <td>Totals</td>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              <img
                src="./images/products-images/speaker-image.jpg"
                alt="Product"
                className="product-image"
              />
            </td>
            <td>Trim Dress</td>
            <td>$87</td>
            <td>
              <QuantityCounter />
            </td>
            <td>
              <button className="cross-btn">x</button>
            </td>
            <td className="total-amount">$87</td>
          </tr>
        </tbody>
      </table>

      <article className="table-footer">
        <Link to="/" className="continue-shopping-button">
          Continue Shopping
        </Link>

        <article className="right-table-footer">
          <p className="total-amount">
            Total Price : <span className="total-price">$261</span>
          </p>

          <Link to="#" className="checkout-page-link">
            Checkout
          </Link>
        </article>
      </article>
    </CartListStyle>
  );
}

export default CartList;
