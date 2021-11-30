import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="footer_area footer_bg footer_space">
                    <div className="container-fluid footer-margin">
                        <div className="subscribe_wrap">
                            <div className="row">
                                <div className="col-lg-7 col-md-6">
                                    <div className="sub_text">
                                        <h3>Sign up Newslatter</h3>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-6">
                                    <form className="sub_from" action="#">
                                        <input type="text" placeholder="Enter Your Mail" />
                                        <button className="thm_btn">Subscribe</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="footer_main">
                            <div className="row">
                                <div className="col-lg-2 col-md-6">
                                    <div className="footer_widget">
                                        <h3>SERVICES</h3>
                                        <ul className="footer_link">
                                            <li><a href="#">Write my Essay</a></li>
                                            <li><a href="#">Write my Dissertation</a></li>
                                            <li><a href="#">Assignment Writer</a></li>
                                            <li><a href="#">Law Essay</a></li>
                                            <li><a href="#">MBA Essay</a></li>
                                            <li><a href="#">HRM Essay</a></li>
                                            <li><a href="#">Literature Review</a></li>
                                            <li><a href="#">Terms of Service</a></li>
                                            <li><a href="#">Refund policy</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-6">
                                    <div className="footer_widget footer_link-left">
                                        <h3>ESSAYS</h3>
                                        <ul className="footer_link">
                                            <li><a href="#">Custom Essay</a></li>
                                            <li><a href="#">PhD Writers</a></li>
                                            <li><a href="#">Buy Assignments</a></li>
                                            <li><a href="#">Coursework Help</a></li>
                                            <li><a href="#">Nursing Essay</a></li>
                                            <li><a href="#">Finance Essay</a></li>
                                            <li><a href="#">Marketing Essay</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-6">
                                    <div className="footer_widget footer_link-right">
                                        <h3>NEEDS</h3>
                                        <ul className="footer_link">
                                            <li><a href="#">Buy Essay</a></li>
                                            <li><a href="#">Assignment Help</a></li>
                                            <li><a href="#">Cheap Assignment</a></li>
                                            <li><a href="#">Do My Coursework</a></li>
                                            <li><a href="#">Management Essay</a></li>
                                            <li><a href="#">Economics Essay</a></li>
                                            <li><a href="#">English Essay</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-6">
                                    <div className="footer_widget footer_right_text">
                                        <h3>ASSIGNMENTS & ESSAY</h3>
                                        <ul className="footer_link">
                                        <li><a href="#">Buy Disseratation</a></li>
                                        <li><a href="#">Dissertation Help</a></li>
                                        <li><a href="#">Personal Statement Help</a></li>
                                        <li><a href="#">History Essay</a></li>
                                        <li><a href="#">Sociology Essay</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="footer_widget footer_link-right">
                                        <h3>DISCLAIMER</h3>
                                        <ul className="footer_link">
                                            <li>
                                                <p>
                                                All the information, papers and writing work on this website TopWriting.co.uk or through
                                                this website TopWriting.co.uk is published in good faith and for research and reference
                                                purposes only. We do not allow submitting these papers as it is for academic credit or
                                                any official purposes.
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="footer_main">
                            <div className="row">
                                <div className="col-lg-4 col-md-6">
                                    <div className="footer_widget">
                                        <h3>About Topwriting</h3>
                                        <div className="about_text">
                                            <p>We are a UK-based service that serves the writing needs of college and university students.
                                                We understand that it can be tough for students to catch up with the lectures and tests with
                                                assignments coming on top. Rather than trailing after the deadlines, students can avail our
                                                services and focus on their lectures and exams while sorting out their upcoming timetable.</p>
                                        </div>
                                        <div className="social_icon mt-45">
                                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                                            <a href="#"><i className="fab fa-twitter"></i></a>
                                            <a href="#"><i className="fab fa-behance"></i></a>
                                            <a href="#"><i className="fab fa-youtube"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-6">
                                    <div className="footer_widget footer_link-left">
                                        <h3>POLICIES</h3>
                                        <ul className="footer_link">
                                            <li><a href="#">Return Policy</a></li>
                                            <li><a href="#">Privacy Policy</a></li>
                                            <li><a href="#">FAQ</a></li>
                                            <li><a href="#">Terms and Conditions</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="footer_widget footer_link-right">
                                        <h3>PAYMENT</h3>
                                        <ul className="footer_link">
                                            <li><p>We accept only Paypal to</p></li>
                                            <li><a href="mailto:hello@topwriting.co.uk">hello@topwriting.co.uk</a></li>
                                            <li><p>Please note that if you do not already have PayPal we can send a money request that
                                                can be paid on any Credit or Debit Card</p></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="footer_widget footer_right_text">
                                        <h3>CONTACT US</h3>
                                        <ul>
                                            <li>
                                                <p>786/A Romada tower mall Brooklyn, NYC</p>
                                            </li>
                                            <li>
                                                <a href="tel:00 44 7950 771218">00 44 7950 771218</a>
                                            </li>
                                            <li>
                                                <a href="mailto:hello@topwriting.co.uk">hello@topwriting.co.uk</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="footer_bottom">
                            <div className="left f-left ul_li">
                                <div className="logo">
                                    <a href="index.html"><img src="assets\img\logo\logo_white.png" alt="" /></a>
                                </div>
                                <ul className="info ul_li">
                                    <li>info@webmail.com</li>
                                    <li> 24/7</li>
                                </ul>
                            </div>
                            <div className="right f-right">
                                <Link to='/account' className="thm_btn thm_btn-border">Login<i className="fal fa-key"></i></Link>
                                <Link to='/account' className="thm_btn thm_btn-border">Sign Up<i className="fal fa-long-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;
