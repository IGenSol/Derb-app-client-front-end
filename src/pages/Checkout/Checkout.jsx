import React, { useContext, useEffect, useState } from "react";
import PlacesAutocomplete from "react-places-autocomplete/dist/PlacesAutocomplete";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import { Collapse, Switch } from "antd";
import axios from "axios";
import {
  GoogleMap,
  withGoogleMap,
  withScriptjs,
  Marker,
} from "react-google-maps";

import { getLat, getLng, setLatLong } from "../../utils/Common";
import { products } from "../../App";

import {
  CheckoutStyle,
  DeliveryDetailsStyle,
  ItemListStyle,
  PaymentDetailsStyle,
  PaymentPopupStyle,
  PersonalDetailsStyle,
} from "./Checkout.style";

const ItemList = (props) => {
  const { cartItems } = props;
  const itemsPrice = cartItems.reduce(
    (accumaltor, currentItem) =>
      accumaltor + currentItem.productPrice * currentItem.qty,
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
                  <h3 className="order-name">{items.productName}</h3>
                  <p className="description">{items.description}</p>
                </article>
                <h3 className="price">$ {items.productPrice}</h3>
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
          <h3>${totalPrice}</h3>
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
    console.log(body)
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

        <PaymentPopup
          stripeKey={stripKey}
          token={makePayments}
          amount={product.price * 100}
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

const Map = () => {
  const latData = getLat();
  const lngData = getLng();

  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{
        lat: latData,
        lng: lngData,
      }}
    >
      <Marker position={{ lat: latData, lng: lngData }} />
    </GoogleMap>
  );
};

const WrappedMap = withScriptjs(withGoogleMap(Map));

const DeliveryDetails = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const getAddress = JSON.parse(sessionStorage.getItem("address"));
  const [address, setAddress] = useState("");

  const handleSelect = async (value) => {
    const result = await geocodeByAddress(value);
    const latLang = await getLatLng(result[0]);

    setLatLong(latLang.lat, latLang.lng);
  };

  useEffect(() => {
    setAddress(getAddress);
  }, []);

  const onLoad = () => {
    sessionStorage.setItem("address", JSON.stringify(address));
    window.location.reload();
  };

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

      {/* <PlacesAutocomplete
        // apiKey="AIzaSyDy-XbDbZylrWFPmTl4JnEpOTKgXvbPZXY"
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <article className="search-location">
            <input
              {...getInputProps({ placeholder: "Enter your address" })}
              type="text"
              className="custom-container"
              name="search"
            />

            <button className="search-button" onClick={onLoad}>
              Search
            </button>

            <article className="dropdown-list">
              {loading ? <div>...Loading</div> : null}

              {suggestions &&
                suggestions.map((suggestion) => {
                  const style = {
                    backgroundColor: suggestion.active ? "#ffb602" : "#fff",
                  };

                  return (
                    <article
                      className="place-suggestion"
                      {...getSuggestionItemProps(suggestion, { style })}
                    >
                      {suggestion.description}
                    </article>
                  );
                })}
            </article>
          </article>
        )}
      </PlacesAutocomplete> */}

      {/* <article className="label-wrapper">
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
      </article> */}

      <article className="delivery-address-wrapper">
        {getAddress && <label className="heading">Deliver address</label>}

        {getAddress && (
          <article className="map-container">
            <WrappedMap
              googleMapURL={
                "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDy-XbDbZylrWFPmTl4JnEpOTKgXvbPZXY"
              }
              loadingElement={<div style={{ height: "100%" }} />}
              containerElement={<div style={{ height: "100%" }} />}
              mapElement={<div style={{ height: "100%" }} />}
            />
          </article>
        )}

        {/* <article className="address-info-wrapper">
          <article className="address-container">
            <article className="address-details">
              <h3 className="zip-code">2206</h3>
              <h3 className="place-name">{getAddress}</h3>
            </article>

            <article className="map-modal">
              <button className="edit-modal" onClick={showModal}>
                Edit
              </button>
              <MapModel
                isModalVisible={isModalVisible}
                handleOk={handleOk}
                handleCancel={handleCancel}
              />
            </article>
          </article> */}

        {/* <article className="missing-street-wrapper">
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
          ></textarea> */}
        {/* </article> */}
      </article>

      {/* <button className="submit-button">Submit</button> */}
    </DeliveryDetailsStyle>
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
