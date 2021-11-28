import React, { useState } from "react";
import { Tabs } from "antd";
import axios from "axios";

import { LoginFormstyle, LoginStyle, Signupstyle } from "./LoginForm.style";

import {
  FacebookIcon,
  GoogleIcon,
  Inputusericon,
  Inputpassword,
  Emailicon,
} from "../../svgs/index";
import { setUserSession } from "../../utils/Common";

const Signup = () => {
  return (
    <Signupstyle>
      <article className="input-container">
        <span className="icon">
          <Inputusericon />
        </span>
        <input
          type="text"
          className="custom-input"
          name="name"
          placeholder="Name"
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
        />
      </article>
      <article className="input-container">
        <span className="icon">
          <Inputpassword />
        </span>
        <input
          type="password"
          className="custom-input"
          name="conforimpassword"
          placeholder="Conforim Password"
        />
      </article>

      <button className="login-btn">Sign up</button>
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

  const handleLogin = () => {
    setError(null);
    setLoading(true);

    axios
      .post("http://localhost:5000/api/users/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        setLoading(false);
        if (res.data.message == "Login successfully") {
          setUserSession(res.data.token, res.data.data.first_name);
          props.history.push("/dashboard");
        } else {
          setError(res.data.message);
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
    <LoginFormstyle>
      <picture className="image-wrapper">
        <img
          src="./images/account-logo.png"
          alt="Site Logo"
          className="account-logo"
        />
      </picture>

      <article className="form-wrapper">
        <Tabs
          tabBarGutter={100}
          size="large"
          centered="true"
          defaultActiveKey="1"
          tabBarGutter="0"
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
  );
}

export default LoginForm;
