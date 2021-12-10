import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <>
                <main>
                    <section className="page_title_area" data-overlay="6" data-background="assets/img/bg/page_title_bg.jpg">
                        <div className="containe">
                            <div className="row">
                                <div className="col-l2">
                                    <div className="page_title text-center">
                                        <h2>Get In Touch</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="contact_info_area pb-60">
                        <div className="contact_map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14602.254272231177!2d90.3654215!3d23.7985508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1592852423971!5m2!1sen!2sbd" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="contact_box_wrap">
                                        <div className="row justify-content-md-center">
                                            <div className="col-lg-4 col-md-6">
                                                <div className="single_contact mb-30">
                                                    <div className="contact_icon">
                                                        <i className="fal fa-envelope-open-text"></i>
                                                    </div>
                                                    <div className="contact_text">
                                                        <h4>Email Adress</h4>
                                                        <p>duxilainfo@gmail.com</p>
                                                        <p>Info@webmail.com</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6">
                                                <div className="single_contact mb-30">
                                                    <div className="contact_icon">
                                                        <i className="fal fa-phone"></i>
                                                    </div>
                                                    <div className="contact_text">
                                                        <h4>Phone Number</h4>
                                                        <p>+1255 - 568 - 6523</p>
                                                        <p>+1255 - 568 - 6523</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6">
                                                <div className="single_contact mb-30">
                                                    <div className="contact_icon">
                                                        <i className="fal fa-map-marker-alt"></i>
                                                    </div>
                                                    <div className="contact_text">
                                                        <h4>Our Location</h4>
                                                        <p>Bowery St, New York, NY 10013,USA</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="contact_area pb-120">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="form_wrap contact_from">
                                        <form action="#">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <input type="text" name="fname" placeholder="Your Name" />
                                                </div>
                                                <div className="col-lg-6">
                                                    <input type="email" name="email" placeholder="Mail Address" />
                                                </div>
                                                <div className="col-12">
                                                    <input type="text" name="subject" placeholder="Enter Your Subject :" />
                                                </div>
                                                <div className="col-12">
                                                    <textarea name="message" id="message" cols="30" rows="10" placeholder="Your Massage :"></textarea>
                                                </div>
                                                <div className="col-12">
                                                    <div className="contact_btn text-center">
                                                        <a className="thm_btn thm_btn-black" href="#">Send Massage</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
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

export default Contact;
