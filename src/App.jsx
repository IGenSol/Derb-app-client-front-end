import { useState, useEffect } from "react";
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

function App() {
  // const [authLoading, setAuthLoading] = useState(true);

  // useEffect(() => {
  //   const token = getToken();

  //   axios
  //     .get(`http://localhost:5000/verifyToken?token=${token}`)
  //     .then((res) => {
  //       setUserSession(res.data.token, res.data.data.first_name);
  //       setAuthLoading(false);
  //     })
  //     .catch((err) => {
  //       console.log(`Error >> `, err);
  //       console.log(token);
  //       setAuthLoading(false);
  //     });
  // }, []);

  // if (authLoading && getToken()) {
  //   return <div>Checking Authentication....</div>;
  // }

  return (
    <Router>
      <ThemeProvider theme={THEMES}>
        <GlobalStyle />
        <Navbar />
        <Switch>
          <Route path="/" exact component={Discover} />
          <Route path="/feed" exact component={Feed} />
          <Route path="/store" exact component={Store} />
          {/* <Route path="/discover" exact component={Discover} /> */}
          <Route path="/show-case" exact component={ShowCase} />
          <PublicRoute path="/login" component={LoginForm} />
          <PrivateRoute path="/dashboard" component={DashboardLayout} />
          <Route path="/cart-list" exact component={CartList} />
          <Route path="/user-profile" exact component={UserProfile} />
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
