import React from "react";
import { Tabs } from "antd";

import { LoginFormstyle, LoginStyle, Signupstyle } from "./LoginForm.style";

import {
  FacebookIcon,
  GoogleIcon,
  Inputusericon,
  Inputpassword,
  Emailicon,
} from "../../svgs/index";

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

const Login = () => {
  return (
    <LoginStyle>
      <article className="input-container">
        <span className="icon">
          <Inputusericon />
        </span>
        <input
          type="text"
          name="udername"
          className="custom-input"
          placeholder="Username"
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
        />
      </article>

      <button className="login-btn">Login</button>
      <p className="continue-text">or continue with</p>
      <span className="social-icon">
        <FacebookIcon /> <GoogleIcon />
      </span>
    </LoginStyle>
  );
};

function LoginForm() {
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
            <Login />
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
