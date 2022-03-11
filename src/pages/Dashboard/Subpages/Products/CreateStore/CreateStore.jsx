import React, { useState, useEffect } from 'react'
import {
    EditIcon,
    UserTabIcon,
} from '../../../../../svgs';
import { Tabs } from 'antd';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { ProfileDetailsStyle, CreateStoreStyle } from './CreateStore.style';

function CreateStore() {
    const { TabPane } = Tabs;

    const userId = sessionStorage.getItem("userId")

    const url = `${process.env.REACT_APP_BASE_URL}/store`;


    const id = sessionStorage.getItem("userId");
    const storeid = sessionStorage.getItem("storeid");

    console.log(storeid)

    const [data, setdata] = useState({
        store_name: "",
        store_email: "",
        address: "",
        city: "",
        contact: "",
        country: "",
        postal_code: "",
        vendor_id: ""
    });



    const onChangeData = (e) => {
        setdata({
            ...data,
            [e.target.name]: e.target.value,
        });
    };




    useEffect(() => {
        getrestruant();
    }, []);

    const getrestruant = async () => {

        await axios.get(`${url}/${storeid}`).then((res) => {
            setdata(res.data.data)
            console.log(res.data.data)
        }).catch((err) => {
            console.log(err)
        })

    }

    const postRes = (e) => {
        e.preventDefault();

        axios.post(`${url}/${id}`, data)
            .then((res) => {
                alert(res)
                getrestruant();
            })
            .catch((err) => {
                alert(err);
            });
    };

    const update = (e) => {
        axios.put(`${url}/${storeid}`, data).then((res) => {
            toast.success("Profile Update Successfully", {
                theme: 'dark'
            });

        }).catch((err) => {
            toast.error("Please Fill All Field", {
                theme: 'dark'
            });
        })
    }

    return (

        <article>
            {
                data?.id ?
                    (

                        <ProfileDetailsStyle>
                            <ToastContainer
                            />
                            <Tabs defaultActiveKey="1" tabBarGutter={50}>
                                <TabPane
                                    tab={
                                        <span className="tab">
                                            <UserTabIcon />
                                            Store Details
                                        </span>
                                    }
                                    key="1"
                                >
                                    <h3 className="heading">Store Details</h3>
                                    <article className="user-details">
                                        <article className="user-data">
                                            <h4 className="data-title">Store Name :</h4>
                                            <h4>{data?.store_name}</h4>
                                        </article>
                                        <article className="user-data">
                                            <h4 className="data-title">Store Email :</h4>
                                            <h4>{data?.store_email}</h4>
                                        </article>
                                        <article className="user-data">
                                            <h4 className="data-title">Contact :</h4>
                                            <h4>{data?.contact}</h4>
                                        </article>
                                        <article className="user-data">
                                            <h4 className="data-title">Country :</h4>
                                            <h4>{data?.country}</h4>
                                        </article><article className="user-data">
                                            <h4 className="data-title">City :</h4>
                                            <h4>{data?.city}</h4>
                                        </article>
                                        <article className="user-data">
                                            <h4 className="data-title">Address:</h4>
                                            <h4>{data?.address}</h4>
                                        </article>
                                        <article className="user-data">
                                            <h4 className="data-title">Postal Code :</h4>
                                            <h4>{data?.postal_code}</h4>
                                        </article>






                                    </article>
                                </TabPane>
                                <TabPane
                                    tab={
                                        <span className="tab">
                                            <EditIcon />
                                            Edit
                                        </span>
                                    }
                                    key="2"
                                >
                                    <CreateStoreStyle>
                                        <article className="header">
                                            <h3>Update Store Details</h3>
                                        </article>
                                        <article className="form">
                                            <article>
                                                <label>Store name</label>
                                            </article>
                                            <article>
                                                <input type="text"
                                                    required
                                                    name="store_name"
                                                    value={data?.store_name}
                                                    onChange={(e) => onChangeData(e)}

                                                />
                                            </article>
                                            <article>
                                                <label>Store Email</label>
                                            </article>
                                            <article>
                                                <input type="text"
                                                    name="store_email"
                                                    value={data?.store_email}
                                                    onChange={(e) => onChangeData(e)} />
                                            </article>
                                            <article>
                                                <label>Store Contact</label>
                                            </article>
                                            <article>
                                                <input type="tel"
                                                    name="contact"
                                                    value={data?.contact}
                                                    onChange={(e) => onChangeData(e)} />
                                            </article>
                                            <article>
                                                <label>Country</label>
                                            </article>
                                            <article>
                                                <input type="text"
                                                    name="country"
                                                    value={data?.country}
                                                    onChange={(e) => onChangeData(e)} />
                                            </article>
                                            <article>
                                                <label>City</label>
                                            </article>
                                            <article>
                                                <input
                                                    type="text"
                                                    name="city"
                                                    value={data?.city}
                                                    onChange={(e) => onChangeData(e)}
                                                />

                                            </article>
                                            <article>
                                                <label>Street</label>
                                            </article>
                                            <article>
                                                <input type="text"
                                                    name="address"
                                                    value={data?.address}
                                                    onChange={(e) => onChangeData(e)} />
                                            </article>
                                            <article>
                                                <label>Postal Code</label>
                                            </article>
                                            <article>
                                                <input type="text"
                                                    name="postal_code"
                                                    value={data?.postal_code}
                                                    onChange={(e) => onChangeData(e)} />
                                            </article>


                                        </article>


                                        <article className="button-wrapper">
                                            <button className="login-btn" onClick={update}>Update</button>

                                        </article>
                                    </CreateStoreStyle>

                                </TabPane>
                            </Tabs>
                        </ProfileDetailsStyle>

                    ) :
                    (

                        <CreateStoreStyle>
                            <article className="header">
                                <h3>Add Store Details</h3>
                            </article>
                            <article className="form">
                                <article>
                                    <label>Store name</label>
                                </article>
                                <article>
                                    <input type="text"
                                        required
                                        name="store_name"
                                        value={data?.store_name}
                                        onChange={(e) => onChangeData(e)}

                                    />
                                </article>
                                <article>
                                    <label>Store Email</label>
                                </article>
                                <article>
                                    <input type="text"
                                        name="store_email"
                                        value={data?.store_email}
                                        onChange={(e) => onChangeData(e)} />
                                </article>
                                <article>
                                    <label>Store Contact</label>
                                </article>
                                <article>
                                    <input type="tel"
                                        name="contact"
                                        value={data?.contact}
                                        onChange={(e) => onChangeData(e)} />
                                </article>
                                <article>
                                    <label>Country</label>
                                </article>
                                <article>
                                    <input type="text"
                                        name="country"
                                        value={data?.country}
                                        onChange={(e) => onChangeData(e)} />
                                </article>
                                <article>
                                    <label>City</label>
                                </article>
                                <article>
                                    <input
                                        type="text"
                                        name="city"
                                        value={data?.city}
                                        onChange={(e) => onChangeData(e)}
                                    />

                                </article>
                                <article>
                                    <label>Street</label>
                                </article>
                                <article>
                                    <input type="text"
                                        name="address"
                                        value={data?.address}
                                        onChange={(e) => onChangeData(e)} />
                                </article>
                                <article>
                                    <label>Postal Code</label>
                                </article>
                                <article>
                                    <input type="text"
                                        name="postal_code"
                                        value={data?.postal_code}
                                        onChange={(e) => onChangeData(e)} />
                                </article>


                            </article>

                            <article className="button-wrapper">
                                <button className="login-btn" onClick={postRes}>Submit</button>

                            </article>
                        </CreateStoreStyle>

                    )



            }
        </article>

    )
}

export default CreateStore;
