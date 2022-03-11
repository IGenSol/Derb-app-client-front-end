import React, { useState } from "react";
import { Tabs } from "antd";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { LoginFormstyle, LoginStyle, Signupstyle } from "./LoginForm.style";

import {
  FacebookIcon,
  GoogleIcon,
  Inputusericon,
  Inputpassword,
  Emailicon,
  PhoneIcon,
} from "../../svgs/index";
import { setUserSession } from "../../utils/Common";

const Signup = () => {
  const url = `${process.env.REACT_APP_BASE_URL}/users`;
  const [signUp, setSignUp] = useState({
    first_name: "",
    last_name: "",
    email: "",
    mobile: "",
    password: "",
    role: "",
  });

  const onSubmitInput = (e) => {
    setSignUp({
      ...signUp,
      [e.target.name]: e.target.value,
    });
  };


  const userSignUp = async () => {
    let formIsValid = true;
    if (signUp.first_name == "" || signUp.email == "" || signUp.password == "" || signUp.mobile == "") {
      formIsValid = false
      toast.error("Please Fill All field", {
        theme: 'dark'
      });
    }
    if (formIsValid) {
      await axios
        .post(url, signUp)
        .then((res) => {
          toast.success("Signup Successfully", {
            theme: 'dark'
          });
        })
        .catch((err) => {
          toast.error("Invalid credentials", {
            theme: 'dark'
          });
        });
    }
  };

  return (
    <Signupstyle>
      <article className="input-container">
        <span className="icon">
          <Inputusericon />
        </span>
        <input
          type="text"
          className="custom-input"
          name="first_name"
          required
          placeholder="First Name"
          value={signUp.first_name}
          onChange={(e) => onSubmitInput(e)}
        />
      </article>
      <article className="input-container">
        <span className="icon">
          <Inputusericon />
        </span>
        <input
          type="text"
          className="custom-input"
          name="last_name"
          placeholder="Last Name"
          value={signUp.last_name}
          onChange={(e) => onSubmitInput(e)}
        />
      </article>
      <article className="input-container">
        <span className="icon">
          <Emailicon />
        </span>
        <input
          type="email"
          className="custom-input"
          name="email"
          placeholder="Enter your Email adress"
          value={signUp.email}
          onChange={(e) => onSubmitInput(e)}
        />
      </article>
      <article className="input-container">
        <span className="icon">
          <PhoneIcon />
        </span>
        <input
          type="tel"
          className="custom-input"
          name="mobile"
          placeholder="Mobile"
          value={signUp.mobile}
          onChange={(e) => onSubmitInput(e)}
        />
      </article>
      <article className="input-container">
        <span className="icon">
          <Inputpassword />
        </span>
        <input
          type="password"
          className="custom-input"
          name="password"
          placeholder="Password"
          value={signUp.password}
          onChange={(e) => onSubmitInput(e)}
        />
      </article>
      <article className="input-container">
        <span className="icon">
          <Inputusericon />
        </span>
        <select
          className="select-user-input"
          name="role"
          value={signUp.role}
          onChange={(e) => onSubmitInput(e)}
        >
          <option>Select Account Type</option>
          <option value="vendor">Vendor</option>
          <option value="user">User</option>
        </select>
      </article>

      <button className="login-btn" onClick={(e) => userSignUp(e)}>
        Sign up
      </button>
      <p className="continue-text">or continue with</p>
      <span className="social-icon">
        <FacebookIcon /> <GoogleIcon />
      </span>
    </Signupstyle>
  );
};

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  const [Role, setRole] = useState("")

  const handleLogin = () => {
    setError(null);
    setLoading(true);

    axios
      .post(`${process.env.REACT_APP_BASE_URL}/users/login`, {
        email: email,
        password: password,
      })
      .then((res) => {
        setLoading(false);
        console.log(res)
        if (res.data.message == "Login successfully") {
          setUserSession(
            res.data.token,
            res.data.data.first_name,
            res.data.data.last_name,
            res.data.data.id,
            res.data.data.email,
            res.data.data.mobile,
            res.data.data.role,
            res.data.data.picture,
            res.data.data.store_id
          );

          setRole(res.data.data.role);

          let path = res.data.data.role;

          switch (path) {
            case "VENDOR":
              return props.history.push("/dashboard");

            case "USER":
              return props.history.push("/");

            default:
              return props.history.push("/");

          }

          // props.history.push("/dashboard");



          // window.location.reload();
        } else {
          setError(res.data.message);
          toast.error("Invalid credentials", {
            theme: 'dark'
          });
        }
        console.log(`response >> `, res);
      })
      .catch((err) => {
        setError(err.res.data.message);
        setLoading(false);
        console.log(`error >>`, err);
      });
  };

  return (
    <LoginStyle>

      {error && <p className="error">{error}</p>}
      <article className="input-container">
        <span className="icon">
          <Inputusericon />
        </span>
        <input
          type="email"
          name="email"
          className="custom-input"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </article>
      <article className="input-container">
        <span className="icon">
          <Inputpassword />
        </span>
        <input
          type="password"
          name="password"
          className="custom-input"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </article>

      <input
        type="button"
        className="login-btn"
        disabled={loading}
        onClick={handleLogin}
        value={loading ? "loading..." : "Login"}
      />

      <p className="continue-text">or continue with</p>
      <span className="social-icon">
        <FacebookIcon /> <GoogleIcon />
      </span>
    </LoginStyle>
  );
};

function LoginForm(props) {
  const { TabPane } = Tabs;

  return (
    <>
      <ToastContainer
      />
      <LoginFormstyle>

        <picture className="image-wrapper">
          <img
            src="./images/account-logo.png"
            alt="Site Logo"
            className="account-logo"
          />
        </picture>

        <article className="form-wrapper login-colunm">
          <Tabs
            // tabBarGutter={100}
            size="large"
            centered="true"
            defaultActiveKey="1"

          >
            <TabPane tab="Login" key="Login">
              <Login {...props} />
            </TabPane>

            <TabPane tab="Signup" key="Signup">
              <Signup />
            </TabPane>
          </Tabs>
        </article>
      </LoginFormstyle>
    </>
  );
}

export default LoginForm;
