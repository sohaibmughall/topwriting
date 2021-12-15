import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
class Services extends Component {

    constructor(props){
        super(props);
        console.log("Hello I am a constructor")
        this.state =  {
       collection:[]
       }
    }

    async componentDidMount(){
        const data = new FormData();
        const th= this
        const options = { headers: { 'Content-Type': 'application/json' } }
       await axios.get('http://192.168.0.101/api/pro', data, options).then(
            function (response) {
                th.setState({
                    collection:response.data
                })
            }
        )
    }

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
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="courses_area pt-120 pb-120">
                        <div className="container">
                           ` ` <div className="row">
                                <div className="col-12">
                                    <div className="masonry_active mb-40">
                                        <button className="active" data-filter="*"> all Services</button>
                                        <button data-filter=".cat1"><Link to="/academicPaperWriting">Academic Paper Writing</Link></button>
                                        <button data-filter=".cat2"><Link  to="/rewriting">Rewriting</Link></button>
                                        <button data-filter=".cat3"><Link  to="/proofreading">Proofreading</Link></button>
                                        <button data-filter=".cat4"><Link  to="/admissionServices">Admission Services</Link></button>
                                        <button data-filter=".cat5"><Link  to="/dissertationServices">Dissertation Services</Link></button>
                                        <button data-filter=".cat6"><Link  to="/assignments"> ASSIGNMENTS</Link></button>
                                    </div>
                                </div>
                            </div>
                            <div className="row grid">
                            {this.state.collection.map((element)=>{
                                        return <div className="col-lg-4 col-md-6 col-sm-6 grid-item mb-30 cat1 cat4 cat5">
                                    <div className="course_single mb-30"> 
                                     <div className="c_thumb">
                                            <Link to="/academicPaperWriting"> <img src={`http://192.168.0.101/image/product/${element.image}`} alt="" /></Link>
                                    </div>
                                    <div className="course_content">
                                        <h3 className="title"><Link to="/academicPaperWriting">{element.name}</Link></h3>   
                                    </div>
                                        
                                   
                                        
                                    </div>
                                </div> })}
                               
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
