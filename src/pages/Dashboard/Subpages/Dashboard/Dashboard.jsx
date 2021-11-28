import React, { useState, useEffect } from "react";
import axios from "axios";
import { counters, orders } from "../../../../mockData/dashboard";
import Card from "../../../../components/Card/Card";
import { DashboardStyle, RecentOrderStyle } from "./Dashboard.style";

const RecentOrders = () => {

  const [order, setorder] = useState([]);



  useEffect(() => {
    loadOrder();
  }, []);

  const loadOrder = async () => {
    const data = await axios.get("http://localhost:3000/api/orders");
    setorder(data.data.data);
  };





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
          {order.map((order, index) => {
            const { id, product_name, status } = order;
            return (
              <tr key={index}>
                <td>#{id}</td>
                <td>{product_name}</td>
                <td>
                  {/* className={`status ${statusClass}`} */}
                  <div >{status}</div>
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
