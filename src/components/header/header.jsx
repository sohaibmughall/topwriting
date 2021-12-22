import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import { baseurl } from "../../components/Apiurl/apiurl";

class Header extends Component {

    constructor(props){
        super(props);
        this.state={
            all:[]
        }
    }

    async componentDidMount() {
        const data = new FormData();
        const th = this;
        const options = { headers: { "Content-Type": "application/json" } };
        await axios
          .get(`${baseurl}/allcollection`,
            data,
            options
          )
          .then(function (response) {
            response.data.map((item) =>
              th.setState({
                all: response.data
              })
            );
          });
      }


    render() {
        return (
            <header className="header_area">
                <div className="header_top pl-130 pr-130">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <ul className="left">
                                    <li>info@webmail.com</li>
                                    <li> 24/7</li>
                                </ul>
                                <ul className="right">
                                    <li><a href="#"><i className="ti-facebook"></i></a></li>
                                    <li><a href="#"><i className="ti-twitter"></i></a></li>
                                    <li><a href="#"><i className="ti-linkedin"></i></a></li>
                                    <li><a href="#"><i className="ti-instagram"></i></a></li>
                                    <li><a href="#"><i className="ti-vimeo-alt"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="sticky-header" className="header_bottom white_bg pl-130 pr-130">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-xl-2 col-lg-2 col-6">
                                <div className="logo">
                                   <Link to="/"><img src="assets\img\logo\logo.png" alt="" /></Link> 
                                </div>
                            </div>
                            <div className="col-xl-7 col-lg-8 d-none d-lg-block">
                                <nav className="main_menu">
                                    <ul>
                                        <li className="active"><a href="/">Home</a></li>
                                        <li className="has_dropdown">
                                            <Link to='/services'>Services</Link>
                                            <ul className="submenu">
                                            {this.state.all.map((element) => {
                    return (
                                                <li className="d-flex">
                                                    <Link to={`/products/${element.id}`}>{element.name}</Link>
                                                </li>
                    )})}
                                            </ul>
                                            {/* <ul className="submenu">
                                                <li className="has_dropdown">
                                                    <a href="#">Service 1</a>
                                                    <ul className="submenu">
                                                        <li><a href="shop.html">Shop List</a></li>
                                                        <li><a href="shop-details.html">Shop Details</a></li>
                                                        <li><a href="cart.html">Shop Cart</a></li>
                                                        <li><a href="checkout.html">Shop Checkout</a></li>
                                                    </ul>
                                                </li>
                                                <li className="has_dropdown">
                                                    <a href="#">Service 2</a>
                                                    <ul className="submenu">
                                                        <li><a href="team.html">Team</a></li>
                                                        <li><a href="team-details.html">Team Details</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="pricing.html">Service 3</a></li>
                                                <li><a href="faq.html">Service 4</a></li>
                                                <li><a href="account.html">Service 5</a></li>
                                            </ul> */}
                                        </li>
                                        {/* <li className="has_dropdown">
                                            <a href="#">Courses</a>
                                            <ul className="submenu">
                                                <li><a href="courses.html">Courses</a></li>
                                                <li><a href="course-details.html">Course Details</a></li>
                                            </ul>
                                        </li> */}
                                        <li><Link to='/writers'>Our Writers</Link></li>
                                        <li><Link to='/about'>About Us</Link></li>
                                        {/* <li className="has_dropdown">
                                            <a href="#">Blog</a>
                                            <ul className="submenu">
                                                <li><a href="blog.html">Blog</a></li>
                                                <li><a href="blog-details.html">Blog Details</a></li>
                                            </ul>
                                        </li> */}
                                        <li><Link to='/contact'>Contact Us</Link></li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="col-xl-3 col-lg-2 col-6">
                                <div className="header_right">
                                    <div className="header_search_wrap">
                                        {/* <div className="search_main">
                                            <i className="fal fa-search"></i>
                                            <span><i className="fal fa-times"></i></span>
                                        </div> */}
                                        <div className="search_form_main">
                                            <form role="search" method="get" action="#">
                                                <input type="text" placeholder="Search Keywords" />
                                                <button type="submit"><i className="fal fa-search"></i></button>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="hamburger_menu">
                                        <Link to="/cart" className="fal fa-shopping-cart"></Link>
                                            
                                            {/* <i className="fal fa-bars"></i> */}
                                        
                                    </div>
                                    <div className="account">
                                        <Link to='/account'><i className="fal fa-key"></i>account</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
