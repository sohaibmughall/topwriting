import React, { Component } from 'react'
import Writemyessay from '../footersection/services/writemyessay';

export default class Linkpages extends Component {
    constructor(){
        super();
        this.state =  {
            details : [
                {
                heading:"WRITE MY ESSAY",
                paragraph:"Gerry McGovern, Chief Creative Officer at Jaguar-Land Rover, tells us why less is more “The first thing you probably notice is the new Range Rover is entirely free of excess. Whatever remains is there for a reason,” says Gerry McGovern, Chief Creative Officer…"
                }
            ],
            loading:false

        }
    }



    render() {
        console.log(this.state.details)
        return (
            <div className="row">
                <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="about_content mb-30">
                                        <div className="sec_title">
                                        <Writemyessay details={[...this.state.details]} />
                                        </div>
                                    </div>
                                        
                                </div>
                            </div>
                        </div>
            </div> 
        )
    }
}
