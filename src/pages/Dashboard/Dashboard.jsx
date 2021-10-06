import React from "react";

import Card from "../../components/Card/Card";

import { counters, orders, sideMenus } from "../../mockData/dashboard";

import {
  DashboardContentStyle,
  DashboardStyle,
  RecentOrderStyle,
  SidebarStyle,
} from "./Dashboard.style";

const RecentOrders = () => {
  return (
    <RecentOrderStyle>
      <h2 className="table-heading">Recent Orders</h2>

      <table className="orders-table">
        <thead>
          <tr>
            <td className="header-data">Oder ID</td>
            <td className="header-data">Product Details</td>
            <td className="header-data">Status</td>
          </tr>
        </thead>

        <tbody class="table-body">
          {orders.map((order, index) => {
            const { orderId, details, status, statusClass } = order;
            return (
              <tr key={index}>
                <td>{orderId}</td>
                <td>{details}</td>
                <td>
                  <div className={`status ${statusClass}`}>{status}</div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </RecentOrderStyle>
  );
};

const DashboardContent = () => {
  return (
    <DashboardContentStyle>
      <article className="counters-wrapper">
        {counters.map((counter, index) => {
          return (
            <Card
              key={index}
              className="counter"
              cardType="verticalCard"
              {...counter}
            />
          );
        })}
      </article>

      <RecentOrders />
    </DashboardContentStyle>
  );
};

const Sidebar = () => {
  return (
    <SidebarStyle>
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

      <ul className="navbar-wrapper">
        {sideMenus.map((sideMenu, index) => {
          const { icon, linkText, url } = sideMenu;
          return (
            <li className="nav-item">
              <a href={url} className="nav-item-link">
                <span className="icon">{icon}</span>
                <p className="link-text">{linkText}</p>
              </a>
            </li>
          );
        })}
      </ul>

      <button className="live-button">Go Live</button>
    </SidebarStyle>
  );
};

function Dashboard() {
  return (
    <DashboardStyle>
      <h2 className="title">Dashboard</h2>

      <section className="dashboard-body">
        <Sidebar />
        <DashboardContent />
      </section>
    </DashboardStyle>
  );
}

export default Dashboard;
