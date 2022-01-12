import { useState, useEffect, createContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import axios from "axios";
import "antd/dist/antd.css";
import "react-multi-carousel/lib/styles.css";

import THEMES from "./style/theme";
import Navbar from "./components/Navbar/Navbar";
import Discover from "./pages/Discover/Discover";
import Home from "./pages/Home/Home";
import Feed from "./pages/Feed/Feed";
import Store from "./pages/Store/Store";
import ShowCase from "./components/ShowCase/ShowCase";
import DashboardLayout from "./pages/Dashboard/DashboardLayout";
import LoginForm from "./pages/LoginForm/LoginForm";
import CartList from "./pages/CartList/CartList";
import UserProfile from "./components/UserProfile/UserProfile";
import PrivateRoute from "./utils/PrivateRoute";
import PublicRoute from "./utils/PublicRoute";
import { getToken, removeUserSession, setUserSession } from "./utils/Common";

import { GlobalStyle } from "./style/globalStyle";
import Checkout from "./pages/Checkout/Checkout";
import { trendingItems } from "./mockData/trendingItems";

export const products = createContext();

const getProducts = () => {
  const products = JSON.parse(localStorage.getItem("products"));

  if (products) {
    return products;
  } else {
    return [];
  }
};

function App() {
  const [cartItems, setCartItems] = useState(getProducts());

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(cartItems));
  }, [cartItems]);

  const addItem = (product) => {
    const exist = cartItems.find((item) => item.url === product.url);

    if (exist) {
      setCartItems(
        cartItems.map((currentItem) =>
          currentItem.url === product.url
            ? { ...exist, qty: exist.qty + 1 }
            : currentItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((item) => item.url === product.url);

    if (exist.qty === 1) {
      setCartItems(
        cartItems.filter((currentItem) => currentItem.url !== product.url)
      );
    } else {
      setCartItems(
        cartItems.map((currentItem) =>
          currentItem.url === product.url
            ? { ...exist, qty: exist.qty - 1 }
            : currentItem
        )
      );
    }
  };
  return (
    <Router>
      <ThemeProvider theme={THEMES}>
        <GlobalStyle />
        <products.Provider value={cartItems.length}>
          <Navbar />
        </products.Provider>
        <Switch>
          <products.Provider
            value={{
              onRemove: onRemove,
              addItem: addItem,
              cartItems: cartItems,
            }}
          >
            <PrivateRoute path="/" exact component={Discover} />
            <PrivateRoute path="/feed" exact component={Feed} />
            <PrivateRoute path="/store" exact component={Store} />
            {/* <Route path="/discover" exact component={Discover} /> */}

            <Route path="/show-case/:productSlug" exact>
              <ShowCase url={window.location.pathname} />
            </Route>

            <PublicRoute path="/login" component={LoginForm} />
            <PrivateRoute path="/dashboard" component={DashboardLayout} />
            <PrivateRoute path="/cart-list" exact>
              <CartList cartItems={cartItems} />
            </PrivateRoute>
            <PrivateRoute path="/user-profile" exact component={UserProfile} />
            <PrivateRoute path="/checkout" exact component={Checkout} />
          </products.Provider>
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
