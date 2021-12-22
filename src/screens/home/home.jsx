import React, { Component } from "react";
import Calculator from "../../components/calculator/calculator";
import { Link } from "react-router-dom";
import axios from "axios";
import { baseurl } from "../../components/Apiurl/apiurl";
import { allurl } from "../../components/Apiurl/apiurl";
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            academicproducts:[],
            rewritingproducts:[],
            dissertationproducts:[],
            admissionproducts:[]
        };
    }

    async componentDidMount() {

        const th = this;
        const options = { headers: { "Content-Type": "application/json" } };
        await axios
            .get(`${baseurl}/get-product/3 `, options)
            .then(function (response) {
                response.data.map((item) =>
                    th.setState({
                        products: item.products.sort(() => Math.random() - Math.random())
                    })
                );
            });

            await axios
            .get(`${baseurl}/get-product/1 `, options)
            .then(function (response) {
                response.data.map((item) =>
                    th.setState({
                        academicproducts: item.products.sort(() => Math.random() - Math.random())
                    })
                );
            });

            await axios
            .get(`${baseurl}/get-product/2 `, options)
            .then(function (response) {
                response.data.map((item) =>
                    th.setState({
                        rewritingproducts: item.products.sort(() => Math.random() - Math.random())
                    })
                );
            });
            await axios
            .get(`${baseurl}/get-product/5 `, options)
            .then(function (response) {
                response.data.map((item) =>
                    th.setState({
                        dissertationproducts: item.products.sort(() => Math.random() - Math.random())
                    })
                );
            });
            await axios
            .get(`${baseurl}/get-product/4 `, options)
            .then(function (response) {
                response.data.map((item) =>
                    th.setState({
                        admissionproducts: item.products.sort(() => Math.random() - Math.random())
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
                                            <Link to="/contact" className="thm_btn" href="courses.html">
                                                    Contact Us
                                                    <i className="fal fa-long-arrow-right"></i>
                                                    </Link>
                                               
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
                                        <Link to="/products/3" className="thm_btn">
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
                                            <h2>All you need to know about us</h2>
                                            <p>
                                            We are a UK-based service that serves the writing needs of college and university students. We understand that it can be tough for students to catch up with the lectures and tests with assignments coming on top. Rather than trailing after the deadlines, students can avail our services and focus on their lectures and exams while sorting out their upcoming timetable.

                                            </p>
                                        </div>
                                       
                                        <div className="about_btn mt-10">
                                            <Link to="/about" className="thm_btn" href="courses.html">
                                                View <i className="fal fa-long-arrow-right"></i>
                                                </Link>
                                            
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
                                        <Link to="/products/1" className="thm_btn">
                                            {" "}
                                            View all<i className="fal fa-long-arrow-right"></i>
                                        </Link>
                                    </div>
                                </div>
                                <div className="row">
                                {this.state.academicproducts.slice(0, 6).map((element) => {
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
                            
                        </div>
                    </section>

                    <section className="courses_area pt-120 pb-90">
                        <div className="container">
                            <div className="row align-items-center mb-15">
                                <div className="col-lg-8 col-md-8">
                                    <div className="sec_title">
                                        <h2>ADMISSION SERVICES</h2>
                                        <p>
                                            Online learning offers a new way to explore subjects
                                            you’re passionate about.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4">
                                    <div className="crs_btn text-md-end mb-20">
                                        <Link to="/products/4" className="thm_btn">
                                            {" "}
                                            View all<i className="fal fa-long-arrow-right"></i>
                                        </Link>
                                    </div>
                                </div>
                                <div className="row">
                                {this.state.admissionproducts.map((element) => {
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
                            
                        </div>
                    </section>
                    <section className="about_area white_bg pt-120 pb-90">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="about_img mb-30">
                                        <img src="assets\img\course\00.jpg" alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="about_content mb-30">
                                        <div className="sec_title">
                                            <h2>All you need to know about our writers</h2>
                                            <p>
                                            Time to meet the people behind the Top Writings logo! Our writers are the engine running our system and also the ones that you, dear clients, talk to most frequently here. So we treat the process of writer assigning with the utmost care. Everyone within our UK essay writing team is an expert in their chosen field and they have the corresponding credentials to prove it. We give priority to writers originating from the UK. 
                                            </p>
                                        </div>
                                       
                                        <div className="about_btn mt-10">
                                            <Link to="/writers" className="thm_btn" href="courses.html">
                                                View <i className="fal fa-long-arrow-right"></i>
                                                </Link>
                                            
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
                                        <h2>DISSERTATION SERVICES</h2>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4">
                                    <div className="crs_btn text-md-end mb-20">
                                        <Link to="/products/5" className="thm_btn">
                                            {" "}
                                            View all<i className="fal fa-long-arrow-right"></i>
                                        </Link>
                                    </div>
                                </div>
                                <div className="row">
                                {this.state.dissertationproducts.slice(0, 6).map((element) => {
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
                                        <Link to="/products/2" className="thm_btn">
                                            {" "}
                                            View all<i className="fal fa-long-arrow-right"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                {this.state.rewritingproducts.slice(0, 6).map((element) => {
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
                                        <Link to="/contact" className="thm_btn thm_btn-border">
                                            apply now<i className="fal fa-long-arrow-right"></i>
                                       </Link>
                                        <div className="bai_shape">
                                            <img src="assets\img\icon\bai_shape_01.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="bai_wrap bai_right white_bg">
                                        <span># Become A Partner</span>
                                        <h3>Become a Partner</h3>
                                        <Link to="/contact" className="thm_btn thm_btn-2">
                                            Contact us<i className="fal fa-long-arrow-right"></i>
                                       </Link>
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
