import React from "react";

import { counters, orders } from "../../../../mockData/dashboard";
import Card from "../../../../components/Card/Card";
import { DashboardStyle, RecentOrderStyle } from "./Dashboard.style";

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

        <tbody className="table-body">
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

function Dashboard() {
  return (
    <DashboardStyle>
      <h2 className="title">Dashboard</h2>
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
    </DashboardStyle>
  );
}

export default Dashboard;
