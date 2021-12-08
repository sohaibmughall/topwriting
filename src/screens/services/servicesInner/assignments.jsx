import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Assignments extends Component {
    render() {
        return (
            <>
               <main>
                    <section className="page_title_area" data-overlay="6" data-background="assets/img/bg/page_title_bg.jpg">
                        <div className="containe">
                            <div className="row">
                                <div className="col-l2">
                                    <div className="page_title text-center">
                                        <h2>ASSIGNMENTS</h2>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="courses_area pt-120 pb-120">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="masonry_active mb-40">
                                        <button className="active" data-filter="*" style={{marginLeft:"500px"}}>PRODUCTS</button>
                                    </div>
                                </div>
                            </div>
                            <div className="row grid">
                                <div className="col-lg-4 col-md-6 col-sm-6 grid-item mb-30 cat1 cat4 cat5">
                                    <div className="course_single mb-30">
                                        <div className="c_thumb">
                                        <img src="assets\img\course\q1.jpg" alt="" />
                                        </div>
                                        <div className="course_content">
                                            {/* <div className="c_head">
                                                <span className="cat">Architecture</span>
                                                <span className="price">$246</span>
                                            </div> */}
                                            <h3 className="title">2500 WORD ASSIGNMENTS</h3>
                                            <div className="about_btn mt-10 d-flex justify-content-between">
                    <Link to="/cart" className="thm_btn thm_btn-2">Order Now<i className="fal fa-long-arrow-right"></i></Link>
                </div>
                                            {/* <div className="rating_wrap ul_li">
                                                <span>13 votes</span>
                                                <ul className="rating_star ul_li">
                                                    <li><i className="fas fa-star"></i></li>
                                                    <li><i className="fas fa-star"></i></li>
                                                    <li><i className="fas fa-star"></i></li>
                                                    <li><i className="fal fa-star"></i></li>
                                                    <li><i className="fal fa-star"></i></li>
                                                </ul>
                                            </div> */}
                                            {/* <ul className="c_bottom ul_li">
                                                <li><i className="fal fa-file-alt"></i>180</li>
                                                <li><i className="fal fa-user"></i>28k</li>
                                                <li><i className="fal fa-eye"></i>57k</li>
                                                <li>
                                                    <div className="author">
                                                        <img src="assets\img\course\c_author.png" alt="" />
                                                    </div>
                                                </li>
                                            </ul> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 grid-item mb-30 cat3 cat2">
                                    <div className="course_single mb-30">
                                        <div className="c_thumb">
                                            <img src="assets\img\course\q2.jpg" alt="" />
                                        </div>
                                        <div className="course_content">
                                           
                                            <h3 className="title">3500 WORD ASSIGNMENTS</h3>
                                            <div className="about_btn mt-10 d-flex justify-content-between">
                    <Link to="/cart" className="thm_btn thm_btn-2">Order Now<i className="fal fa-long-arrow-right"></i></Link>
                </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 grid-item mb-30 cat4 cat1 cat3 cat5">
                                    <div className="course_single mb-30">
                                        <div className="c_thumb">
                                        <img src="assets\img\course\q3.jpg" alt="" />
                                        </div>
                                        <div className="course_content">
                                           
                                            <h3 className="title">1500 WORD ASSIGNMENTS</h3>
                                            <div className="about_btn mt-10 d-flex justify-content-between">
                    <Link to="/cart" className="thm_btn thm_btn-2">Order Now<i className="fal fa-long-arrow-right"></i></Link>
                </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 grid-item mb-30 cat3 cat1">
                                    <div className="course_single mb-30">
                                        <div className="c_thumb">
                                        <img src="assets\img\course\q4.jpg" alt="" /> 
                                        </div>
                                        <div className="course_content">
                                            
                                            <h3 className="title">2000 WORD ASSIGNMENTS</h3>
                                            <div className="about_btn mt-10 d-flex justify-content-between">
                    <Link to="/cart" className="thm_btn thm_btn-2">Order Now<i className="fal fa-long-arrow-right"></i></Link>
                </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 grid-item mb-30 cat1 cat2 cat5">
                                    <div className="course_single mb-30">
                                        <div className="c_thumb">
                                      <img src="assets\img\course\q5.jpg" alt="" /> 
                                        </div>
                                        <div className="course_content">
                                           
                                            <h3 className="title">3000 WORD ASSIGNMENTS</h3>
                                            <div className="about_btn mt-10 d-flex justify-content-between">
                    <Link to="/cart" className="thm_btn thm_btn-2">Order Now<i className="fal fa-long-arrow-right"></i></Link>
                </div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* <div className="col-lg-4 col-md-6 col-sm-6 grid-item mb-30 cat3 cat2">
                                    <div className="course_single mb-30">
                                        <div className="c_thumb">
                                            <img src="assets\img\course\img_07.jpg" alt="" />
                                        </div>
                                        <div className="course_content">
                                            <div className="c_head">
                                                <span className="cat">Seo Solution</span>
                                                <span className="price">$85</span>
                                            </div>
                                            <h3 className="title"><a href="course-details.html">Antiquities Trafficking and Art Crime</a></h3>
                                            <div className="rating_wrap ul_li">
                                                <span>19 votes</span>
                                                <ul className="rating_star ul_li">
                                                    <li><i className="fas fa-star"></i></li>
                                                    <li><i className="fas fa-star"></i></li>
                                                    <li><i className="fas fa-star"></i></li>
                                                    <li><i className="fas fa-star"></i></li>
                                                    <li><i className="fal fa-star"></i></li>
                                                </ul>
                                            </div>
                                            <ul className="c_bottom ul_li">
                                                <li><i className="fal fa-file-alt"></i>124</li>
                                                <li><i className="fal fa-user"></i>88k</li>
                                                <li><i className="fal fa-eye"></i>539k</li>
                                                <li>
                                                    <div className="author">
                                                        <img src="assets\img\course\c_author.png" alt="" />
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div> */}
                                {/* <div className="col-lg-4 col-md-6 col-sm-6 grid-item mb-30 cat4 cat1 cat3 cat5">
                                    <div className="course_single mb-30">
                                        <div className="c_thumb">
                                            <img src="assets\img\course\img_08.jpg" alt="" />
                                        </div>
                                        <div className="course_content">
                                            <div className="c_head">
                                                <span className="cat">Business Study</span>
                                                <span className="price">$62</span>
                                            </div>
                                            <h3 className="title"><a href="course-details.html">Business study for everyone anytime, anywhere</a></h3>
                                            <div className="rating_wrap ul_li">
                                                <span>13 votes</span>
                                                <ul className="rating_star ul_li">
                                                    <li><i className="fas fa-star"></i></li>
                                                    <li><i className="fas fa-star"></i></li>
                                                    <li><i className="fas fa-star"></i></li>
                                                    <li><i className="fas fa-star"></i></li>
                                                    <li><i className="fal fa-star"></i></li>
                                                </ul>
                                            </div>
                                            <ul className="c_bottom ul_li">
                                                <li><i className="fal fa-file-alt"></i>160</li>
                                                <li><i className="fal fa-user"></i>38k</li>
                                                <li><i className="fal fa-eye"></i>534k</li>
                                                <li>
                                                    <div className="author">
                                                        <img src="assets\img\course\c_author.png" alt="" />
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div> */}
                                {/* <div className="col-lg-4 col-md-6 col-sm-6 grid-item mb-30 cat3 cat1 cat5">
                                    <div className="course_single mb-30">
                                        <div className="c_thumb">
                                            <img src="assets\img\course\img_09.jpg" alt="" />
                                        </div>
                                        <div className="course_content">
                                            <div className="c_head">
                                                <span className="cat">Data Science</span>
                                                <span className="price">$67</span>
                                            </div>
                                            <h3 className="title"><a href="course-details.html">Best power of podcast for story telling process.</a></h3>
                                            <div className="rating_wrap ul_li">
                                                <span>13 votes</span>
                                                <ul className="rating_star ul_li">
                                                    <li><i className="fas fa-star"></i></li>
                                                    <li><i className="fas fa-star"></i></li>
                                                    <li><i className="fas fa-star"></i></li>
                                                    <li><i className="fas fa-star"></i></li>
                                                    <li><i className="fal fa-star"></i></li>
                                                </ul>
                                            </div>
                                            <ul className="c_bottom ul_li">
                                                <li><i className="fal fa-file-alt"></i>154</li>
                                                <li><i className="fal fa-user"></i>38k</li>
                                                <li><i className="fal fa-eye"></i>569k</li>
                                                <li>
                                                    <div className="author">
                                                        <img src="assets\img\course\c_author.png" alt="" />
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                            {/* <div className="row">
                                <div className="col-12">
                                    <div className="load_more_btn text-center pt-10">
                                        <a className="thm_btn thm_btn-white" href="courses.html">Load More <i className="ti-plus"></i></a>
                                    </div>
                                </div>
                            </div> */}
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

export default Assignments;
