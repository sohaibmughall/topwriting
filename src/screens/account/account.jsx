import React, { Component } from 'react';
import axios from 'axios'
import { baseurl } from '../../components/Apiurl/apiurl';

class Account extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            pass: "",
        }
    }
    login = () => {
        const data = {
            email: this.state.email,
            password: this.state.pass,
        }
        const options = { headers: { 'Content-Type': 'application/json', 'Accept': '*/*', 'Connection': 'keep-alive' } }
        const th = this
        axios.post(`${baseurl}/login`, data, options).then(
            function (response) {
                localStorage.setItem("user", JSON.stringify(response.data))
                th.props.history.push('/')
            }
        )
    }
    registor = () => {
        const data = {
            email: this.state.email,
            password: this.state.pass,
            name: this.state.name
        }
        const th = this
        const options = { headers: { 'Content-Type': 'application/json', 'Accept': '*/*', 'Connection': 'keep-alive' } }
        axios.post(`${baseurl}/register`, data, options).then(
            function (response) {
                th.props.history.push('/')
            }
        )

    }




    render() {
        return (
            <>
                <main>
                    <section className="page_title_area" data-overlay="6" data-background="assets/img/bg/page_title_bg.jpg">
                        <div className="containe">
                            <div className="row">
                                <div className="col-l2">
                                    <div className="page_title text-center">
                                        <h2>My Account</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="account_area pt-120 pb-90">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="account_wrap">
                                        <h3 className="title">Login your Account</h3>
                                        <input type="email" placeholder="Your Email" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
                                        <input type="password" placeholder="Password" value={this.state.pass} onChange={(e) => this.setState({ pass: e.target.value })} />
                                        <button className="thm_btn" onClick={() => this.login()}>Login Now</button>
                                        <div className="action ul_li">
                                            <span className="left">
                                                <input id="remember" type="checkbox" />
                                                <label for="remember">Remember me</label>
                                            </span>
                                            <span className="right">
                                                <span>Don’t have an account<a href="#">Sign up</a></span>
                                            </span>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="account_wrap">
                                        <h3 className="title">Sign up your Account</h3>

                                        <input type="text" placeholder="Your Name" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} />
                                        <input type="email" placeholder="Your Email" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
                                        <input type="password" placeholder="Password" value={this.state.pass} onChange={(e) => this.setState({ pass: e.target.value })} />
                                        <button className="thm_btn" onClick={() => this.registor()}>Sign up Now</button>
                                        <div className="action ul_li">
                                            <span className="left">
                                                <input id="remember2" type="checkbox" />
                                                <label for="remember2">Remember me</label>
                                            </span>
                                            <span className="right">
                                                <span>Already have an accout<a href="#">Login</a></span>
                                            </span>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="bai_area bai_bootom_space">
                        <div className="container">
                            <div className="row g-0">
                                <div className="col-lg-6">
                                    <div className="bai_wrap bai_left theme_bg">
                                        <span># Become A Instructor</span>
                                        <h3>Become a Instructor</h3>
                                        <a className="thm_btn thm_btn-border" href="contact.html">apply now<i className="fal fa-long-arrow-right"></i></a>
                                        <div className="bai_shape">
                                            <img src="assets\img\icon\bai_shape_01.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="bai_wrap bai_right white_bg">
                                        <span># Become A Partner</span>
                                        <h3>Become a Partner</h3>
                                        <a className="thm_btn thm_btn-2" href="contact.html">Contact us<i className="fal fa-long-arrow-right"></i></a>
                                        <div className="bai_shape">
                                            <img src="assets\img\icon\bai_shape_02.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </>
        );
    }
}

export default Account;
