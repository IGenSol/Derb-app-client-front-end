import React, { useEffect, useState } from "react";
import axios from "axios";
import { counters } from "../../../../mockData/dashboard";
import Card from "../../../../components/Card/Card";
import { DashboardStyle, RecentOrderStyle } from "./Dashboard.style";
import { Link } from "react-router-dom";

const RecentOrders = () => {
  const [orders, setOrders] = useState([]);
  const url = `${process.env.REACT_APP_BASE_URL}/orders`;


  useEffect(() => {
    getOrders();
  }, []);

  const getOrders = async () => {
    const data = await axios.get(url);

    setOrders(data.data.data);
  };

  return (
    <RecentOrderStyle>
      <article className="heading">
        <h2 className="table-heading">Recent Orders</h2>
        <Link to="/dashboard/product-promotion" className="btn">Product Promotion</Link>
      </article>
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
            return (
              <tr key={index}>
                <td>#{order.product_id}</td>
                <td>{order.product_name}</td>
                <td>
                  <div className={`status ${order.status}`}>{order.status}</div>
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
