import React, { useState } from "react";
import classNames from "classnames";
import { Menu } from "antd";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import { getUser, removeUserSession } from "../../utils/Common";

import { sideMenus } from "../../mockData/dashboard";
import { LogoutIcon } from "../../svgs";

import Profile from "./Subpages/Profile/Profile";
import Order from "./Subpages/Orders/Order";
import Dashboard from "./Subpages/Dashboard/Dashboard";
import ProductList from "./Subpages/Products/PorductList/ProductList";
import AddProducts from "./Subpages/Products/AddProducts/AddProducts";
import Catagories from "./Subpages/Products/Catagories/Catagories";
import SubCatagories from "./Subpages/Products/SubCatagories/SubCatagories";

import { DashboardLayoutStyle, SidebarStyle } from "./DashboardLayout.style";
import UpdateProducts from "./Subpages/Products/UpdateProducts/UpdateProducts";

const Sidebar = (props) => {
  const [isBarActive, setBarActive] = useState(false);
  const user = getUser();
  const { SubMenu } = Menu;

  const toggleActive = () => {
    return setBarActive(!isBarActive);
  };

  const handleLogout = () => {
    removeUserSession();
    props.history.push("/login");
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
          src="/images/users/user-four.jpg"
          alt="User Image"
          className="profile-image"
        />

        <span className="user-status">Live Now</span>
      </picture>

      <h3 className="name">{user}</h3>
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

      <Menu mode="inline" className="navbar-wrapper">
        {sideMenus.map((sideMenu, index) => {
          const { icon, linkText, url, submenus } = sideMenu;
          return (
            <>
              {submenus ? (
                <SubMenu key={linkText} title={linkText} icon={icon}>
                  {submenus.map((submenu, index) => {
                    const { icon, linkText, url } = submenu;
                    return (
                      <Menu.Item key={linkText}>
                        <a key={index} className="nav-item-link" href={url}>
                          {linkText}
                        </a>
                      </Menu.Item>
                    );
                  })}
                </SubMenu>
              ) : (
                <Menu.Item key={index} icon={icon}>
                  <Link className="nav-item-link" to={url}>
                    {linkText}
                  </Link>
                </Menu.Item>
              )}
            </>
          );
        })}

        <button className="logout-button" onClick={handleLogout}>
          <span className="icon">
            <LogoutIcon />
          </span>
          Logout
        </button>
      </Menu>

      <button className="live-button">Go Live</button>
    </SidebarStyle>
  );
};

function DashboardLayout(props) {
  return (
    <DashboardLayoutStyle>
      <Router>
        <Sidebar {...props} />

        <Switch>
          <Route path="/dashboard" exact component={Dashboard} />
          <Route
            path="/dashboard/products-list"
            exact
            component={ProductList}
          />
          <Route path="/dashboard/add-products" exact component={AddProducts} />
          <Route
            path="/dashboard/update-products/:productSlug"
            exact
            component={UpdateProducts}
          />
          <Route path="/dashboard/catagories" exact component={Catagories} />
          <Route
            path="/dashboard/sub-catagories"
            exact
            component={SubCatagories}
          />

          <Route path="/dashboard/orders" exact component={Order} />
          <Route path="/dashboard/profile" exact component={Profile} />
        </Switch>
      </Router>
    </DashboardLayoutStyle>
  );
}

export default DashboardLayout;
