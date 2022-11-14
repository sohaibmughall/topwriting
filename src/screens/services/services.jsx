import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Spinner from "../Spinner";
import { baseurl, imageurl } from "../../components/Apiurl/apiurl";
import { allurl } from "../../components/Apiurl/apiurl";
import { getJwtToken } from "../../helpers";
class Services extends Component {
  constructor(props) {
    super(props);
    console.log("Hello I am a constructor");
    this.state = {
      collection: [],
      loading: true,
    };
  }

  async componentDidMount() {
    const th = this;
    // this.setState({loading:true})
    const token = getJwtToken()
    const options = { headers: { "x-access-token": token } };
    await axios
      .get(`${baseurl}/allcollection`, options)
      .then(function (response) {
        th.setState({
          collection: response.data,
          loading: false,
        });
      });
  }

  render() {
    return (
      <div>
        <main>


          <section className="courses_area pt-120 pb-120">
            <div className="container">


              <div className="row grid text-center">
                {this.state.loading ? (
                  <Spinner />
                ) : (
                  this.state.collection.map((element) => {
                    if (!element.image) {
                      return null
                    }

                    return (
                      <div className="col-lg-3 col-md-6 col-sm-6 grid-item mb-30 cat1 cat4 cat5">
                        <div className="course_single mb-30">
                          <div className="c_thumb">
                            <Link to={`/products/${element._id}`}>
                              {" "}
                              <img
                                src={`${imageurl}/${element.image}`}
                                alt=""
                                style={{ width: "100%" }}
                              />
                            </Link>
                          </div>
                          {/* <div className="course_content">
                            <h3 className="title">
                              <Link to={`/products/${element.id}`}>
                                {element.name}
                              </Link>
                            </h3>
                          </div> */}
                        </div>
                      </div>
                    );
                  })
                )}
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
                    <a className="thm_btn thm_btn-border" href="contact.html">
                      apply now<i className="fal fa-long-arrow-right"></i>
                    </a>
                    <div className="bai_shape">
                      <img src="assets\img\icon\bai_shape_01.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="bai_wrap bai_right white_bg">
                    <span># Become A Partner</span>
                    <h3>Become a Partner</h3>
                    <a className="thm_btn thm_btn-2" href="contact.html">
                      Contact us<i className="fal fa-long-arrow-right"></i>
                    </a>
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
