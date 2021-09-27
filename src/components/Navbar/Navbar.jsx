import React from "react";
import { Link } from "react-router-dom";

import { menubarItems } from "../../mockData/navbarData";
import { DownArrow, SearchIcon } from "../../svgs";

import { NavbarStyle, SiteMenuStyle, UserProfileStyle } from "./Navbar.style";

const UserProfile = () => {
  return (
    <UserProfileStyle>
      <picture className="user-profile-placeholder-wrapper">
        <img
          src="./images/icons/user-icon.png"
          alt="Profile Placeholder"
          className="user-profile-placeholder"
        />
      </picture>
      <span className="down-arrow-icon">
        <DownArrow />
      </span>
      <button className="add-post-btn">Add Post</button>
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

function Navbar() {
  return (
    <NavbarStyle>
      <section className="navbar-container">
        <Link to="/">
          <picture className="logo-wrapper">
            <img
              src="./images/site-logo.png"
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
        <UserProfile />
      </section>
    </NavbarStyle>
  );
}

export default Navbar;
