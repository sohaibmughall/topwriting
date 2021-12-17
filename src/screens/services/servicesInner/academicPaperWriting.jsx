import React, { Component } from "react";
import Calculator from "../../../components/calculator/calculator";
import { Link } from "react-router-dom";
import axios from "axios";
import { baseurl } from "../../../components/Apiurl/apiurl";

class Products extends Component {
  constructor(props) {
    super(props);
    console.log("Hello I am a constructor");
    this.state = {
      products: [],
    };
  }

  async componentDidMount() {
    const data = new FormData();
    const th = this;
    const options = { headers: { "Content-Type": "application/json" } };
    await axios
      .get(
        `${baseurl}/get-product/${this.props.match.params.id}`,
        data,
        options
      )
      .then(function (response) {
        // console.log(response.data.products)
        response.data.map((item) =>
          th.setState({
            products:item.products
          })
        );
      });
  }

  render() {
    return (
      <>
        <main>
         

          <section className="courses_area pt-120 pb-120">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="masonry_active mb-40">
                    <button
                      className="active"
                      data-filter="*"
                      style={{ marginLeft: "500px" }}
                    >
                      PRODUCTS
                    </button>
                  </div>
                </div>
              </div>
              <div className="row grid">
              {this.state.products.map((element) => {
                  return (
                    <div className="col-lg-4 col-md-6 col-sm-6 grid-item mb-30 cat1 cat4 cat5">
                      <div className="course_single mb-30">
                        <div className="c_thumb">
                          <img
                            src={`http://192.168.0.103/image/product/${element.image}`}
                            alt=""
                          />
                        </div>
                        <div className="course_content">
                          <h3 className="title">{element.name}</h3>
                          <div className="about_btn mt-10 d-flex justify-content-between">
                            <Link to="/cart" className="thm_btn thm_btn-2">
                              Order Now
                              <i className="fal fa-long-arrow-right"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </main>
      </>
    );
  }
}

export default Products;
