import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./calculator.css";
import data from "./data";
import axios from 'axios'
import { add, total } from "cart-localstorage";
import { baseurl } from '../../components/Apiurl/apiurl';

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
      price: "",
      level: [],
      data: {},
      levelname: "",
      typename: "",
      urgencyname: "",
      servicename: "",
    };
  }

  Ordernow = () => {
    const data = new FormData();
    data.append('Types_of_Service', this.state.servicename);
    data.append('Types_of_paper', this.state.typename);
    data.append('Number_of_Pages_Or_Words', this.state.pages + "," + this.state.words);
    data.append('Academic_Level', this.state.levelname);
    data.append('Urgency', this.state.urgencyname)
    const options = {
      headers: {
        'Content-Type': 'application/json',
      }
    }
    axios.post(`${baseurl}/order`, data, options).then(
      function (response) {
        console.log(response.data.paperType);
      }
    )
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
    const name = e.target.value.split("-")
    this.setState({
      service: name[0],
      servicename: name[1]
    })
    console.log(name);
    const datas = data.filter((number) => {
      return number.id == name[0];

    });
    console.log(datas);

    datas.map((item) =>
      this.setState({
        type: item.type_papers,
        price: item.price,
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
    datas.map((item) =>
      this.setState({
        type: item.type_papers,
        price: item.price,
        level: item.academic_level,
        serviceType: item.name,
        id: item.id,
      })
    );
  };
  typech = (e) => {
    const name = e.target.value.split("-")
    console.log(name[0]);
    this.setState({
      typechange: name[0],
      typename: name[1]
    })
  }
  levelupdate = (e) => {
    const name = e.target.value.split("-")
    this.setState({
      academicLevel: name[0],
      levelname: name[1]
    })
  }

  serve = (e) => {

  }

  urgent = (e) => {
    const name = e.target.value.split("-")
    this.setState({
      urgency: name[0],
      urgencyname: name[1]
    })


  }

  render() {
    let total = null;
    const totals =
      +this.state.urgency +
      +this.state.academicLevel +
      +this.state.typechange;
    const muly = totals * this.state.pages;
    total = muly;
    // const dataToTypeChange = this.state.data;
    // dataToTypeChange = this.state.typechange;
    // console.log(dataToTypeChange.name);

    // const myOrder = {
    //   id: this.state.id,
    //   paperType: this.state.serviceType,
    //   serviceType: this.state.typechange,
    //   price: total,
    //   level: this.state.academicLevel,
    //   pages: this.state.pages,
    //   words: this.state.words,
    //   urgency: this.state.urgency,
    // };
    // console.log("Order:", myOrder);
    // add(myOrder, this.state.pages);

    // const placeOrder = () => {
    //   add(myOrder, this.state.pages);
    // };
    const { summary } = this.props;
    return (
      <main>
        <section className="course_details_area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 ">
                <div className="course_dtls_left mb-30">
                  <div className="cdl_top mb-30">

                    <label for="service_type" >TYPES OF SERVICE</label>
                    <select
                      id="service_type"
                      onChange={(e) => this.service(e)}
                    >
                      <option label="Please Select" ></option>
                      {data.map((item) => {
                        return (
                          <option label={item.name} value={item.id + "-" + item.name}>
                            {item.name}
                          </option>
                        );
                      })}
                    </select>
                    <label for="paper_type" >TYPE OF PAPER</label>
                    <select
                      id="paper_type"
                      onChange={(e) =>
                        this.typech(e)
                      }
                    >
                      <option label="Please Select" ></option>
                      {this.state.type.map((item) => {
                        return (
                          <option
                            value={item.price + "-" + item.name}
                            defaultValue={item.price}
                          >
                            {item.name}
                          </option>
                        );
                      })}
                    </select>
                    <label for="pages" >NUMBER OF PAGES / WORDS</label>
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
                        <label for="academic_level_1" >ACADEMIC LEVEL</label>
                        <select
                          id="academic_level_1"
                          onChange={(e) =>
                            this.levelupdate(e)
                          }
                        >
                          {this.state.level.map((item) => {
                            return (
                              <option

                                value={item.price + "-" + item.name}
                                defaultValue={item.price}
                              >
                                {item.name}
                              </option>
                            );
                          })}
                        </select>
                      </>
                    ) : null}
                    <label for="customer_order_service_id" value={this.state.urgency} onChange={(e) => { this.setState({ urgency: e.target.value }) }}>URGENCY</label>
                    <select
                      id="customer_order_service_id"
                      onChange={(e) =>
                        // this.setState({ urgency: e.target.value })
                        this.urgent(e)

                      }
                    >
                      <option label="3 hours" value={`12-3 hours`}>
                        3 hours
                      </option>
                      <option label="6 hours" value={`1-6 hours`}>
                        6 hours
                      </option>
                      <option label="8 hours" value={`12-8 hours`}>
                        8 hours
                      </option>
                      <option label="12 hours" value={`24-12 hours`}>
                        12 hours
                      </option>
                      <option label="18 hours" value={`30-18 hours`}>
                        18 hours
                      </option>
                      <option label="24 hours" value={`40-24 hours`}>
                        24 hours
                      </option>
                      <option label="48 hours" value={`11-48 hours`}>
                        48 hours
                      </option>
                      <option label="3 days" value={`23-3 days`}>
                        3 days
                      </option>
                      <option label="4 days" value={`17-4 days`}>
                        4 days
                      </option>
                      <option label="5 days" value={`16-5 days`}>
                        5 days
                      </option>
                      <option label="6 days" value={`13-6 days`}>
                        6 days
                      </option>
                      <option label="7 days" value={`8-7 days`}>
                        7 days
                      </option>
                      <option label="10 days" value={`5-10 days`}>
                        10 days
                      </option>
                      <option label="14 days" value={`6-14 days`}>
                        14 days
                      </option>
                    </select>
                    <br />
                    <br />
                    <div className="about_btn mt-10 d-flex justify-content-between">
                      <h3>
                        Total : <span>{total}</span>{" "}
                      </h3>
                      <button className="thm_btn" onClick={() => this.Ordernow()}>Order Now<i className="fal fa-long-arrow-right"></i></button>

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
