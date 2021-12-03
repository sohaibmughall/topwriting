import React, { Component } from 'react'
export default class writemyessay extends Component {
    
    render() {
        const {details} = this.props
        return (
            <div>
                <section className="about_area about_2 pt-70">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="about_content mb-30">
                                        <div className="sec_title">

                                            {/* <h2>{head}</h2>
                                            <p>{para}</p> */}
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
