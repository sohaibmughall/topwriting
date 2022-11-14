import React, { Component } from 'react'
import Calculator from '../../components/calculator/calculator'

export default class Cart extends Component {
    render() {
        return (
            <div>
                <main>
                    <section className="course_details_area pt-80 pb-80">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="course_dtls_left mb-30">
                                        <div className="cdl_top mb-30">
                                            <Calculator />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>
                </main>
            </div>
        )
    }
}