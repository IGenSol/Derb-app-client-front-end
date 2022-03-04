import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Tabs } from "antd";

import {
  EditIcon,
  UserTabIcon,
} from "../../../../svgs";
import {
  ProfileDetailsStyle,
  ProfileInfoStyle,
  ProfileStyle,

} from "./Profile.style";
import { getUserId } from "../../../../utils/Common";
import axios from "axios";

const userId = sessionStorage.getItem("userId")

const ProfileDetails = (props) => {
  const { first_name, last_name, email, mobile, password, dob, gender } = props;
  const { TabPane } = Tabs;

  const url = `${process.env.REACT_APP_BASE_URL}/users/${userId}`;


  let [user, setuser] = useState({
    first_name: first_name,
    last_name: last_name,
    email: email,
    gender: gender,
    dob: dob,
    password: password,
  });
  const [image, setimg] = useState([])

  useEffect(() => {
    getuser();

  }, [])

  const getuser = async () => {
    await axios.get(url).then((res) => {
      setuser(res.data.data);
    })
  }

  const change = (e) => {
    setuser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const submit = () => {
    const formData = new FormData();
    formData.append("user_image", image);
    formData.append("first_name", user.first_name);
    formData.append("last_name", user.last_name);
    formData.append("email", user.email);
    formData.append("password", user.password);
    formData.append("gender", user.gender);
    formData.append("dob", user.dob);


    axios.put(url, formData).then((res) => {
      toast.success("Profile Update Successfully", {
        theme: 'dark'
      });
      getuser()
    }).catch((err) => {
      toast.error("Please Fill All Field", {
        theme: 'dark'
      });
    })
  }





  return (
    <ProfileDetailsStyle>
      <ToastContainer
      />
      <Tabs defaultActiveKey="1" tabBarGutter={50}>
        <TabPane
          tab={
            <span className="tab">
              <UserTabIcon />
              Profile
            </span>
          }
          key="1"
        >
          <h3 className="heading">Profile</h3>

          <article className="user-details">
            <article className="user-data">
              <h4 className="data-title">First Name :</h4>
              <h4>{user?.first_name}</h4>
            </article>
            <article className="user-data">
              <h4 className="data-title">Last Name :</h4>
              <h4>{user?.last_name}</h4>
            </article>
            <article className="user-data">
              <h4 className="data-title">Email :</h4>
              <h4>{user?.email}</h4>
            </article>
            <article className="user-data">
              <h4 className="data-title">Gender :</h4>
              <h4>{user?.gender}</h4>
            </article>
            <article className="user-data">
              <h4 className="data-title">DOB :</h4>
              <h4>{user?.first_namedob}</h4>
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
          <h3 className="heading">Update Your Profile</h3>
          <article className="option-wrapper">
            <label className="setting">
              <p className="text">First Name</p>
              <input type="text"
                name="first_name"
                value={user?.first_name}
                onChange={(e) => change(e)} />
            </label>
            <label className="setting">
              <p className="text">Last Name</p>
              <input type="text"
                name="last_name"
                value={user?.last_name}
                onChange={(e) => change(e)} />
            </label>
            <label className="setting">
              <p className="text">Email</p>
              <input type="text"
                name="email"
                value={user?.email}
                onChange={(e) => change(e)} />
            </label>
            <label className="setting">
              <p className="text">Password</p>
              <input type="password"
                name="password"
                value={user?.password}
                onChange={(e) => change(e)} />
            </label>
            <label className="setting">
              <p className="text">Gender</p>
              <article>
                <input className='.input' type="radio" id="Check" name="check"
                  value="Male"
                  onChange={(e) => change(e)} />
                <label className='mx-3'>Male</label>
                <input type="radio" name="check" id="Check"
                  value="Female"
                  onChange={(e) => change(e)} />
                <label className='mx-3'>Female</label>
              </article>
            </label>
            <label className="setting">
              <p className="text">DOB</p>
              <input type="date"
                name="dob"
                onChange={(e) => change(e)} />

            </label>
            <label className="setting">
              <p className="text">Update Image</p>
              <input type="file" placeholder='upload Image'
                name="image"
                onChange={(e) => setimg(e.target.files[0])}
              />

            </label>
          </article>


          <button className="deactive-btn" onClick={submit}>Up Date</button>
        </TabPane>
      </Tabs>
    </ProfileDetailsStyle>
  );
};

const ProfileInfo = (props) => {
  const { last_name, first_name, email, picture } = props;
  return (
    <ProfileInfoStyle>
      <article className="user-details">
        <picture className="user-profile-wrapper">
          <img
            src={picture}
            alt="User Profile"
            className="user-profile"
          />
        </picture>

        <h2 className="name">{first_name} {last_name}</h2>
        <h3 className="email">{email}</h3>
        <hr className='my-5' />
        {/* <article className="social-icons-wrapper">
          <a href="#" className="icon">
            <FacebookIcon />
          </a>
          <a href="#" className="icon">
            <TwitterIcon />
          </a>
          <a href="#" className="icon">
            <InstagramIcon />
          </a>
        </article> */}
      </article>

      <article className="employee-status">
        <h3 className="heading">Employ Status</h3>

        <article className="employee-performance">
          <h3 className="label">Performance</h3>
          <h3 className="percentage">80%</h3>
        </article>
        <article className="employee-performance">
          <h3 className="label">Overtime</h3>
          <h3 className="percentage">20%</h3>
        </article>
        <article className="employee-performance">
          <h3 className="label">Leave Taken</h3>
          <h3 className="percentage">30%</h3>
        </article>
      </article>
    </ProfileInfoStyle>
  );
};

function Profile() {
  const [user, setUser] = useState([]);
  const url = `${process.env.REACT_APP_BASE_URL}/users/${userId}`;

  const id = getUserId();

  useEffect(() => {
    getUserData();
  }, []);


  const getUserData = async () => {
    await axios
      .get(`${url}/${id}`)
      .then((res) => {
        setUser(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <ProfileStyle>
      <article className="section-header">
        <h2 className="section-title">Profile</h2>
        <p className="description">Vendor Panel</p>
      </article>

      <section className="profile-body">
        <ProfileInfo {...user} />
        <ProfileDetails {...user} />
      </section>
    </ProfileStyle>
  );
}

export default Profile;
