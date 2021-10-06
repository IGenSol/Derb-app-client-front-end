import React from 'react'
import { Tabs } from 'antd';
import { Loginstyle, Signupstyle, Inputstyle } from "./Account.style"
import { FacebookIcon, GoogleIcon, Inputusericon, Inputpassword, Emailicon } from "../../svgs/index"

const Login = () => {


    return (
        <Inputstyle>
            <article className="input-wrapper">

                <article className="inputouter">
                    <span className="inputicon"><Inputusericon /></span>
                    <input
                        type="text"
                        name="udername"
                        placeholder="Username"
                    />
                </article>
                <article className="inputouter">
                    <span className="inputicon"><Inputpassword /></span>
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                    />
                </article>


                <button className="login-btn">Login</button>
                <p>or continue with</p>
                <span className="icon"><FacebookIcon />   <GoogleIcon /></span>

            </article>
        </Inputstyle >
    )
}


const Signup = () => {
    return (
        <Inputstyle>
            <article className="input-wrapper">
                <article className="inputouter">
                    <span className="inputicon"><Inputusericon /></span>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                    />
                </article>
                <article className="inputouter">
                    <span className="inputicon"><Emailicon /></span>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your Email adress"
                    />
                </article>
                <article className="inputouter">
                    <span className="inputicon"><Inputpassword /></span>
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                    />
                </article>
                <article className="inputouter">
                    <span className="inputicon"><Inputpassword /></span>
                    <input
                        type="password"
                        name="conforimpassword"
                        placeholder="Conforim Password"
                    />
                </article>

                <button className="login-btn">Sign up</button>
                <p>or continue with</p>
                <span className="icon"><FacebookIcon />   <GoogleIcon /></span>

            </article>
        </Inputstyle >
    )
}

const Accountwrapper = () => {

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
                    src="./images/account-logo.png"
                    alt="Site Logo"
                    className="account-logo"
                />
            </picture>
            <Accountwrapper />
        </Loginstyle>
    )
}

export default Account;
