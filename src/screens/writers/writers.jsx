import React, { Component } from 'react';

class Writers extends Component {
    render() {
        return (
            <div>
                <main>
                    <section className="page_title_area" data-overlay="6" data-background="assets/img/bg/page_title_bg.jpg">
                        <div className="containe">
                            <div className="row">
                                <div className="col-l2">
                                    <div className="page_title text-center">
                                        <h2>Our Writers</h2>
                                        <nav aria-label="breadcrumb">
                                            <ol className="breadcrumb justify-content-center">
                                                <li className="breadcrumb-item">
                                                    <a href="index.html">Home</a>
                                                </li>
                                                <li className="breadcrumb-item active" aria-current="page">Writers</li>
                                            </ol>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="col-lg-6 all"  style={{marginLeft:"180px", padding:"70px"} }>
                                    <div className="about_content mb-30">
                                        <div className="sec_title">
                                            <h2>OUR WRITERS</h2>
                                            <p className="text-left">Time to meet the people behind the Top Writings logo! Our writers are the engine running our system and also the ones that you, dear clients, talk to most frequently here. So we treat the process of writer assigning with the utmost care.

Everyone within our UK essay writing team is an expert in their chosen field and they have the corresponding credentials to prove it. We give priority to writers originating from the UK. All the candidates pass our English test that puts a special emphasis on grammar and spelling as well as a text’s integrity and readability. The freshmen who successfully completed the test and verifications start their internal probation upon completion of which they get to work with the clients.</p>
                                        
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6 col-sm-6">
                                                <div className="al_signle">
                                                    <span><i className="fal fa-check"></i>Expert Trainer</span>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6">
                                                <div className="al_signle">
                                                    <span><i className="fal fa-check"></i>Remote Learning</span>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6">
                                                <div className="al_signle">
                                                    <span><i className="fal fa-check"></i>Lifetime Access</span>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6">
                                                <div className="al_signle">
                                                    <span><i className="fal fa-check"></i>Self Developmentr</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="about_btn mt-10">
                                            <a className="thm_btn" href="courses.html">View Courses<i className="fal fa-long-arrow-right"></i></a>
                                            <a className="thm_btn thm_btn-2" href="about.html">Start Trial<i className="fal fa-long-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>

                </main>
            </div>
        );
    }
}

export default Writers;
