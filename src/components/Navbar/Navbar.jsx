import React, { useState } from "react";
import { Link } from "react-router-dom";



import { menubarItems } from "../../mockData/navbarData";
import { DownArrow, SearchIcon, UploadImageIcon } from "../../svgs";

import { Imagestyle, Modelstyle, NavbarStyle, SiteMenuStyle, UserProfileStyle } from "./Navbar.style";


const AddPost = (props) => {

  const [file, setFile] = useState("")

  const handleChange = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]))
  }

  const { okbtn, cancelbtn, visible } = props;
  return (
    <Modelstyle
      title="Add Post"
      visible={visible}
      onOk={okbtn}
      onCancel={cancelbtn}
      footer={null}
      wrapClassName="add-post-popup"
    >
      <article>
        <img src="./images/icons/user-icon.png" className="profileimg" alt="UserIcon" />
        <input
          type="text"
          name="Addpost"
          placeholder="Add Post..."
          className="add-post"
        />
      </article>

      <article >
        {
          file &&
          <img src={file} className="postimg" />
        }

      </article>
      <article className="footer">
        <article>
          <Imagestyle>
            <label class="custom-file-upload" >
              <input type="file" onChange={handleChange} />
              <span className="icon"><UploadImageIcon /></span>
            </label>
          </Imagestyle>

        </article>
        <article>
          <button className="add-post-btn">Add Post</button>
        </article>
      </article>


    </Modelstyle >


  );
}

const UserProfile = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

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
    <UserProfileStyle>
      <Link to="/dashboard" className="user-profile-placeholder-wrapper">
        <img
          src="/images/icons/user-icon.png"
          alt="Profile Placeholder"
          className="user-profile-placeholder"
        />
      </Link>
      <span className="down-arrow-icon">
        <DownArrow />
      </span>
      {/* <button className="add-post-btn" onClick={showModal}>Add Post</button>
      <AddPost visible={isModalVisible} okbtn={handleOk} cancelbtn={handleCancel} /> */}

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
        <UserProfile />
      </section>
    </NavbarStyle>
  );
}

export default Navbar;
