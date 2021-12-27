import React, { useState } from "react";
import { Collapse, Switch } from "antd";
import axios from "axios";

import {
  CheckoutStyle,
  DeliveryDetailsStyle,
  ItemListStyle,
  PaymentDetailsStyle,
  PaymentPopupStyle,
  PersonalDetailsStyle,
} from "./Checkout.style";

const ItemList = () => {
  const cartItems = JSON.parse(localStorage.getItem("products"));

  return (
    <ItemListStyle>
      <h3 className="shop-name">Your order from OPTP - saddar</h3>

      <article className="order-wrapper">
        {cartItems &&
          Object.values(cartItems).map((items, index) => {
            return (
              <article className="order">
                <h3 className="quantity">
                  <b>3</b> X
                </h3>
                <article className="order-details">
                  <h3 className="order-name">{items.heading}</h3>
                  <p className="description">{items.description}</p>
                </article>
                <h3 className="price">$ {items.price}</h3>
              </article>
            );
          })}
      </article>

      <article className="sidebar-footer">
        <h3 className="deal-name">Celebration Deals</h3>

        <article className="deals-details">
          <article className="deals-charges">
            <h3>Subtotal</h3>
            <h3>$125</h3>
          </article>
          <article className="deals-charges">
            <h3>Delivery Fee</h3>
            <h3>$5,00</h3>
          </article>
          <article className="deals-charges">
            <h3>GST</h3>
            <h3>$10</h3>
          </article>
        </article>

        <article className="grand-total">
          <h3>Total (incl.GST)</h3>
          <h3>$1234</h3>
        </article>
      </article>
    </ItemListStyle>
  );
};

const PaymentPopup = (props) => {
  const { stripeKey, token, amount, shippingAddress } = props;
  return (
    <PaymentPopupStyle
      stripeKey={stripeKey}
      token={token}
      amount={amount}
      shippingAddress
    >
      <button className="place-order-button">Place Order</button>
    </PaymentPopupStyle>
  );
};

const PaymentDetails = () => {
  const { Panel } = Collapse;
  const [product, setProduct] = useState({
    name: "Pasta",
    price: 50,
    productby: "Jahangir",
  });

  const url = "";

  const makePayments = async (token) => {
    const body = {
      token,
      product,
    };
    const headers = {
      "Content-Type": "application/json",
    };

    return await axios
      .post(url, {
        headers,
        body: JSON.stringify(body),
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <PaymentDetailsStyle>
      <h2 className="section-title">Payments</h2>

      <article className="form-footer">
        <a href="#" className="voucher-button">
          Do you have a voucher?
        </a>

        <p className="term-and-conditions">
          By making this purchase you agree to our{" "}
          <a href="#" className="term-link">
            terms and conditions.
          </a>
        </p>

        <PaymentPopup
          stripeKey={process.env.REACT_APP_KEY}
          token={makePayments}
          amount={product.price * 100}
          shippingAddress
        />

        <p className="description">
          I agree and I demand that you execute the ordered service before the
          end of the revocation period. I am aware that after complete
          fulfillment of the service I lose my right of recission. Payment
          transactions will be processed abroad.
        </p>
      </article>
    </PaymentDetailsStyle>
  );
};

const PersonalDetails = () => {
  const [editInput, setEditInput] = useState(false);

  return (
    <PersonalDetailsStyle>
      <section className="section-header">
        <h2 className="section-title">Personal details</h2>
        <button
          className="edit-button"
          onClick={() => setEditInput(!editInput)}
        >
          {editInput ? "Cancel" : "Edit"}
        </button>
      </section>

      <article className="form-details">
        {editInput ? (
          <form className="form-container">
            <article className="input-container">
              <label className="heading">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="custom-input"
              />
            </article>
            <article className="input-container">
              <label className="heading">First Name</label>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className="custom-input"
              />
            </article>
            <article className="input-container">
              <label className="heading">Last Name</label>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="custom-input"
              />
            </article>
            <article className="input-container">
              <label className="heading">Mobile Number</label>
              <input
                type="number"
                name="mobile"
                placeholder="Mobile Number"
                className="custom-input"
              />
            </article>

            <button className="save-button">Save</button>
          </form>
        ) : (
          <article className="customer-details">
            <h3 className="name">Jahangir Khan</h3>
            <h3 className="email">jahangirjay5@gmail.com</h3>
            <h3 className="number">+92 311 5506699</h3>
          </article>
        )}
      </article>
    </PersonalDetailsStyle>
  );
};

const DeliveryDetails = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

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
    <DeliveryDetailsStyle>
      <article className="title">
        <h2 className="section-title">Dilvery details</h2>
      </article>

      <article className="label-wrapper">
        <article className="label-details">
          <h3 className="heading">Contactless delivery</h3>
          <h4 className="description">Contactless delivery</h4>
        </article>
        <Switch />
      </article>

      <article className="delevery-time-form">
        <label className="heading">Delivery time :</label>

        <article className="dropdown-wrapper">
          <select name="date" className="date-selection">
            <option value="">Wed, DEC 22</option>
          </select>

          <select name="date" className="time-selection">
            <option value="">ASAP</option>
          </select>
        </article>
      </article>

      <article className="delivery-address-wrapper">
        <label className="heading">Deliver address</label>

        <article className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3322.919416989022!2d73.06177221544917!3d33.607395248487904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df94962c0f02f5%3A0x854ef5e28ff4857c!2sRoyalton%20Hotel%20-%20Rawalpindi!5e0!3m2!1sen!2s!4v1640176619191!5m2!1sen!2s"
            width="100%"
            height="300"
            loading="lazy"
          ></iframe>
        </article>

        <article className="address-info-wrapper">
          <article className="address-container">
            <article className="address-details">
              <h3 className="zip-code">2206</h3>
              <h3 className="place-name">Rawalpindi</h3>
            </article>

            <article className="map-modal">
              <button className="edit-modal" onClick={showModal}>
                Edit
              </button>
              {/* <MapModal
                isModalVisible={isModalVisible}
                handleOk={handleOk}
                handleCancel={handleCancel}
              /> */}
            </article>
          </article>

          <article className="missing-street-wrapper">
            <label className="heading">We're missing your street</label>
            <input
              type="text"
              name="streeName"
              placeholder="Street"
              className="custom-container"
            />
          </article>
        </article>

        <article className="optional-details">
          <input
            type="text"
            placeholder="Floor(Optional)"
            className="custom-input"
            name="floor"
          />

          <textarea
            name="note"
            placeholder="Note to rider -e.g directions/landmark"
            cols="30"
            className="custom-input"
            rows="5"
          ></textarea>
        </article>
      </article>

      <button className="submit-button">Submit</button>
    </DeliveryDetailsStyle>
  );
};

function Checkout() {
  const { Panel } = Collapse;
  return (
    <CheckoutStyle>
      <Collapse defaultActiveKey={["1"]} className="details-wrapper">
        <Panel
          header={
            <article className="title">
              <span className="serial-no">1</span>
              <h2 className="section-title">Dilvery details</h2>
            </article>
          }
          key="1"
        >
          <DeliveryDetails />
        </Panel>

        <Panel
          header={
            <article className="title">
              <span className="serial-no">2</span>
              <h2 className="section-title">Personal Details</h2>
            </article>
          }
          key="2"
        >
          <PersonalDetails />
        </Panel>

        <Panel
          header={
            <article className="title">
              <span className="serial-no">3</span>
              <h2 className="section-title">Payments</h2>
            </article>
          }
          key="3"
        >
          <PaymentDetails />
        </Panel>
      </Collapse>
      <ItemList />
    </CheckoutStyle>
  );
}

export default Checkout;
