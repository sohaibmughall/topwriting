import React, { Component } from 'react';

class Admissionservices extends Component {
    render() {
        return (
            <>
                <main>
                    <section className="page_title_area" data-overlay="6" data-background="assets/img/bg/page_title_bg.jpg">
                        <div className="containe">
                            <div className="row">
                                <div className="col-l2">
                                    <div className="page_title text-center">
                                        <h2>ADMISSION SERVICES</h2>
                                        <nav aria-label="breadcrumb">
                                            <ol className="breadcrumb justify-content-center">
                                                <li className="breadcrumb-item">
                                                    <a href="index.html">Home</a>
                                                </li>
                                                <li className="breadcrumb-item active" aria-current="page">ADMISSION SERVICES</li>
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
                                        <button className="active" data-filter="*" style={{marginLeft:"500px"}}>PRODUCTS</button>
                                    </div>
                                </div>
                            </div>
                            <div className="row grid">
                                <div className="col-lg-4 col-md-6 col-sm-6 grid-item mb-30 cat1 cat4 cat5">
                                    <div className="course_single mb-30">
                                        <div className="c_thumb">
                                        <img src="assets\img\course\a1.png" alt="" />
                                        </div>
                                        <div className="course_content">
                                           
                                            <h3 className="title">ADMISSION ESSAY</h3>
                                           
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 grid-item mb-30 cat3 cat2">
                                    <div className="course_single mb-30">
                                        <div className="c_thumb">
                                            <img src="assets\img\course\a2.png" alt="" />
                                        </div>
                                        <div className="course_content">
                                           
                                            <h3 className="title">PERSONAL STATEMENT</h3>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 grid-item mb-30 cat4 cat1 cat3 cat5">
                                    <div className="course_single mb-30">
                                        <div className="c_thumb">
                                        <img src="assets\img\course\a3.png" alt="" />
                                        </div>
                                        <div className="course_content">
                                           
                                            <h3 className="title">RESEARCH PROPOSAL</h3>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 grid-item mb-30 cat3 cat1">
                                    <div className="course_single mb-30">
                                        <div className="c_thumb">
                                        <img src="assets\img\course\a4.png" alt="" /> 
                                        </div>
                                        <div className="course_content">
                                            
                                            <h3 className="title">SCHOLARSHIP ESSAY</h3>
                                           
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 grid-item mb-30 cat1 cat2 cat5">
                                    <div className="course_single mb-30">
                                        <div className="c_thumb">
                                      <img src="assets\img\course\a5.png" alt="" /> 
                                        </div>
                                        <div className="course_content">
                                           
                                            <h3 className="title">POWER POINT PRESENTATION</h3>
                                           
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

export default Admissionservices;
