// import axios from "axios";
// import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

// export default function App(props) {
//   const url = `${process.env.REACT_APP_BASE_URL}/payment/paypal`;
//   const { amount, cart_Item } = props;
//   const userId = sessionStorage.getItem("userId");
//   const data = {
//     amount: amount,
//     product: cart_Item,
//     user_Id: userId,
//   };
//   return (
//     <PayPalScriptProvider options={{ "client-id": "test" }}>
//       <PayPalButtons
//         createOrder={(data, actions) => {
//           return actions.order.create({
//             purchase_units: [
//               {
//                 amount: {
//                   value: { amount },
//                 },
//               },
//             ],
//           });
//         }}
//         onApprove={(data, actions) => {
//           return actions.order.capture().then((details) => {
//             const name = details.payer.name.given_name;

//             axios
//               .post(url, data)
//               .then((res) => {
//                 alert("dataSend");
//               })
//               .catch((err) => {
//                 alert(err);
//               });
//           });
//         }}
//       />
//     </PayPalScriptProvider>
//   );
// }

import React, { useState } from "react";
import axios from "axios";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const Paypal = (props) => {
  const { cart_Item } = props;
  console.log(props);

  const [paidFor, setPaidFor] = useState(false);
  const [error, setError] = useState(null);
  const userId = sessionStorage.getItem("userId");
  const url = `${process.env.REACT_APP_BASE_URL}/payment/paypal`;
  const data = {
    amount: props.amount.toFixed(2),
    product: cart_Item,
    user_Id: userId,
  };

  const handleApprove = (orderId) => {
    setPaidFor(true);
  };

  if (paidFor) {
    alert("Thank You for purchasing from Eazy2Code");
    axios
      .post(url, data)
      .then((res) => {
        alert("dataSend");
      })
      .catch((err) => {
        alert(err);
      });
  }

  if (error) {
    alert(error);
  }

  return (
    <PayPalScriptProvider>
      <PayPalButtons
        onClick={(data, actions) => {
          const hasAlreadyBoughtCourse = false;
          if (hasAlreadyBoughtCourse) {
            setError("You Already bough this course");
            return actions.reject();
          } else {
            return actions.resolve();
          }
        }}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                description: "product",
                amount: {
                  value: props.amount.toFixed(2),
                },
              },
            ],
          });
        }}
        onApprove={async (data, action) => {
          const order = await action.order.capture();
          console.log("order", order);

          handleApprove(data.orderID);
        }}
        onCancel={() => {}}
        onError={(err) => {
          setError(err);
          console.log("PayPal Checkout onError", err);
        }}
      />
    </PayPalScriptProvider>
  );
};

export default Paypal;
