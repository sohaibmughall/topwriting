import React, { Component } from 'react';

class Services extends Component {
    render() {
        return (
            <div>
                <main>
                    <section className="page_title_area" data-overlay="6" data-background="assets/img/bg/page_title_bg.jpg">
                        <div className="containe">
                            <div className="row">
                                <div className="col-l2">
                                    <div className="page_title text-center">
                                        <h2>Our Services</h2>
                                        <nav aria-label="breadcrumb">
                                            <ol className="breadcrumb justify-content-center">
                                                <li className="breadcrumb-item">
                                                    <a href="index.html">Home</a>
                                                </li>
                                                <li className="breadcrumb-item active" aria-current="page">Services</li>
                                            </ol>
                                        </nav>
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
                                        <button className="active" data-filter="*">all Services</button>
                                        <button data-filter=".cat1">Academic Paper Writing</button>
                                        <button data-filter=".cat2">Rewriting</button>
                                        <button data-filter=".cat3">Proofreading</button>
                                        <button data-filter=".cat4">Admission Services</button>
                                        <button data-filter=".cat5">Dissertation Services</button>
                                        <button data-filter=".cat6">ASSIGNMENTS</button>
                                    </div>
                                </div>
                            </div>
                            <div className="row grid">
                                <div className="col-lg-4 col-md-6 col-sm-6 grid-item mb-30 cat1 cat4 cat5">
                                    <div className="course_single mb-30">
                                        <div className="c_thumb">
                                            <img src="assets\img\course\img_01.jpg" alt="" />
                                        </div>
                                        <div className="course_content">
                                            <div className="c_head">
                                                <span className="cat">Architecture</span>
                                                <span className="price">$246</span>
                                            </div>
                                            <h3 className="title"><a href="course-details.html">The Power of Podcast for Story telling Process</a></h3>
                                            <div className="rating_wrap ul_li">
                                                <span>13 votes</span>
                                                <ul className="rating_star ul_li">
                                                    <li><i className="fas fa-star"></i></li>
                                                    <li><i className="fas fa-star"></i></li>
                                                    <li><i className="fas fa-star"></i></li>
                                                    <li><i className="fal fa-star"></i></li>
                                                    <li><i className="fal fa-star"></i></li>
                                                </ul>
                                            </div>
                                            <ul className="c_bottom ul_li">
                                                <li><i className="fal fa-file-alt"></i>180</li>
                                                <li><i className="fal fa-user"></i>28k</li>
                                                <li><i className="fal fa-eye"></i>57k</li>
                                                <li>
                                                    <div className="author">
                                                        <img src="assets\img\course\c_author.png" alt="" />
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 grid-item mb-30 cat3 cat2">
                                    <div className="course_single mb-30">
                                        <div className="c_thumb">
                                            <img src="assets\img\course\img_02.jpg" alt="" />
                                        </div>
                                        <div className="course_content">
                                            <div className="c_head">
                                                <span className="cat">Engennering</span>
                                                <span className="price">$136</span>
                                            </div>
                                            <h3 className="title"><a href="course-details.html">TAntiquities Trafficking and Art Crime</a></h3>
                                            <div className="rating_wrap ul_li">
                                                <span>16 votes</span>
                                                <ul className="rating_star ul_li">
                                                    <li><i className="fas fa-star"></i></li>
                                                    <li><i className="fas fa-star"></i></li>
                                                    <li><i className="fas fa-star"></i></li>
                                                    <li><i className="fas fa-star"></i></li>
                                                    <li><i className="fal fa-star"></i></li>
                                                </ul>
                                            </div>
                                            <ul className="c_bottom ul_li">
                                                <li><i className="fal fa-file-alt"></i>80</li>
                                                <li><i className="fal fa-user"></i>25k</li>
                                                <li><i className="fal fa-eye"></i>17k</li>
                                                <li>
                                                    <div className="author">
                                                        <img src="assets\img\course\c_author.png" alt="" />
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 grid-item mb-30 cat4 cat1 cat3 cat5">
                                    <div className="course_single mb-30">
                                        <div className="c_thumb">
                                            <img src="assets\img\course\img_03.jpg" alt="" />
                                        </div>
                                        <div className="course_content">
                                            <div className="c_head">
                                                <span className="cat">User Research</span>
                                                <span className="price">$49</span>
                                            </div>
                                            <h3 className="title"><a href="course-details.html">Fashion and Luxury Fashion in a Changing</a></h3>
                                            <div className="rating_wrap ul_li">
                                                <span>15 votes</span>
                                                <ul className="rating_star ul_li">
                                                    <li><i className="fas fa-star"></i></li>
                                                    <li><i className="fas fa-star"></i></li>
                                                    <li><i className="fas fa-star"></i></li>
                                                    <li><i className="fal fa-star"></i></li>
                                                    <li><i className="fal fa-star"></i></li>
                                                </ul>
                                            </div>
                                            <ul className="c_bottom ul_li">
                                                <li><i className="fal fa-file-alt"></i>180</li>
                                                <li><i className="fal fa-user"></i>38k</li>
                                                <li><i className="fal fa-eye"></i>37k</li>
                                                <li>
                                                    <div className="author">
                                                        <img src="assets\img\course\c_author.png" alt="" />
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 grid-item mb-30 cat3 cat1">
                                    <div className="course_single mb-30">
                                        <div className="c_thumb">
                                            <img src="assets\img\course\img_04.jpg" alt="" />
                                        </div>
                                        <div className="course_content">
                                            <div className="c_head">
                                                <span className="cat">Web Development</span>
                                                <span className="price">$63</span>
                                            </div>
                                            <h3 className="title"><a href="course-details.html">Making Music with Other side People</a></h3>
                                            <div className="rating_wrap ul_li">
                                                <span>53 votes</span>
                                                <ul className="rating_star ul_li">
                                                    <li><i className="fas fa-star"></i></li>
                                                    <li><i className="fas fa-star"></i></li>
                                                    <li><i className="fas fa-star"></i></li>
                                                    <li><i className="fas fa-star"></i></li>
                                                    <li><i className="fal fa-star"></i></li>
                                                </ul>
                                            </div>
                                            <ul className="c_bottom ul_li">
                                                <li><i className="fal fa-file-alt"></i>90</li>
                                                <li><i className="fal fa-user"></i>98k</li>
                                                <li><i className="fal fa-eye"></i>33k</li>
                                                <li>
                                                    <div className="author">
                                                        <img src="assets\img\course\c_author.png" alt="" />
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 grid-item mb-30 cat1 cat2 cat5">
                                    <div className="course_single mb-30">
                                        <div className="c_thumb">
                                            <img src="assets\img\course\img_05.jpg" alt="" />
                                        </div>
                                        <div className="course_content">
                                            <div className="c_head">
                                                <span className="cat">Business Study</span>
                                                <span className="price">$121</span>
                                            </div>
                                            <h3 className="title"><a href="course-details.html">Fashion and Luxury Fashion in a Changing</a></h3>
                                            <div className="rating_wrap ul_li">
                                                <span>63 votes</span>
                                                <ul className="rating_star ul_li">
                                                    <li><i className="fas fa-star"></i></li>
                                                    <li><i className="fas fa-star"></i></li>
                                                    <li><i className="fas fa-star"></i></li>
                                                    <li><i className="fal fa-star"></i></li>
                                                    <li><i className="fal fa-star"></i></li>
                                                </ul>
                                            </div>
                                            <ul className="c_bottom ul_li">
                                                <li><i className="fal fa-file-alt"></i>50</li>
                                                <li><i className="fal fa-user"></i>61k</li>
                                                <li><i className="fal fa-eye"></i>64k</li>
                                                <li>
                                                    <div className="author">
                                                        <img src="assets\img\course\c_author.png" alt="" />
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 grid-item mb-30 cat3 cat4 cat2">
                                    <div className="course_single mb-30">
                                        <div className="c_thumb">
                                            <img src="assets\img\course\img_06.jpg" alt="" />
                                        </div>
                                        <div className="course_content">
                                            <div className="c_head">
                                                <span className="cat">Data Science</span>
                                                <span className="price">$75</span>
                                            </div>
                                            <h3 className="title"><a href="course-details.html">The Power of Podcast for Story telling Process</a></h3>
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
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 grid-item mb-30 cat3 cat2">
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
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 grid-item mb-30 cat4 cat1 cat3 cat5">
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
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 grid-item mb-30 cat3 cat1 cat5">
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
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="load_more_btn text-center pt-10">
                                        <a className="thm_btn thm_btn-white" href="courses.html">Load More <i className="ti-plus"></i></a>
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
            </div>
        );
    }
}

export default Services;
