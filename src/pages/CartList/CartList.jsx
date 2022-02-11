import React, { useContext } from "react";
import { Link } from "react-router-dom";
import QuantityCounter from "../../components/QuantityCounter/QuantityCounter";
import { CartListStyle } from "./CartList.style";

function CartList(props) {
  const { cartItems } = props;



  const itemsPrice = cartItems.reduce(
    (accumaltor, currentItem) =>
      accumaltor + currentItem.product_price * currentItem.qty,
    0
  );

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
            <td>Actual Price</td>
          </tr>
        </thead>

        <tbody>
          {cartItems.map((cartItem, index) => {
            const { product_images, product_name, product_price } = cartItem;
            return (
              <tr key={index}>
                <td>
                  <img
                    src={product_images}
                    alt="image"
                    className="product-image"
                  />
                </td>
                <td>{product_name}</td>
                <td>${product_price}</td>
                <td>
                  <QuantityCounter items={cartItem} itemCount={cartItem.qty} />
                </td>
                <td>
                  <button className="cross-btn">x</button>
                </td>
                <td className="total-amount">${product_price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <article className="table-footer">
        <Link to="/" className="continue-shopping-button">
          Continue Shopping
        </Link>

        <article className="right-table-footer">
          <p className="total-amount">
            Total Price : <span className="total-price">${itemsPrice}</span>
          </p>

          <Link to="/checkout" className="checkout-page-link">
            Checkout
          </Link>
        </article>
      </article>
    </CartListStyle>
  );
}

export default CartList;
