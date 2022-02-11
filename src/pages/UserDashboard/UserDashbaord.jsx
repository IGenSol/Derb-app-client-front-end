import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactStars from "react-rating-stars-component";
import { DashboardStyle, Modelstyle, } from "./UserDasboard.Style";
import Card from "../../components/Card/Card";
import { counters } from "../../mockData/dashboard";
import { CrossIcon } from "../../svgs";
import { OrderStyle } from "../Dashboard/Subpages/Orders/Order.style";

const Modal = ({ handleClose, details }) => {


    const url = `${process.env.REACT_APP_BASE_URL}/reviews`;

    const { user_id, product_id, restaurant_id } = details;
    const [rate, setrate] = useState()
    const [comment, setcommit] = useState()


    const data = {
        user_id,
        product_id,
        restaurant_id: 1,
        rate,
        comment
    }

    console.log(data)

    const ratingChanged = (newRating) => {
        setrate(newRating)
    };

    const submit = () => {
        axios.post(url, data).then((res) => {
            alert(res)
        }).catch((err) => {
            alert(err)
        })
    }
    return (
        <Modelstyle>
            <div className="modal display-block">
                <section className="modal-main">
                    <article className="cancel" onClick={handleClose}><CrossIcon /></article>
                    <div className="container">

                        <p className="heading">Please Give us a Review</p>

                        <article className="ratting my-3">
                            <ReactStars
                                count={5}
                                onChange={ratingChanged}
                                size={40}
                                activeColor="#ffd700"

                                isHalf={true}
                                emptyIcon={<i className="far fa-star"></i>}
                                halfIcon={<i className="fa fa-star-half-alt"></i>}
                                fullIcon={<i className="fa fa-star"></i>}
                            />
                        </article>
                        <article>
                            <textarea
                                placeholder="Enter Your Oppinion"
                                rows={4}
                                onChange={(e) => setcommit(e.target.value)}
                            ></textarea>
                        </article>
                    </div>
                    <article className="buttonbox mt-5">
                        <button className="btn" onClick={submit}>Submit</button>
                    </article>
                </section>
            </div>
        </Modelstyle>
    );
};




const RecentOrders = () => {
    const [order, setOrder] = useState([]);
    const id = sessionStorage.getItem("userId");
    const [show, setShow] = useState(false);
    const [selectedData, setSelectedData] = useState({});
    const hanldeClick = (selectedRec) => {
        setSelectedData(selectedRec);
        setShow(true);
    };

    const hideModal = () => {
        setShow(false);
    };

    const url = `${process.env.REACT_APP_BASE_URL}/orders`;

    useEffect(() => {
        getOrder();
    }, [])

    const getOrder = async () => {
        await axios.get(url).then((res) => {
            setOrder(res.data.data);
        })
    }
    const [status, setstatus] = useState("CANCEL")
    const data = {
        status: status
    }

    const handleorder = async (e) => {
        const order_id = e;
        await axios
            .put(`${url}/${order_id}`, data)
            .then(() => {
                alert("data is updated");
                getOrder();

            })
            .catch((err) => {
                console.log(`error >> ${err}`);
            });
    }

    return (
        <OrderStyle>
            <h2 className="order-title">Manage Orders</h2>
            <article className="tablescroll">
                <table className="orders-list" width="100%">
                    <thead>
                        <tr>
                            <td>Sr#</td>
                            <td>Product Name</td>
                            <td>Product Price</td>
                            <td>Status</td>
                            <td>Store Name</td>
                            <td>Action</td>

                        </tr>
                    </thead>

                    <tbody>
                        {
                            order && order.map((data, index) => {

                                const { user_id, product_name, status, product_price, store_name, id } = data;

                                return (
                                    <tr key={index}>
                                        <td data-label="Sr#">#{index}</td>
                                        <td data-label="Product Name">{product_name}</td>
                                        <td data-label="Price">{product_price}</td>
                                        <td data-label="Status">
                                            <span className={`status ${status}`}>{status}</span>
                                        </td>
                                        <td data-label="Store Name">{store_name}</td>
                                        {
                                            data.status == "PENDING" ?
                                                (
                                                    <td data-label="Action">
                                                        <a className="order_action" onClick={() => handleorder(id)}>Cancel Order</a>
                                                    </td>
                                                ) : (
                                                    <td data-label="Action">
                                                        <a className="order_action" onClick={() => hanldeClick(data)}>Give a Review</a>

                                                    </td>
                                                )
                                        }

                                    </tr>

                                )

                            })
                        }

                    </tbody>
                </table>
                {show && <Modal details={selectedData} handleClose={hideModal} />}
            </article>
        </OrderStyle>
    );
};

function UserDashbaord() {
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

export default UserDashbaord;
