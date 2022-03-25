import { useState, useEffect, createContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import 'antd/dist/antd.min.css';
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
import { GlobalStyle } from "./style/globalStyle";
import Checkout from "./pages/Checkout/Checkout";
import AllProduct from "./pages/AllProduct/AllProduct";
import UserDashbaord from "./pages/UserDashboard/UserDashbaord";

export const products = createContext();


const userId = sessionStorage.getItem("userId")

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

    const exist = cartItems.find((item) => item.id === product.id);

    if (exist) {
      setCartItems(
        cartItems.map((currentItem) =>
          currentItem.id === product.id
            ? { ...exist, qty: exist.qty + 1 }
            : currentItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((item) => item.id === product.id);

    if (exist.qty === 1) {
      setCartItems(
        cartItems.filter((currentItem) => currentItem.id !== product.id)
      );
    } else {
      setCartItems(
        cartItems.map((currentItem) =>
          currentItem.id === product.id
            ? { ...exist, qty: exist.qty - 1 }
            : currentItem
        )
      );
    }
  };
  return (
    <Router basename="/">
      <ThemeProvider theme={THEMES}>
        <GlobalStyle />
        <products.Provider value={cartItems.length}>
          {userId && <Navbar />}
        </products.Provider>

        <Switch>
          <products.Provider
            value={{
              onRemove: onRemove,
              addItem: addItem,
              cartItems: cartItems,
            }}
          >
            <PublicRoute path="/login" component={LoginForm} />
            <PrivateRoute path="/" exact component={Discover} />
            <PrivateRoute path="/feed" exact component={Feed} />
            <PrivateRoute path="/store" exact component={Store} />
            {/* <Route path="/discover" exact component={Discover} /> */}

            <Route path="/show-case/:productSlug" exact>
              <ShowCase />
            </Route>
            <Route path="/all-product" exact component={AllProduct} />
            <PrivateRoute path="/dashboard" component={DashboardLayout} />
            <PrivateRoute path="/user-dashboard" component={UserDashbaord} />
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
