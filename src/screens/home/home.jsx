import React, { Component } from "react";
import Calculator from "../../components/calculator/calculator";
import { Link } from "react-router-dom";
import axios from "axios";
import { baseurl } from "../../components/Apiurl/apiurl";
import { allurl } from "../../components/Apiurl/apiurl";
class Home extends Component {
    constructor(props) {
        super(props);
        console.log("Hello I am a constructor");
        this.state = {
            products: [],
        };
    }

    async componentDidMount() {

        const th = this;
        const options = { headers: { "Content-Type": "application/json" } };
        await axios
            .get(`${baseurl}/get-product/1 `, options)
            .then(function (response) {
                response.data.map((item) =>
                    th.setState({
                        products: item.products.sort(() => Math.random() - Math.random()),
                    })
                );
            });
    }

    render() {
        return (
            <>
                <aside className="slide-bar">
                    <div className="close-mobile-menu">
                        <a href="javascript:void(0);">
                            <i className="ti-close"></i>
                        </a>
                    </div>

                    <div className="sidebar-info">
                        <div className="sidebar-logo mb-30">
                            <a href="index.html">
                                <img src="assets\img\logo\logo.png" alt="logo" />
                            </a>
                        </div>
                        <div className="sidebar-content mb-45">
                            <h4 className="s-title">About us</h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud nisi ut aliquip ex ea commodo
                                consequat.
                            </p>
                            <a className="thm_btn" href="contact.html">
                                Contact us<i className="fal fa-long-arrow-right"></i>
                            </a>
                        </div>
                        <div className="s_contact-list mb-30">
                            <h4 className="s-title">Get In Touch</h4>
                            <div className="footer_widget pt-20">
                                <ul>
                                    <li>
                                        <p>786/A Romada tower mall Brooklyn, NYC</p>
                                    </li>
                                    <li>
                                        <p>+987 876 765765 65</p>
                                        <p>(987)787 876876 87</p>
                                    </li>
                                    <li>
                                        <p>info@webmail.com</p>
                                        <p>jobsinfo@webmail.com</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="social_icon mt-20">
                            <a href="#">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#">
                                <i className="fab fa-behance"></i>
                            </a>
                            <a href="#">
                                <i className="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>

                    <nav className="side-mobile-menu">
                        <div className="header-mobile-search">
                            <form role="search" method="get" action="#">
                                <input type="text" placeholder="Search Keywords" />
                                <button type="submit">
                                    <i className="ti-search"></i>
                                </button>
                            </form>
                        </div>
                        <ul id="mobile-menu-active">
                            <li>
                                <a href="index.html">Home</a>
                            </li>
                            <li>
                                <a href="about.html">About</a>
                            </li>
                            <li className="dropdown">
                                <a href="#">Pages</a>
                                <ul className="sub-menu">
                                    <li className="dropdown">
                                        <a href="#">Shop</a>
                                        <ul className="submenu">
                                            <li>
                                                <a href="shop.html">Shop List</a>
                                            </li>
                                            <li>
                                                <a href="shop-details.html">Shop Details</a>
                                            </li>
                                            <li>
                                                <a href="cart.html">Shop Cart</a>
                                            </li>
                                            <li>
                                                <a href="checkout.html">Shop Checkout</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="dropdown">
                                        <a href="#">Team</a>
                                        <ul className="submenu">
                                            <li>
                                                <a href="team.html">Team</a>
                                            </li>
                                            <li>
                                                <a href="team-details.html">Team Details</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="pricing.html">Pricing</a>
                                    </li>
                                    <li>
                                        <a href="faq.html">FAQ</a>
                                    </li>
                                    <li>
                                        <a href="account.html">Account</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="dropdown">
                                <a href="#">Courses</a>
                                <ul className="sub-menu">
                                    <li>
                                        <a href="courses.html">Courses</a>
                                    </li>
                                    <li>
                                        <a href="course-details.html">Course Details</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="dropdown">
                                <a href="#">Blog</a>
                                <ul className="sub-menu">
                                    <li>
                                        <a href="blog.html">Blog</a>
                                    </li>
                                    <li>
                                        <a href="blog-details.html">Blog Details</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="contact.html">Contact</a>
                            </li>
                        </ul>
                    </nav>
                </aside>
                <div className="body-overlay"></div>

                <main>
                    <section className="hero_area">
                        <div className="hero_wrap hero_height">
                            <div className="container-fluid">
                                <div className="row flex-row-reverse align-items-center">
                                    <div className="col-xl-7 col-lg-6 col-md-12">
                                        <div className="hero_img f-right">
                                            <Calculator />
                                            {/* <img src="assets\img\hero\hero_img.png" alt="" /> */}
                                        </div>
                                    </div>
                                    <div className="col-xl-5 col-lg-6 col-md-12">
                                        <div className="hero_content">
                                            <div className="icon">
                                                <img src="assets\img\icon\hero_icon.png" alt="" />
                                            </div>
                                            <span># Learn Anything, Anytime, Anywhere</span>
                                            <h2>Best Online Learning For your future.</h2>
                                            <p>
                                                We believe everyone has the capacity to be creative.
                                                Turitor is a place where people develop their own
                                                potential.
                                            </p>
                                            <div className="hero_btn mt-15">
                                                <a className="thm_btn" href="courses.html">
                                                    View Courses
                                                    <i className="fal fa-long-arrow-right"></i>
                                                </a>
                                                <a className="thm_btn thm_btn-2" href="about.html">
                                                    Start Trial<i className="fal fa-long-arrow-right"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="courses_cat_area pt-110 pb-120">
                        <div className="container">
                            <div className="row align-items-center mb-15">
                                <div className="col-lg-8 col-md-8">
                                    <div className="sec_title">
                                        <h2>PROOFREADING</h2>
                                        <p>
                                            Online learning offers a new way to explore subjects
                                            you’re passionate about.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4">
                                    <div className="crs_btn text-md-end mb-20">
                                        <Link to="/proofreading" className="thm_btn">
                                            {" "}
                                            View all<i className="fal fa-long-arrow-right"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                {this.state.products.slice(0, 6).map((element) => {
                                    return (
                                        <div className="col-lg-4 col-md-6">
                                            <div className="course_single mb-30">
                                                <div className="c_thumb">
                                                    <img
                                                        src={`${allurl}image/product/${element.image}`}
                                                        alt=""
                                                        style={{ width:"70%" }}
                                                    />
                                                </div>
                                                <div className="course_content">
                                                    <h3 className="title">
                                                        <a href="course-details.html">{element.name}</a>
                                                    </h3>
                                                    <div className="about_btn mt-10 d-flex justify-content-between">
                                                        <Link to="/ordernow" className="thm_btn thm_btn-2">
                                                            Order Now
                                                            <i className="fal fa-long-arrow-right"></i>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </section>

                    <section className="about_area white_bg pt-120 pb-90">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="about_img mb-30">
                                        <img src="assets\img\about\about_img.png" alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="about_content mb-30">
                                        <div className="sec_title">
                                            <h2>Learn something new, and Grow your skills.</h2>
                                            <p>
                                                Rorem ipsum dolor sit amet, consectetur adipisicing
                                                elit, sed do eiusmod tempor incididunt ut labore et
                                                dolore magna aliqua Ut enim ad minim veniam, quis
                                                nostrudye. magna aliqua Utey Tim ad minim veniam, quis
                                                nostrudye.
                                            </p>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6 col-sm-6">
                                                <div className="al_signle">
                                                    <span>
                                                        <i className="fal fa-check"></i>Expert Trainer
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6">
                                                <div className="al_signle">
                                                    <span>
                                                        <i className="fal fa-check"></i>Remote Learning
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6">
                                                <div className="al_signle">
                                                    <span>
                                                        <i className="fal fa-check"></i>Lifetime Access
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6">
                                                <div className="al_signle">
                                                    <span>
                                                        <i className="fal fa-check"></i>Self Developmentr
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="about_btn mt-10">
                                            <a className="thm_btn" href="courses.html">
                                                View Courses<i className="fal fa-long-arrow-right"></i>
                                            </a>
                                            <a className="thm_btn thm_btn-2" href="about.html">
                                                Start Trial<i className="fal fa-long-arrow-right"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="courses_area pt-120 pb-90">
                        <div className="container">
                            <div className="row align-items-center mb-15">
                                <div className="col-lg-8 col-md-8">
                                    <div className="sec_title">
                                        <h2>ACADEMICS PAPER WRITING</h2>
                                        <p>
                                            Online learning offers a new way to explore subjects
                                            you’re passionate about.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4">
                                    <div className="crs_btn text-md-end mb-20">
                                        <Link to="/academicPaperWriting" className="thm_btn">
                                            {" "}
                                            View all<i className="fal fa-long-arrow-right"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-6">
                                    <div className="course_single mb-30">
                                        <div className="c_thumb">
                                            <img src="assets\img\course\f1.png" alt="" />
                                        </div>
                                        <div className="course_content">
                                            <h3 className="title">
                                                <a href="course-details.html">CASE STUDY</a>
                                            </h3>
                                            <div className="about_btn mt-10 d-flex justify-content-between">
                                                <Link to="/ordernow" className="thm_btn thm_btn-2">
                                                    Order Now<i className="fal fa-long-arrow-right"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="course_single mb-30">
                                        <div className="c_thumb">
                                            <img src="assets\img\course\f2.png" alt="" />
                                        </div>
                                        <div className="course_content">
                                            <h3 className="title">
                                                <a href="course-details.html">LAB REPORT</a>
                                            </h3>
                                            <div className="about_btn mt-10 d-flex justify-content-between">
                                                <Link to="/ordernow" className="thm_btn thm_btn-2">
                                                    Order Now<i className="fal fa-long-arrow-right"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="course_single mb-30">
                                        <div className="c_thumb">
                                            <img src="assets\img\course\f3.png" alt="" />
                                        </div>
                                        <div className="course_content">
                                            <h3 className="title">
                                                <a href="course-details.html">
                                                    POWER POINT PRESENTATION
                                                </a>
                                            </h3>
                                            <div className="about_btn mt-10 d-flex justify-content-between">
                                                <Link to="/ordernow" className="thm_btn thm_btn-2">
                                                    Order Now<i className="fal fa-long-arrow-right"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="course_single mb-30">
                                        <div className="c_thumb">
                                            <img src="assets\img\course\f4.png" alt="" />
                                        </div>
                                        <div className="course_content">
                                            <h3 className="title">
                                                <a href="course-details.html">ARTICLE</a>
                                            </h3>
                                            <div className="about_btn mt-10 d-flex justify-content-between">
                                                <Link to="/ordernow" className="thm_btn thm_btn-2">
                                                    Order Now<i className="fal fa-long-arrow-right"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="course_single mb-30">
                                        <div className="c_thumb">
                                            <img src="assets\img\course\f5.png" alt="" />
                                        </div>
                                        <div className="course_content">
                                            <h3 className="title">
                                                <a href="course-details.html">ARTICLE CRITIQUE</a>
                                            </h3>
                                            <div className="about_btn mt-10 d-flex justify-content-between">
                                                <Link to="/ordernow" className="thm_btn thm_btn-2">
                                                    Order Now<i className="fal fa-long-arrow-right"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="course_single mb-30">
                                        <div className="c_thumb">
                                            <img src="assets\img\course\f6.png" alt="" />
                                        </div>
                                        <div className="course_content">
                                            <h3 className="title">
                                                <a href="course-details.html">PROJECT</a>
                                            </h3>
                                            <div className="about_btn mt-10 d-flex justify-content-between">
                                                <Link to="/ordernow" className="thm_btn thm_btn-2">
                                                    Order Now<i className="fal fa-long-arrow-right"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section
                        className="counter_area counter_padding"
                        data-overlay="7"
                        data-background="assets/img/bg/counter_bg.jpg"
                    >
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="coun_wrap">
                                        <div className="coun_single">
                                            <div className="c_icon">
                                                <img src="assets\img\icon\c_01.png" alt="" />
                                            </div>
                                            <div className="c_text">
                                                <h2>
                                                    146<span>+</span>
                                                </h2>
                                                <p>Award Winning</p>
                                            </div>
                                        </div>
                                        <div className="coun_single">
                                            <div className="c_icon">
                                                <img src="assets\img\icon\c_02.png" alt="" />
                                            </div>
                                            <div className="c_text">
                                                <h2>
                                                    28k<span>+</span>
                                                </h2>
                                                <p>Total Student</p>
                                            </div>
                                        </div>
                                        <div className="coun_single">
                                            <div className="c_icon">
                                                <img src="assets\img\icon\c_03.png" alt="" />
                                            </div>
                                            <div className="c_text">
                                                <h2>
                                                    138<span>+</span>
                                                </h2>
                                                <p>Total instructors</p>
                                            </div>
                                        </div>
                                        <div className="coun_single">
                                            <div className="c_icon">
                                                <img src="assets\img\icon\c_04.png" alt="" />
                                            </div>
                                            <div className="c_text">
                                                <h2>
                                                    214<span>+</span>
                                                </h2>
                                                <p>over the world</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="join_courses_area">
                        <div className="container">
                            <div className="js_wrap white_bg">
                                <div className="row">
                                    <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
                                        <div className="js_text">
                                            <div className="sec_title sec_title-2 text-center">
                                                <h2>If your need join our course</h2>
                                                <p>
                                                    We believe everyone has the capacity to be creative.
                                                    Turitor is aplace where people develop their own
                                                    potential.
                                                </p>
                                            </div>
                                            <form className="js_from" action="#">
                                                <input type="text" placeholder="Enter your mail" />
                                                <button className="thm_btn thm_btn-2">
                                                    submit now<i className="fal fa-long-arrow-right"></i>
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="js_icon">
                                    <div className="left">
                                        <img src="assets\img\icon\js_01.png" alt="" />
                                    </div>
                                    <div className="right">
                                        <img src="assets\img\icon\js_02.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="team_area pt-110 pb-90">
                        <div className="container">
                            <div className="row align-items-center mb-15">
                                <div className="col-lg-8 col-md-8">
                                    <div className="sec_title">
                                        <h2>REWRITING</h2>
                                        <p>
                                            Online learning offers a new way to explore subjects
                                            you’re passionate about.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4">
                                    <div className="crs_btn text-md-end mb-20">
                                        <Link to="/rewriting" className="thm_btn">
                                            {" "}
                                            View all<i className="fal fa-long-arrow-right"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-6">
                                    <div className="course_single mb-30">
                                        <div className="c_thumb">
                                            <img src="assets\img\course\d1.png" alt="" />
                                        </div>
                                        <div className="course_content">
                                            <h3 className="title">
                                                <a href="course-details.html">PROJECT</a>
                                            </h3>
                                            <div className="about_btn mt-10 d-flex justify-content-between">
                                                <Link to="/ordernow" className="thm_btn thm_btn-2">
                                                    Order Now<i className="fal fa-long-arrow-right"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="course_single mb-30">
                                        <div className="c_thumb">
                                            <img src="assets\img\course\d2.png" alt="" />
                                        </div>
                                        <div className="course_content">
                                            <h3 className="title">
                                                <a href="course-details.html">REACTION PAPER</a>
                                            </h3>
                                            <div className="about_btn mt-10 d-flex justify-content-between">
                                                <Link to="/ordernow" className="thm_btn thm_btn-2">
                                                    Order Now<i className="fal fa-long-arrow-right"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="course_single mb-30">
                                        <div className="c_thumb">
                                            <img src="assets\img\course\d3.png" alt="" />
                                        </div>
                                        <div className="course_content">
                                            <h3 className="title">
                                                <a href="course-details.html">
                                                    ANNOTATED BILBLIOGRAPHY
                                                </a>
                                            </h3>
                                            <div className="about_btn mt-10 d-flex justify-content-between">
                                                <Link to="/ordernow" className="thm_btn thm_btn-2">
                                                    Order Now<i className="fal fa-long-arrow-right"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="course_single mb-30">
                                        <div className="c_thumb">
                                            <img src="assets\img\course\d4.png" alt="" />
                                        </div>
                                        <div className="course_content">
                                            <h3 className="title">
                                                <a href="course-details.html">ARTICLE CRITIQUE</a>
                                            </h3>
                                            <div className="about_btn mt-10 d-flex justify-content-between">
                                                <Link to="/ordernow" className="thm_btn thm_btn-2">
                                                    Order Now<i className="fal fa-long-arrow-right"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="course_single mb-30">
                                        <div className="c_thumb">
                                            <img src="assets\img\course\d5.png" alt="" />
                                        </div>
                                        <div className="course_content">
                                            <h3 className="title">
                                                <a href="course-details.html">ARTICLE</a>
                                            </h3>
                                            <div className="about_btn mt-10 d-flex justify-content-between">
                                                <Link to="/ordernow" className="thm_btn thm_btn-2">
                                                    Order Now<i className="fal fa-long-arrow-right"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="course_single mb-30">
                                        <div className="c_thumb">
                                            <img src="assets\img\course\d6.png" alt="" />
                                        </div>
                                        <div className="course_content">
                                            <h3 className="title">
                                                <a href="course-details.html">LAB REPORT</a>
                                            </h3>
                                            <div className="about_btn mt-10 d-flex justify-content-between">
                                                <Link to="/ordernow" className="thm_btn thm_btn-2">
                                                    Order Now<i className="fal fa-long-arrow-right"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="testimonial_area">
                        <div className="container-fluid p-0">
                            <div className="row g-0">
                                <div className="col-lg-6">
                                    <div
                                        className="tm_left-wrap"
                                        data-overlay="7"
                                        data-background="assets/img/bg/tm_bg.jpg"
                                    >
                                        <div className="sec_title">
                                            <h2>Our happy student say</h2>
                                            <p>
                                                Rorem ipsum dolor sit amet consectetur adipisicing elit.
                                                Delectus quas aperiam cum eligendi libero iusto nostrum
                                                eaque alias quasi minima maxime provident, dolor
                                                mollitia quis inventore impedit, deserunt blanditiis
                                                quos cumque quibusdam eum quidem.
                                            </p>
                                        </div>
                                        <div className="tm_btn">
                                            <a className="thm_btn thm_btn-2" href="courses.html">
                                                View All Courses
                                                <i className="fal fa-long-arrow-right"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="tm_right-wrap">
                                        <div className="testimonial_active owl-carousel">
                                            <div className="testimonial_single">
                                                <div className="tm_thumb">
                                                    <img
                                                        src="assets\img\testimonial\tm_author.jpg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="tm_text">
                                                    <p>
                                                        Rorem ipsum dolor sit amet, consectetur adipisicing
                                                        elit, sed eiusmod tempor incididunt ut labore et
                                                        dolore magna aliqua.enim ad minim veniam, quis
                                                        nostrud exercitation ullamco laboris nisi ut commodo
                                                        consequat. Duis aute irure dolor in reprehenderit in
                                                        voluptate velit esse cillum dolore eu fugiat nulla
                                                        pariatur.{" "}
                                                    </p>
                                                    <div className="tma_info mt-50">
                                                        <h4>Rasalina De Willamson</h4>
                                                        <p>Founder,Foxer.co</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="testimonial_single">
                                                <div className="tm_thumb">
                                                    <img
                                                        src="assets\img\testimonial\tm_author.jpg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="tm_text">
                                                    <p>
                                                        Rorem ipsum dolor sit amet, consectetur adipisicing
                                                        elit, sed eiusmod tempor incididunt ut labore et
                                                        dolore magna aliqua.enim ad minim veniam, quis
                                                        nostrud exercitation ullamco laboris nisi ut commodo
                                                        consequat. Duis aute irure dolor in reprehenderit in
                                                        voluptate velit esse cillum dolore eu fugiat nulla
                                                        pariatur.{" "}
                                                    </p>
                                                    <div className="tma_info mt-50">
                                                        <h4>Rasalina De Willamson</h4>
                                                        <p>Founder,Foxer.co</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="testimonial_single">
                                                <div className="tm_thumb">
                                                    <img
                                                        src="assets\img\testimonial\tm_author.jpg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="tm_text">
                                                    <p>
                                                        Rorem ipsum dolor sit amet, consectetur adipisicing
                                                        elit, sed eiusmod tempor incididunt ut labore et
                                                        dolore magna aliqua.enim ad minim veniam, quis
                                                        nostrud exercitation ullamco laboris nisi ut commodo
                                                        consequat. Duis aute irure dolor in reprehenderit in
                                                        voluptate velit esse cillum dolore eu fugiat nulla
                                                        pariatur.{" "}
                                                    </p>
                                                    <div className="tma_info mt-50">
                                                        <h4>Rasalina De Willamson</h4>
                                                        <p>Founder,Foxer.co</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="blog_area blog_top-space pt-190 pb-90">
                        <div className="container">
                            <div className="row align-items-center mb-15">
                                <div className="col-lg-8 col-md-8">
                                    <div className="sec_title">
                                        <h2>Every single update from here</h2>
                                        <p>
                                            Online learning offers a new way to explore subjects
                                            you’re passionate about.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4">
                                    <div className="crs_btn text-md-end mb-20">
                                        <a className="thm_btn" href="blog.html">
                                            View all<i className="fal fa-long-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-md-center">
                                <div className="col-lg-4 col-md-6">
                                    <div className="blog_single mb-30">
                                        <h3 className="title">
                                            <a href="blog-details.html">
                                                Fashion and Luxury Fashion in a Changing Issues
                                            </a>
                                        </h3>
                                        <ul className="meta ul_li">
                                            <li>
                                                <a href="#">
                                                    <i className="fal fa-user"></i>Rasalina De
                                                </a>
                                            </li>
                                            <li>
                                                <i className="fal fa-heart"></i>36 like
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fal fa-comments"></i>8 Comments
                                                </a>
                                            </li>
                                        </ul>
                                        <div className="blog_thumb">
                                            <a href="blog-details.html">
                                                <img src="assets\img\blog\blog_01.jpg" alt="" />
                                            </a>
                                            <span className="date">5,dec</span>
                                        </div>
                                        <a className="blog_btn" href="blog-details.html">
                                            <i className="ti-plus"></i>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="blog_single mb-30">
                                        <h3 className="title">
                                            <a href="blog-details.html">
                                                Making Music with Other Super People
                                            </a>
                                        </h3>
                                        <ul className="meta ul_li">
                                            <li>
                                                <a href="#">
                                                    <i className="fal fa-user"></i>Wasim Mia
                                                </a>
                                            </li>
                                            <li>
                                                <i className="fal fa-heart"></i>53 like
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fal fa-comments"></i>21 Comments
                                                </a>
                                            </li>
                                        </ul>
                                        <div className="blog_thumb">
                                            <a href="blog-details.html">
                                                <img src="assets\img\blog\blog_02.jpg" alt="" />
                                            </a>
                                            <span className="date">6,dec</span>
                                        </div>
                                        <a className="blog_btn" href="blog-details.html">
                                            <i className="ti-plus"></i>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="blog_single mb-30">
                                        <h3 className="title">
                                            <a href="blog-details.html">
                                                The Power of Podcast for Story telling system
                                            </a>
                                        </h3>
                                        <ul className="meta ul_li">
                                            <li>
                                                <a href="#">
                                                    <i className="fal fa-user"></i>Rasalina De
                                                </a>
                                            </li>
                                            <li>
                                                <i className="fal fa-heart"></i>76 like
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fal fa-comments"></i>9 Comments
                                                </a>
                                            </li>
                                        </ul>
                                        <div className="blog_thumb">
                                            <a href="blog-details.html">
                                                <img src="assets\img\blog\blog_03.jpg" alt="" />
                                            </a>
                                            <span className="date">19,dec</span>
                                        </div>
                                        <a className="blog_btn" href="blog-details.html">
                                            <i className="ti-plus"></i>
                                        </a>
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
                                        <a className="thm_btn thm_btn-border" href="contact.html">
                                            apply now<i className="fal fa-long-arrow-right"></i>
                                        </a>
                                        <div className="bai_shape">
                                            <img src="assets\img\icon\bai_shape_01.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="bai_wrap bai_right white_bg">
                                        <span># Become A Partner</span>
                                        <h3>Become a Partner</h3>
                                        <a className="thm_btn thm_btn-2" href="contact.html">
                                            Contact us<i className="fal fa-long-arrow-right"></i>
                                        </a>
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

<script src="../"></script>;

export default Home;
