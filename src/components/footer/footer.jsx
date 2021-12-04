import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footerdata from './footerdata';

class Footer extends Component {
    
    render() {
        console.log(Footerdata)
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
                                    <form className="sub_from" action="/">
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
                                            <li >
                                               
                                                <Link to="/writemyessay">Write my Essay</Link>
                                                </li>
                                            <li><Link to="/writemydessertation">Write my Dissertation</Link></li>
                                            <li><Link to="/assignmentwriter">Assignment Writer</Link></li>
                                            <li><Link to="/lawessay">Law Essay</Link></li>
                                            <li><Link to="/mbaessay">MBA Essay</Link></li>
                                            <li><Link to="/hrmessay">HRM Essay</Link></li>
                                            <li><Link to="/literaturereview">Literature Review</Link></li>
                                            <li><Link to="/tos">Terms of Service</Link></li>
                                            <li><Link to="/refundpolicy">Refund policy</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-6">
                                    <div className="footer_widget footer_link-left">
                                        <h3>ESSAYS</h3>
                                        <ul className="footer_link">
                                            <li><Link to="/customessay">Custom Essay</Link></li>
                                            <li><Link to="/phdwriters">PhD Writers</Link></li>
                                            <li><Link to="/buyassignment">Buy Assignments</Link></li>
                                            <li><Link to="/coursework">Coursework Help</Link></li>
                                            <li><Link to="/nursingessay">Nursing Essay</Link></li>
                                            <li><Link to="/financerssay">Finance Essay</Link></li>
                                            <li><Link to="/marketingessay">Marketing Essay</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-6">
                                    <div className="footer_widget footer_link-right">
                                        <h3>NEEDS</h3>
                                        <ul className="footer_link">
                                            <li><Link to="/buyessay">Buy Essay</Link></li>
                                            <li><Link to="/assignmenthelp">Assignment Help</Link></li>
                                            <li><Link to="/cheapassignment">Cheap Assignment</Link></li>
                                            <li><Link to="/domycoursework">Do My Coursework</Link></li>
                                            <li><Link to="/managementessay">Management Essay</Link></li>
                                            <li><Link to="/economicsessay">Economics Essay</Link></li>
                                            <li><Link to="/englishessay">English Essay</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-6">
                                    <div className="footer_widget footer_right_text">
                                        <h3>ASSIGNMENTS & ESSAY</h3>
                                        <ul className="footer_link">
                                        <li><Link to="/buydisseratation">Buy Disseratation</Link></li>
                                        <li><Link to="/disserationhelp">Dissertation Help</Link></li>
                                        <li><Link to="/personalsh">Personal Statement Help</Link></li>
                                        <li><Link to="/historyessay">History Essay</Link></li>
                                        <li><Link to="/sociologyessay">Sociology Essay</Link></li>
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
                                            <Link to="/"><i className="fab fa-facebook-f"></i></Link>
                                            <Link to="/"><i className="fab fa-twitter"></i></Link>
                                            <Link to="/"><i className="fab fa-behance"></i></Link>
                                            <Link to="/"><i className="fab fa-youtube"></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-6">
                                    <div className="footer_widget footer_link-left">
                                        <h3>POLICIES</h3>
                                        <ul className="footer_link">
                                            <li><Link to="/returnpolicy">Return Policy</Link></li>
                                            <li><Link to="/privacypolicy">Privacy Policy</Link></li>
                                            <li><Link to="/faqs">FAQs</Link></li>
                                            <li><Link to="/termoc">Terms and Conditions</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="footer_widget footer_link-right">
                                        <h3>PAYMENT</h3>
                                        <ul className="footer_link">
                                            <li><p>We accept only Paypal to</p></li>
                                            <li><Link to="mailto:hello@topwriting.co.uk">hello@topwriting.co.uk</Link></li>
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
                                                <Link to="tel:00 44 7950 771218">00 44 7950 771218</Link>
                                            </li>
                                            <li>
                                                <Link to="mailto:hello@topwriting.co.uk">hello@topwriting.co.uk</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="footer_bottom">
                            <div className="left f-left ul_li">
                                <div className="logo">
                                    <Link to="index.html"><img src="assets\img\logo\logo_white.png" alt="" /></Link>
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
