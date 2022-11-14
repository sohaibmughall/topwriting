import React, { Component } from "react";
import Calculator from "../../../components/calculator/calculator";
import { Link } from "react-router-dom";
import axios from "axios";
import { baseurl, imageurl } from "../../../components/Apiurl/apiurl";
import { getJwtToken } from "../../../helpers";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  async componentDidMount() {

    const data = new FormData();
    const th = this;
    const token = getJwtToken()
    const options = { headers: { "x-access-token": token } };
    await axios
      .get(
        `${baseurl}/get-product/${this.props.match.params.id}`,
        options,
        data,
      )
      .then(function (response) {
        if (response) {
          th.setState({
            products: response.data
          })
        }
      });
  }


  render() {

    return (
      <>
        <main>

          <section className="courses_area pt-120 pb-120">
            <div className="container">
              <div className="row grid">
                {this.state.products.map((element) => {
                  if (element.image.length === 0) {
                    return null
                  }
                  return (
                    <div className="col-lg-3 col-md-6 col-sm-6 grid-item mb-30 cat1 cat4 cat5">
                      <Link to="/cart" onClick={() => localStorage.setItem('collection_id', element.collection_id)}>
                        <div className="course_single mb-30">
                          <div className="c_thumb text-center">
                            <img
                              src={`${imageurl}/${element.image}`}
                              alt=""
                              style={{ width: "100%" }}
                            />
                          </div>
                          {/* <div className="course_content text-center">
                            <h3 className="title">{element.name}</h3>
                            <div className="about_btn mt-10 text-center">
                              Order Now
                              <i className="fal fa-long-arrow-right"></i>
                            </div>
                          </div> */}
                        </div>
                      </Link>
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
