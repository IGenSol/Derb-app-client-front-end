import React, { useState } from "react";
import classNames from "classnames";
import { Menu } from "antd";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import { sideMenus } from "../../mockData/dashboard";
import Profile from "./Subpages/Profile/Profile";
import Products from "./Subpages/Products/Products";
import Order from "./Subpages/Orders/Order";
import Dashboard from "./Subpages/Dashboard/Dashboard";
import { DashboardLayoutStyle, SidebarStyle } from "./DashboardLayout.style";

const Sidebar = () => {
  const [isBarActive, setBarActive] = useState(false);

  const toggleActive = () => {
    return setBarActive(!isBarActive);
  };

  return (
    <SidebarStyle toggleActive={isBarActive}>
      <article
        className={classNames({
          "toggle-icon": true,
          "bar-active": isBarActive,
        })}
        onClick={toggleActive}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </article>
      <picture className="profile-placeholder">
        <img
          src="./images/users/user-four.jpg"
          alt="User Image"
          className="profile-image"
        />

        <span className="user-status">Live Now</span>
      </picture>

      <h3 className="name">Fashion Store</h3>
      <article className="dashboard-details">
        <p className="followers">
          <strong className="no">750</strong>
          Followers
        </p>
        <p className="reviews">
          <strong className="no">10</strong>
          Reviews
        </p>
      </article>

      <Menu mode="vertical" className="navbar-wrapper">
        {sideMenus.map((sideMenu, index) => {
          const { icon, linkText, url } = sideMenu;
          return (
            <Menu.Item key={index} icon={icon}>
              <Link className="nav-item-link" to={url}>
                {linkText}
              </Link>
            </Menu.Item>
          );
        })}
      </Menu>

      <button className="live-button">Go Live</button>
    </SidebarStyle>
  );
};

function DashboardLayout() {
  return (
    <DashboardLayoutStyle>
      <Router>
        <Sidebar />

        <Switch>
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/dashboard/products" exact component={Products} />
          <Route path="/dashboard/orders" exact component={Order} />
          <Route path="/dashboard/profile" exact component={Profile} />
        </Switch>
      </Router>
    </DashboardLayoutStyle>
  );
}

export default DashboardLayout;
