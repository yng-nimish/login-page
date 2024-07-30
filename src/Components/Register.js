import React from "react";

import BannerImage from "../Assets/logo2.svg";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import comingSoon from "../Assets/Group 62.svg";

import "bootstrap/dist/css/bootstrap.min.css";

const Register = () => {
  const onSubmit = () => {};

  return (
    <div className="about-wrapper">
      <div className="about-us-container">
        <div className="rowC">
          <div className="coming-soon-container">
            <div className="balloon">
              <img
                src={comingSoon}
                className="ballon-image"
                alt="Coming Soon"
              />
            </div>
          </div>
        </div>
        <br /> <br /> <br />
        <br /> <br /> <br />
        <div className="rowC">
          <div className="home-bannerImage-container">
            <img src={BannerImage} alt="" />
          </div>
          <div className="form">
            <div>
              <p>
                <h1 className="primary-heading">Login/Register</h1>
              </p>
            </div>
            <form onSubmit={onSubmit}>
              <Tabs
                defaultActiveKey="home"
                transition={false}
                id="noanim-tab-example"
                className="mb-3 tab"
              >
                <Tab eventKey="home" title="Login" className="tab">
                  <div className="input-box">
                    <label>Email Address</label>
                    <input
                      type="email"
                      className="field"
                      placeholder="Enter your Email"
                      name="email"
                      required
                    />
                  </div>
                  <div className="input-box">
                    <label> Password</label>
                    <input
                      type="password"
                      className="field"
                      placeholder="Enter Password"
                      name="subject"
                      required
                    />
                  </div>
                  <div className="input-box">
                    <button type="submit">Login</button>
                    <button>Get your SUN</button>
                  </div>
                </Tab>
                <Tab eventKey="profile" title="Register" className="tab">
                  <div className="input-box">
                    <label> Full Name</label>
                    <input
                      type="text"
                      className="field"
                      placeholder="Enter your Name"
                      name="name"
                      required
                    />
                  </div>

                  <div className="input-box">
                    <label>Email Address</label>
                    <input
                      type="email"
                      className="field"
                      placeholder="Enter your Email"
                      name="email"
                      required
                    />
                  </div>
                  <div className="input-box">
                    <label> Password</label>
                    <input
                      type="password"
                      className="field"
                      placeholder="Create Password"
                      name="subject"
                      required
                    />
                  </div>
                  <div className="input-box">
                    <input
                      type="password"
                      className="field"
                      placeholder="Enter Password Again"
                      name="subject"
                      required
                    />
                  </div>
                  <div className="input-box">
                    <button type="submit">Register</button>
                  </div>
                </Tab>
              </Tabs>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
