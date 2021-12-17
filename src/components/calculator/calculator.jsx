import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./calculator.css";
import data from "./data";
import { add, total } from "cart-localstorage";

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      serviceType: "",
      total: "",
      typechange: "",
      type: [],
      pages: 1,
      words: 275,
      academicLevel: "",
      urgency: "",
      services: "",
      level: [],
      data: {},
    };
  }

  addWords = () => {
    this.setState({ words: this.state.words + 275 });
    this.setState({ pages: this.state.pages + 1 });
  };

  removeWords = () => {
    this.setState({ words: this.state.words - 275 });
    this.setState({ pages: this.state.pages - 1 });
  };

  addPages = () => {
    this.setState({ pages: this.state.pages + 1 });
    this.setState({ words: this.state.words + 275 });
  };

  removePages = () => {
    this.setState({ pages: this.state.pages - 1 });
    this.setState({ words: this.state.words - 275 });
  };
  service = (e) => {
    // this.setState({ serviceType: e.target.value });
    // console.log(serviceType);
    const datas = data.filter((number) => {
      return number.id === e.target.value;
    });
    // console.log(datas);
    datas.map((item) =>
      this.setState({
        type: item.type_papers,
        services: item.price,
        level: item.academic_level,
        serviceType: item.name,
        id: item.id,
      })
    );
  };

  componentDidMount = () => {
    const datas = data.filter((number) => {
      return number.id === 1;
    });
    // console.log(datas);
    datas.map((item) =>
      this.setState({
        type: item.type_papers,
        services: item.price,
        level: item.academic_level,
        serviceType: item.name,
        id: item.id,
      })
    );
  };

  render() {
    let total = null;
    const totals =
      +this.state.urgency +
      +this.state.academicLevel +
      +this.state.services +
      +this.state.typechange;
    const muly = totals * this.state.pages;
    total = muly;
    // const dataToTypeChange = this.state.data;
    // dataToTypeChange = this.state.typechange;
    // console.log(dataToTypeChange.name);

    const myOrder = {
      id: this.state.id,
      paperType: this.state.serviceType,
      serviceType: this.state.typechange,
      price: total,
      level: this.state.academicLevel,
      pages: this.state.pages,
      words: this.state.words,
      urgency: this.state.urgency,
    };
    console.log("Order:", myOrder);
    // add(myOrder, this.state.pages);

    const placeOrder = () => {
      add(myOrder, this.state.pages);
    };
    const { summary } = this.props;
    return (
      <main>
        <section className="course_details_area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 ">
                <div className="course_dtls_left mb-30">
                  <div className="cdl_top mb-30">
                
                      <label for="service_type">TYPES OF SERVICE</label>
                      <select
                        id="service_type"
                        onChange={(e) => this.service(e)}
                      >
                        <option label="Please Select"></option>
                        {data.map((item) => {
                          return (
                            <option label={item.name} value={item.id}>
                              {item.name}
                            </option>
                          );
                        })}
                      </select>
                      <label for="paper_type">TYPE OF PAPER</label>
                      <select
                        id="paper_type"
                        onChange={(e) =>
                          this.setState({ typechange: e.target.value })
                        }
                      >
                        <option label="Please Select"></option>
                        {this.state.type.map((item) => {
                          return (
                            <option
                              label={item.name}
                              value={item.price}
                              defaultValue={item.price}
                            >
                              {item.name}
                            </option>
                          );
                        })}
                      </select>
                      <label for="pages">NUMBER OF PAGES / WORDS</label>
                      <div className="d-flex justify-content-around">
                        <div className="d-flex justify-content-evenly align-items-center">
                          <button onClick={this.removePages}>-</button>
                          <p className="m-2">{this.state.pages}</p>
                          <button onClick={this.addPages}>+</button>
                        </div>
                        <div className="d-flex justify-content-evenly align-items-center">
                          <button onClick={this.removeWords}>-</button>
                          <p className="m-2">{this.state.words}</p>
                          <button onClick={this.addWords}>+</button>
                        </div>
                      </div>
                      <br />
                      {this.state.level ? (
                        <>
                          <label for="academic_level_1">ACADEMIC LEVEL</label>
                          <select
                            id="academic_level_1"
                            onChange={(e) =>
                              this.setState({ academicLevel: e.target.value })
                            }
                          >
                            {this.state.level.map((item) => {
                              return (
                                <option
                                  label={item.name}
                                  value={item.price}
                                  defaultValue={item.price}
                                >
                                  {item.name}
                                </option>
                              );
                            })}
                          </select>
                        </>
                      ) : null}
                      <label for="customer_order_service_id">URGENCY</label>
                      <select
                        id="customer_order_service_id"
                        onChange={(e) =>
                          this.setState({ urgency: e.target.value })
                        }
                      >
                        <option label="3 hours" value="2">
                          3 hours
                        </option>
                        <option label="6 hours" value="1">
                          6 hours
                        </option>
                        <option label="8 hours" value="12">
                          8 hours
                        </option>
                        <option label="12 hours" value="24">
                          12 hours
                        </option>
                        <option label="18 hours" value="30">
                          18 hours
                        </option>
                        <option label="24 hours" value="40">
                          24 hours
                        </option>
                        <option label="48 hours" value="11">
                          48 hours
                        </option>
                        <option label="3 days" value="23">
                          3 days
                        </option>
                        <option label="4 days" value="17">
                          4 days
                        </option>
                        <option label="5 days" value="16">
                          5 days
                        </option>
                        <option label="6 days" value="13">
                          6 days
                        </option>
                        <option label="7 days" value="8">
                          7 days
                        </option>
                        <option label="10 days" value="5">
                          10 days
                        </option>
                        <option label="14 days" value="6">
                          14 days
                        </option>
                      </select>
                      <br />
                      <br />
                      <div className="about_btn mt-10 d-flex justify-content-between">
                        <h3>
                          Total : <span>{total}</span>{" "}
                        </h3>
                        <a className="thm_btn thm_btn-2" onClick={placeOrder}>
                          Order Now<i className="fal fa-long-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                </div>
              </div>
              {summary == true ? (
                <div className="col-lg-4">
                  <div className="course_dtls_right">
                    <div className="course_widget mb-30">
                      <div>
                        <h3 className="text-center">YOUR ORDER SUMMARY</h3>
                        <br />
                        <label for="paper_type">TYPE OF SERVICE</label>
                        <input type="text" />
                        <label for="paper_type">TYPE OF PAPER</label>
                        <input type="text" />
                        <label for="paper_type">NUMBER OF PAGES/WORDS</label>
                        <input type="text" />
                        <label for="paper_type">ACADEMICS LEVEL</label>
                        <input type="text" />
                        <label for="paper_type">URGENCY</label>
                        <input type="text" />
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default Calculator;
