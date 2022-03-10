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
    const [city, setcity] = useState([]);
    const [cityvalue, setcityvalue] = useState([]);

    const urlCity = `${process.env.REACT_APP_BASE_URL}/cities`;
    const urlres = `${process.env.REACT_APP_BASE_URL}/restaurant`;

    useEffect(() => {
        getcity();
    }, []);
    const getcity = async () => {
        const data = await axios.get(urlCity);
        setcity(data.data.data);
    };
    const id = sessionStorage.getItem("userId");
    const [address, setAddress] = useState("");
    const [vendor_id, setv] = useState(id);

    const [location, setLocation] = useState({
        latitude: "",
        longitude: "",
    });



    const [data, setdata] = useState({
        restaurant_name: "",
        restaurant_email: "",
        address: "",
        city: "",
        contact: "",
        description: "",
        Delivery_status: "",
        Delivery_fee: "",
        Distance_Cover: "",
        restaurant_id: ""
    });


    const [cover_image, setcoverimg] = useState([])
    const [profile_image, setprofileimg] = useState([])


    const onChangeData = (e) => {
        setdata({
            ...data,
            [e.target.name]: e.target.value,
        });
    };

    sessionStorage.setItem("address", JSON.stringify(address));

    useEffect(() => {
        getrestruant();
    }, []);

    const getrestruant = async () => {

        await axios.get(`${urlres}/${userId}`).then((res) => {
            setdata(res.data.data)
        }).catch((err) => {
            console.log(err)
        })

    }

    // localStorage.setItem("restaurant_name", data.restaurant_name);
    // localStorage.setItem("restaurant_profile_image", data.profile_image);


    const formData = new FormData();
    formData.append("restaurant_name", data?.restaurant_name);
    formData.append("restaurant_email", data?.restaurant_email);
    formData.append("address", data?.address);
    formData.append("city", data?.city);
    formData.append("contact", data?.contact);
    formData.append("description", data?.description);
    formData.append("Delivery_status", data?.Delivery_status);
    formData.append("Delivery_fee", data?.Delivery_fee);
    formData.append("Distance_Cover", data?.Distance_Cover);
    formData.append("longitude", location?.longitude);
    formData.append("latitude", location?.latitude);
    formData.append("profile_image", profile_image);
    formData.append("cover_image", cover_image);
    formData.append("vendor_id", vendor_id);

    const postRes = (e) => {
        e.preventDefault();

        axios.post(urlres, formData)
            .then((res) => {
                alert(res)
                getrestruant();
            })
            .catch((err) => {
                alert(err);
            });
    };

    const update = (e) => {
        axios.put(`${urlres}/${userId}`, formData).then((res) => {
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
                data?.restaurant_id ?
                    (

                        <ProfileDetailsStyle>
                            <ToastContainer
                            />
                            <Tabs defaultActiveKey="1" tabBarGutter={50}>
                                <TabPane
                                    tab={
                                        <span className="tab">
                                            <UserTabIcon />
                                            Restruant Details
                                        </span>
                                    }
                                    key="1"
                                >
                                    <h3 className="heading">Restruant Details</h3>
                                    <article className="user-details">
                                        <article className="user-data">
                                            <h4 className="data-title">Restaurant Name :</h4>
                                            <h4>{data?.restaurant_name}</h4>
                                        </article>
                                        <article className="user-data">
                                            <h4 className="data-title">Restaurant Email :</h4>
                                            <h4>{data?.restaurant_email}</h4>
                                        </article>
                                        <article className="user-data">
                                            <h4 className="data-title">Address:</h4>
                                            <h4>{data?.address}</h4>
                                        </article>
                                        <article className="user-data">
                                            <h4 className="data-title">City :</h4>
                                            <h4>{data?.city}</h4>
                                        </article>
                                        <article className="user-data">
                                            <h4 className="data-title">Contact :</h4>
                                            <h4>{data?.contact}</h4>
                                        </article>
                                        <article className="user-data">
                                            <h4 className="data-title">Description :</h4>
                                            <h4>{data?.description}</h4>
                                        </article>
                                        <article className="user-data">
                                            <h4 className="data-title">Delivery_status :</h4>
                                            <h4>{data?.Delivery_status}</h4>
                                        </article>
                                        <article className="user-data">
                                            <h4 className="data-title">Delivery Fee :</h4>
                                            <h4>{data?.Delivery_fee}</h4>
                                        </article>
                                        <article className="user-data">
                                            <h4 className="data-title">Distance Cover:</h4>
                                            <h4>{data?.Distance_Cover}</h4>
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
                                            <h3>Update Restaurant Details</h3>
                                        </article>
                                        <article className="form">
                                            <article>
                                                <label>Restaurant name</label>
                                            </article>
                                            <article>
                                                <input type="text"
                                                    required
                                                    name="restaurant_name"
                                                    value={data?.restaurant_name}
                                                    onChange={(e) => onChangeData(e)}

                                                />
                                            </article>
                                            <article>
                                                <label>Restaurant Email</label>
                                            </article>
                                            <article>
                                                <input type="text"
                                                    name="restaurant_email"
                                                    value={data?.restaurant_email}
                                                    onChange={(e) => onChangeData(e)} />
                                            </article>
                                            <article>
                                                <label>Restaurant Contact</label>
                                            </article>
                                            <article>
                                                <input type="tel"
                                                    name="contact"
                                                    value={data?.contact}
                                                    onChange={(e) => onChangeData(e)} />
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
                                                <label>City</label>
                                            </article>
                                            <article>
                                                <select
                                                    className="dropdown"
                                                    name="city"
                                                    value={data?.city}
                                                    onChange={(e) => onChangeData(e)}
                                                >
                                                    {city &&
                                                        city.map((data, index) => {
                                                            const { city_name } = data;
                                                            return (
                                                                <option key={index} value={city_name}>
                                                                    {city_name}
                                                                </option>
                                                            );
                                                        })}
                                                </select>
                                            </article>
                                            <article>
                                                <label>Deliver Option</label>
                                            </article>
                                            <article>
                                                <select
                                                    name="Delivery_status"
                                                    value={data?.Delivery_status}
                                                    onChange={(e) => onChangeData(e)}>
                                                    <option value="FREE">Free</option>
                                                    <option value="PAID">Paid</option>
                                                </select>
                                            </article>
                                            <article>
                                                <label>Delivery Charges</label>
                                            </article>
                                            <article>
                                                <input type="text" placeholder='5 rupees per KM'
                                                    name="Delivery_fee"
                                                    value={data?.Delivery_fee}
                                                    onChange={(e) => onChangeData(e)} />
                                            </article>
                                            <article>
                                                <label>Deliver Range</label>
                                            </article>
                                            <article>
                                                <select
                                                    name="Distance_Cover"
                                                    value={data?.Distance_Cover}
                                                    onChange={(e) => onChangeData(e)}
                                                >
                                                    <option value="5">5  KM</option>
                                                    <option value="10">10  KM</option>
                                                    <option value="20">20  KM</option>
                                                </select>
                                            </article>
                                            <article>
                                                <label>ResturantDescription</label>
                                            </article>
                                            <article>
                                                <textarea type="text"
                                                    name="description"
                                                    value={data?.description}
                                                    onChange={(e) => onChangeData(e)}
                                                />
                                            </article>
                                            <article>
                                                <label>Cover Image</label>
                                            </article>
                                            <article>
                                                <input type="file"
                                                    onChange={(e) => setcoverimg(e.target.files[0])}
                                                />
                                            </article><article>
                                                <label>Profile Image</label>
                                            </article>
                                            <article>
                                                <input type="file"
                                                    onChange={(e) => setprofileimg(e.target.files[0])}
                                                />
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
                                <h3>Add Restaurant Details</h3>
                            </article>
                            <article className="form">
                                <article>
                                    <label>Restaurant name</label>
                                </article>
                                <article>
                                    <input type="text"
                                        required
                                        name="restaurant_name"
                                        value={data?.restaurant_name}
                                        onChange={(e) => onChangeData(e)}

                                    />
                                </article>
                                <article>
                                    <label>Restaurant Email</label>
                                </article>
                                <article>
                                    <input type="text"
                                        name="restaurant_email"
                                        value={data?.restaurant_email}
                                        onChange={(e) => onChangeData(e)} />
                                </article>
                                <article>
                                    <label>Restaurant Contact</label>
                                </article>
                                <article>
                                    <input type="tel"
                                        name="contact"
                                        value={data?.contact}
                                        onChange={(e) => onChangeData(e)} />
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
                                    <label>City</label>
                                </article>
                                <article>
                                    <select
                                        className="dropdown"
                                        name="city"
                                        value={data?.city}
                                        onChange={(e) => onChangeData(e)}
                                    >
                                        {city &&
                                            city.map((data, index) => {
                                                const { city_name } = data;
                                                return (
                                                    <option key={index} value={city_name}>
                                                        {city_name}
                                                    </option>
                                                );
                                            })}
                                    </select>
                                </article>
                                <article>
                                    <label>Deliver Option</label>
                                </article>
                                <article>
                                    <select
                                        name="Delivery_status"
                                        value={data?.Delivery_status}
                                        onChange={(e) => onChangeData(e)}>
                                        <option value="FREE">Free</option>
                                        <option value="PAID">Paid</option>
                                    </select>
                                </article>
                                <article>
                                    <label>Delivery Charges</label>
                                </article>
                                <article>
                                    <input type="text" placeholder='5 rupees per KM'
                                        name="Delivery_fee"
                                        value={data?.Delivery_fee}
                                        onChange={(e) => onChangeData(e)} />
                                </article>
                                <article>
                                    <label>Deliver Range</label>
                                </article>
                                <article>
                                    <select
                                        name="Distance_Cover"
                                        value={data?.Distance_Cover}
                                        onChange={(e) => onChangeData(e)}
                                    >
                                        <option value="5">5  KM</option>
                                        <option value="10">10  KM</option>
                                        <option value="20">20  KM</option>
                                    </select>
                                </article>
                                <article>
                                    <label>ResturantDescription</label>
                                </article>
                                <article>
                                    <textarea type="text"
                                        name="description"
                                        value={data?.description}
                                        onChange={(e) => onChangeData(e)}
                                    />
                                </article>
                                <article>
                                    <label>Cover Image</label>
                                </article>
                                <article>
                                    <input type="file"
                                        onChange={(e) => setcoverimg(e.target.files[0])}
                                    />
                                </article><article>
                                    <label>Profile Image</label>
                                </article>
                                <article>
                                    <input type="file"
                                        onChange={(e) => setprofileimg(e.target.files[0])}
                                    />
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
