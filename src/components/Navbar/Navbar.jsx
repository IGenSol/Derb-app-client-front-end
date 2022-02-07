import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import { products } from "../../App";

import { menubarItems } from "../../mockData/navbarData";
import {
  CartIcon,
  DownArrow,
  LogoutIcon,
  SearchIcon,
  UserIcon,
} from "../../svgs";
import { removeUserSession } from "../../utils/Common";

import { NavbarStyle, SiteMenuStyle, UserProfileStyle } from "./Navbar.style";

const UserProfile = (props) => {
  const [dropdown, setDropDown] = useState(false);
  const itemCount = useContext(products);

  const isDropDownActive = () => {
    setDropDown(!dropdown);
  };

  const handleLogout = () => {
    isDropDownActive();
    window.location.reload();
    removeUserSession();
    props.history.push("/login");
  };

  return (
    <UserProfileStyle dropdownActive={dropdown}>
      <article className="user-profile-placeholder-wrapper">
        <picture className="user-placeholder" onClick={isDropDownActive}>
          <img
            src="/images/icons/user-icon.png"
            alt="Profile Placeholder"
            className="user-profile-placeholder"
          />
          <div className="cart-item">{itemCount}</div>
        </picture>

        <ul className="dropdown-menu-wrapper">
          <li className="dropdown-menu">
            <Link
              to="/dashboard"
              className="dropdown-menu-link"
              onClick={isDropDownActive}
            >
              <span className="icon">
                <UserIcon />
              </span>
              <p className="link-text">Profile</p>
            </Link>
          </li>
          <li className="dropdown-menu">
            <Link
              to="/cart-list"
              className="dropdown-menu-link"
              onClick={isDropDownActive}
            >
              <span className="icon">
                <CartIcon />
              </span>
              <p className="link-text">Cart</p>
              <p className="cart-items">{itemCount}</p>
            </Link>
          </li>
          <li className="dropdown-menu">
            <button onClick={handleLogout} className="dropdown-menu-link">
              <span className="icon">
                <LogoutIcon />
              </span>
              <p className="link-text">Logout</p>
            </button>
          </li>
        </ul>
      </article>
      <span className="down-arrow-icon" onClick={isDropDownActive}>
        <DownArrow />
      </span>
    </UserProfileStyle>
  );
};

const SiteMenu = () => {
  return (
    <SiteMenuStyle>
      {menubarItems.map((menubarItem, index) => {
        const { url, icon, linkText } = menubarItem;

        return (
          <li key={index} className="menu-item">
            <Link to={url} className="menu-item-link">
              <span className="menu-icon">{icon}</span>
              <p className="menu-item-link-text">{linkText}</p>
            </Link>
          </li>
        );
      })}
    </SiteMenuStyle>
  );
};

function Navbar(props) {
  return (
    <NavbarStyle>
      <section className="navbar-container">
        <Link to="/">
          <picture className="logo-wrapper">
            <img
              src="/images/site-logo.png"
              alt="Site Logo"
              className="site-logo"
            />
          </picture>
        </Link>
        <article className="searchbar-wrapper">
          <input
            type="text"
            name="searchbar"
            placeholder="Search.."
            className="site-searchbar"
          />
          <span className="icon-wrapper">
            <SearchIcon />
          </span>
        </article>

        <SiteMenu />
        <UserProfile {...props} />
      </section>
    </NavbarStyle>
  );
}

export default withRouter(Navbar);
