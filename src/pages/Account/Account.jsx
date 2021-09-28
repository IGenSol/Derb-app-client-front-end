import React from 'react'
import { Tabs } from 'antd';
import { Loginstyle, Signupstyle, Inputstyle } from "./Account.style"
import { FacebookIcon, GoogleIcon } from "../../svgs/index"


const Login = () => {
    return (
        <Inputstyle>
            <article className="input-wrapper">
                <input
                    type="text"
                    name="Username"
                    placeholder="Username"
                    className="site-searchbar"
                />
                <span className="icon-wrapper">
                    {/* <SearchIcon /> */}
                </span>
                <input
                    type="text"
                    name="Password"
                    placeholder="Password"
                    className="site-searchbar"
                />
                <span className="icon-wrapper">
                    {/* <SearchIcon /> */}
                </span>

                <button className="login-btn">Login</button>

                <p>or continue with</p>

                <span className="icon"><FacebookIcon />   <GoogleIcon /></span>

            </article>
        </Inputstyle>
    )
}


const Signup = () => {
    return (
        <Inputstyle>
            <article className="input-wrapper">
                <input
                    type="text"
                    name="Username"
                    placeholder="Username"
                    className="site-searchbar"
                />
                <span className="icon-wrapper">
                    {/* <SearchIcon /> */}
                </span>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="site-searchbar"
                />
                <span className="icon-wrapper">
                    {/* <SearchIcon /> */}
                </span>
                <input
                    type="text"
                    name="password"
                    placeholder="Password"
                    className="site-searchbar"
                />
                <span className="icon-wrapper">
                    {/* <SearchIcon /> */}
                </span>
                <input
                    type="text"
                    name="conformpassword"
                    placeholder="Conform-Password"
                    className="site-searchbar"
                />
                <span className="icon-wrapper">
                    {/* <SearchIcon /> */}
                </span>

                <button className="login-btn">Sign up</button>

                <p>or continue with</p>

                <span className="icon"><FacebookIcon />   <GoogleIcon /></span>

            </article>
        </Inputstyle>
    )
}





const Useraccount = () => {

    const { TabPane } = Tabs;

    return (
        <Signupstyle>

            <Tabs
                tabBarGutter={100}
                size="large"
                centered="true"
                defaultActiveKey="1"
                className="border"
            >
                <TabPane tab="Login" key="Login">
                    <article className="Login">
                        <Login />
                    </article>
                </TabPane>

                <TabPane tab="Signup" key="Signup">
                    <Signup />
                </TabPane>
            </Tabs>

        </Signupstyle >




    )
}


function Account() {
    return (
        <Loginstyle>
            <picture className="image-wrapper">
                <img
                    src="./images/site-logo.png"
                    alt="Site Logo"
                    className="account-logo"
                />
            </picture>
            <Useraccount />


        </Loginstyle>
    )
}

export default Account;
