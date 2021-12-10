import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div>
                <main>
                    <section className="page_title_area" data-overlay="6" data-background="assets/img/bg/page_title_bg.jpg">
                        <div className="containe">
                            <div className="row">
                                <div className="col-l2">
                                    <div className="page_title text-center">
                                        <h2>About us</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                   <br /><br /><br /> <br />

                    <section className="about_area about_2 pb-70">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="about_left pos-rel mb-30">
                                        <div className="about_img-1">
                                            <img src="assets\img\about\about_img_02.jpg" alt="" />
                                        </div>
                                        <div className="about_img-2">
                                            <img src="assets\img\about\about_img_03.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="about_content mb-30">
                                        <div className="sec_title">
                                           
                                            <p>We are a UK-based service that serves the writing needs of college and university students. We understand that it can be tough for students to catch up with the lectures and tests with assignments coming on top. Rather than trailing after the deadlines, students can avail our services and focus on their lectures and exams while sorting out their upcoming timetable.<br/>

We take pride in our 100 percent satisfaction rate and guarantee that you will not be disappointed with the paper you receive. We offer one revision to all of our customers and more in special circumstances.  However, we request not to demand a complete overhaul of a paper just because you changed our mind. If you have a fair demand of a revision, we will cater to that for sure.</p>
                                        <br /><br />
                                        <h2>Top Writing team</h2>
                                        <p>We have a valued team of experts that remain the backbone of this whole enterprise. We enable you to directly communicate your requirements and concerns about an assignment to our team. We take due care in assigning the writer to a specific task to render optimal performance and efficiency. <br/>

We have a due procedure of selection for writers and ensure that they are the right choice for the writing task. We have put in place specific steps to assess the writer’s capabilities and skills before inducting one into our team. The writer further undergoes the verification process before getting to work on the clients’ tasks.</p>
<br /><br />
<h2></h2>
<p>
We have faith in our writers and our service. So we feel positive that you'll be 100% happy with the paper you receive. But being a dedicated company, we never take anything for granted. Therefore we offer the following guarantee: if you are at all dissatisfied with any aspect of your paper, then we will revise it for free.<br/>
We only ask that you be fair and don't ask for a complete rewrite simply because you've changed your mind about what you want the paper to include.
</p>
                                        
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                   <br />
                   <br />
                   <br />

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

export default About;
