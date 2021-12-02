import React, { Component } from 'react'

export default class pages extends Component {
    render() {
        const {pageHeading , pageContent} = this.props
        return (
            <div>
              <section className="about_area about_2 pt-70">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="about_content mb-30">
                                        <div className="sec_title">
                                            <h2>{pageHeading}</h2>
                                            <p>{pageContent}</p>
                                        </div>
                                        <div className="about_tab mb-30">
                                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                                <li className="nav-item" role="presentation">
                                                    <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Our Mission</button>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Our Vision</button>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Our Values</button>
                                                </li>
                                            </ul>
                                            <div className="tab-content" id="myTabContent">
                                                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">we believe everyone should have the opportunity
                                                    to create progress through technology and develop the skills of tomorrow
                                                </div>
                                                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">we believe everyone should have the
                                                    opportunity to create progress through technology and develop the skills of
                                                    tomorrow</div>
                                                <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">we believe everyone should have the
                                                    opportunity to create progress through technology and develop the skills of
                                                    tomorrow</div>
                                            </div>
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
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
            </div>
        )
    }
}
