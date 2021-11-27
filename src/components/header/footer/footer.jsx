import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
                        <footer class="footer_area footer_bg footer_space">
            <div class="container">
                <div class="subscribe_wrap">
                    <div class="row">
                        <div class="col-lg-7 col-md-6">
                            <div class="sub_text">
                                <h3>Sign up Newslatter</h3>
                            </div>
                        </div>
                        <div class="col-lg-5 col-md-6">
                            <form class="sub_from" action="#">
                                <input type="text" placeholder="Enter Your Mail"/>
                                <button class="thm_btn">Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="footer_main">
                    <div class="row">
                        <div class="col-lg-4 col-md-6">
                            <div class="footer_widget">
                                <h3>About Edulan</h3>
                                <div class="about_text">
                                    <p>Rorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                                </div>
                                <div class="social_icon mt-45">
                                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                                    <a href="#"><i class="fab fa-twitter"></i></a>
                                    <a href="#"><i class="fab fa-behance"></i></a>
                                    <a href="#"><i class="fab fa-youtube"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-6">
                            <div class="footer_widget footer_link-left">
                                <h3>Categories</h3>
                                <ul class="footer_link">
                                    <li><a href="#">All Courses</a></li>
                                    <li><a href="#">Design Courses</a></li>
                                    <li><a href="#">Branding Design</a></li>
                                    <li><a href="#">Business</a></li>
                                    <li><a href="#">Architecture</a></li>
                                    <li><a href="#">Digital Branding</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <div class="footer_widget footer_link-right">
                                <h3>Support</h3>
                                <ul class="footer_link">
                                    <li><a href="#">Contact Support</a></li>
                                    <li><a href="#">System Requermnet</a></li>
                                    <li><a href="#">Site Feedback</a></li>
                                    <li><a href="#">Register Activation Key</a></li>
                                    <li><a href="#">24/7 Service</a></li>
                                    <li><a href="#">System Requerment</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <div class="footer_widget footer_right_text">
                                <h3>Get In Touch</h3>
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
                    </div>
                </div>
                <div class="footer_bottom">
                    <div class="left f-left ul_li">
                        <div class="logo">
                            <a href="index.html"><img src="assets\img\logo\logo_white.png" alt=""/></a>
                        </div>
                        <ul class="info ul_li">
                            <li>info@webmail.com</li>
                            <li> 24/7</li>
                        </ul>
                    </div>
                    <div class="right f-right">
                        <a class="thm_btn thm_btn-border" href="account.html">Login<i class="fal fa-key"></i></a>
                        <a class="thm_btn" href="account.html">Sign Up<i class="fal fa-long-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </footer>
            </div>
        );
    }
}

export default Footer;
