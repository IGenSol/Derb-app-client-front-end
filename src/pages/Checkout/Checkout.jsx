import React, { useContext, useEffect, useState } from "react";
import { Collapse, Switch } from "antd";
import axios from "axios";
import { products } from "../../App";
import {
  CheckoutStyle,
  DeliveryDetailsStyle,
  ItemListStyle,
  PaymentDetailsStyle,
  PaymentPopupStyle,
  PersonalDetailsStyle,
} from "./Checkout.style";
import Paypal from "../PayPal/Paypal";


const ItemList = (props) => {
  const { cartItems } = props;
  const itemsPrice = cartItems.reduce(
    (accumaltor, currentItem) =>
      accumaltor + currentItem.product_price * currentItem.qty,
    0
  );

  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 50;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;

  return (
    <ItemListStyle>
      <h3 className="shop-name">Your order from OPTP - saddar</h3>

      <article className="order-wrapper">
        {cartItems &&
          cartItems.map((items, index) => {
            return (
              <article className="order">
                <h3 className="quantity">
                  <b>{items.qty}</b> X
                </h3>
                <article className="order-details">
                  <h3 className="order-name">{items.product_name}</h3>
                </article>
                <h3 className="price">$ {items.product_price}</h3>
              </article>
            );
          })}
      </article>

      <article className="sidebar-footer">
        <h3 className="deal-name">Celebration Deals</h3>

        <article className="deals-details">
          <article className="deals-charges">
            <h3>Subtotal</h3>
            <h3>${itemsPrice}</h3>
          </article>
          <article className="deals-charges">
            <h3>Delivery Fee</h3>
            <h3>${shippingPrice}</h3>
          </article>
          <article className="deals-charges">
            <h3>GST</h3>
            <h3>${taxPrice.toFixed(2)}</h3>
          </article>
        </article>

        <article className="grand-total">
          <h3>Total (incl.GST)</h3>
          <h3>${totalPrice.toFixed(2)}</h3>
        </article>
      </article>
    </ItemListStyle>
  );
};

const PaymentPopup = (props) => {
  const { stripeKey, token, amount } = props;
  return (
    <PaymentPopupStyle stripeKey={stripeKey} token={token} amount={amount}>
      <button className="place-order-button">Place Order</button>
    </PaymentPopupStyle>
  );
};

const PaymentDetails = (props) => {
  const { cartItems, totalPrice } = props;
  const address = JSON.parse(sessionStorage.getItem("address"));
  const user = JSON.parse(sessionStorage.getItem("fname"));
  const email = sessionStorage.getItem("email");
  const mobile = sessionStorage.getItem("mobile");
  const user_id = sessionStorage.getItem("userId");
  const { Panel } = Collapse;
  const [product, setProduct] = useState({
    name: cartItems,
    price: totalPrice,
    productby: "Jahangir",
    user_id: user_id
  });

  const url = `${process.env.REACT_APP_BASE_URL}/payment/stripe`;

  const makePayments = async (token) => {
    const body = {
      token,
      product,
      address,
      user,
      email,
      mobile,
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

  const stripKey = "pk_test_TYooMQauvdEDq54NiTphI7jx";

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
        <article className="paymentbtn">
          <PaymentPopup
            stripeKey={stripKey}
            token={makePayments}
            amount={product.price * 100}
          />
          <article className="paypal-button-container">
            <Paypal
              amount={product.price * 100}
              cart_Item={cartItems}
            />
          </article>
        </article>


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

  const user = JSON.parse(sessionStorage.getItem("fname"));
  const email = sessionStorage.getItem("email");
  const mobile = sessionStorage.getItem("mobile");

  return (
    <PersonalDetailsStyle>
      <section className="section-header">
        <h2 className="section-title">Personal details</h2>
        {/* <button
          className="edit-button"
          onClick={() => setEditInput(!editInput)}
        >
          {editInput ? "Cancel" : "Edit"}
        </button> */}
      </section>

      <article className="form-details">
        {/* {editInput ? (
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
        )} */}

        <article className="customer-details">
          <h3 className="name">{user}</h3>
          <h3 className="email">{email}</h3>
          <h3 className="number">{mobile}</h3>
        </article>
      </article>
    </PersonalDetailsStyle>
  );
};

// const Map = () => {
//   const latData = getLat();
//   const lngData = getLng();

//   return (
//     <GoogleMap
//       defaultZoom={10}
//       defaultCenter={{
//         lat: latData,
//         lng: lngData,
//       }}
//     >
//       <Marker position={{ lat: latData, lng: lngData }} />
//     </GoogleMap>
//   );
// };

//const WrappedMap = withScriptjs(withGoogleMap(Map));

const DeliveryDetails = () => {
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");



  return (
    <DeliveryDetailsStyle>
      <article>
        <h2 className="section-title">Dilvery details</h2>
      </article>
      <article className="missing-street-wrapper">
        <h3 className="heading">Enter Your Dilvery Details</h3>

        <article className="title">

          <input
            type="text"
            name="Country Name"
            placeholder="Enter your contry"
            className="custom-container"
            onChange={(e) => setCountry(e.target.value)}
          />
          <input
            type="text"
            name="Country Name"
            placeholder="Enter your city"
            className="custom-container"
            onChange={(e) => setCity(e.target.value)}
          />

          <input
            type="text"
            name="Country Name"
            placeholder="Enter your street"
            className="custom-container"
            onChange={(e) => setStreet(e.target.value)}
          />
          <button className="submit-button">Submit</button>
        </article>
      </article>



    </DeliveryDetailsStyle >
  );
};

function Checkout() {
  const { Panel } = Collapse;
  const product = useContext(products);
  const { cartItems } = product;

  const itemsPrice = cartItems.reduce(
    (accumaltor, currentItem) =>
      accumaltor + currentItem.product_price * currentItem.qty,
    0
  );




  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 50;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;


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
          <PaymentDetails {...product} totalPrice={totalPrice} />
        </Panel>
      </Collapse>
      <ItemList {...product} />
    </CheckoutStyle>
  );
}

export default Checkout;
