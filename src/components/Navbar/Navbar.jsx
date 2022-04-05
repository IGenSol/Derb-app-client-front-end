import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import { products } from "../../App";
import {
  CartIcon,
  DashboardIcon,
  DownArrow,
  LogoutIcon,
  SearchIcon,
  UserIcon,
} from "../../svgs";
import { removeUserSession } from "../../utils/Common";
import { menubarItems } from "../../mockData/navbarData";
// import { SearchIcon, UploadImageIcon } from "../../svgs";
import { Imagestyle, Modelstyle, NavbarStyle, SiteMenuStyle, UserProfileStyle } from "./Navbar.style";
import { GlobalContext } from "../../reducer/GlobalState";
const image = sessionStorage.getItem("image")


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
        <img src={image} className="profileimg" alt="UserIcon" />
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
              {/* <span className="icon"><UploadImageIcon /></span> */}
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

  const handlepush = () => {

    const path = JSON.parse(sessionStorage.getItem('userrole'));

    switch (path) {
      case "VENDOR":
        return props.history.push("/dashboard");

      case "USER":
        return props.history.push("/user-dashboard");

      default:
        props.history.push("/");
        return;
    }

  }

  const id = sessionStorage.getItem("userId")

  return (
    <UserProfileStyle dropdownActive={dropdown}>
      <article className="user-profile-placeholder-wrapper" onClick={isDropDownActive}>
        <picture className="user-placeholder">
          <img
            src={image}
            alt="Profile Placeholder"
            className="user-profile-placeholder"
          />
          <div className="cart-item">{itemCount}</div>
        </picture>

        <ul className="dropdown-menu-wrapper">

          <li className="drop">
            <Link to={
              {
                pathname: "/user-profile",
                state: id
              }} className="dropdown-menu-link">
              <span className="icon">
                <UserIcon />
              </span>
              <p className="link-text">Profile</p>
            </Link>
          </li>

          <li className="drop">
            <a onClick={handlepush} className="dropdown-menu-link">
              <span className="icon">
                <DashboardIcon />
              </span>
              <p className="link-text">Dashboard</p>
            </a>
          </li>

          <li className="drop">
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






          <li className="drop">
            <button onClick={handleLogout} className="dropdown-menu-link">
              <span className="icon">
                <LogoutIcon />
              </span>
              <p className="link-text">Logout</p>
            </button>
          </li>



          {/* <li className="dropdown-menu">
            <Link
              to="/dashboard"
              className="dropdown-menu-link"
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
          </li> */}
        </ul>
      </article>
      <span className="down-arrow-icon" onClick={isDropDownActive}>
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

function Navbar(props) {
  const { userId } = useContext(GlobalContext);
  return (
    <>{
    userId &&
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
}
    </>
  );
}

export default withRouter(Navbar);
