import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './calculator.css';
import data from "./data"

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            total: '',
            typechange: "",
            type: [],
            pages: 1,
            words: 275,
            academicLevel: "",
            urgency: "",
            services: "",
            level: [],
        }
    }

    addWords = () => {
        this.setState({ words: this.state.words + 275 })
        this.setState({ pages: this.state.pages + 1 })
    }

    removeWords = () => {
        this.setState({ words: this.state.words - 275 })
        this.setState({ pages: this.state.pages - 1 })
    }

    addPages = () => {
        this.setState({ pages: this.state.pages + 1 })
        this.setState({ words: this.state.words + 275 })
    }

    removePages = () => {
        this.setState({ pages: this.state.pages - 1 })
        this.setState({ words: this.state.words - 275 })
    }
    service = (e) => {
        // console.log(e.target.value);
        const datas = data.filter(number => {
            return number.id === e.target.value;
        })
        // console.log(datas);
        datas.map(item => this.setState({ type: item.type_papers, services: item.price, level: item.academic_level }))
    }

    componentDidMount = () => {
        const datas = data.filter(number => {
            return number.id === "1";
        })
        // console.log(datas);
        datas.map(item => this.setState({ type: item.type_papers, services: item.price, level: item.academic_level }))
    }

    render() {

        let total = null;
        const totals = +this.state.urgency + +this.state.academicLevel + +this.state.services + +this.state.typechange;
        const muly = totals * this.state.pages;
        total = muly;

        return (
            <div class="field_item field_service">
                <label for="service_type">TYPES OF SERVICE</label>
                <select id="service_type" onChange={(e) => this.service(e)}>
                    {data.map(item => {
                        return (
                            <option label={item.name} value={item.id} >{item.name}</option>)
                    })}
                </select>
                <label for="paper_type">TYPE OF PAPER</label>
                <select id="paper_type" onChange={(e) => this.setState({ typechange: e.target.value })}>
                    <option label="Please Select"></option>
                    {
                        this.state.type.map(item => {
                            return (
                                <option label={item.name} value={item.price} defaultValue={item.price}>{item.name}</option>
                            )
                        })
                    }
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
                {this.state.level ?
                    <>
                        <label for="academic_level_1">ACADEMIC LEVEL</label>
                        <select id="academic_level_1" onChange={(e) => this.setState({ academicLevel: e.target.value })}>
                            {
                                this.state.level.map(item => {
                                    return (
                                        <option label={item.name} value={item.price} defaultValue={item.price}>{item.name}</option>
                                    )
                                })
                            }
                        </select>
                    </>
                    :
                    null
                }
                <label for="customer_order_service_id">URGENCY</label>
                <select id="customer_order_service_id" onChange={(e) => this.setState({ urgency: e.target.value })}>
                    <option label="3 hours" value="2">3 hours</option>
                    <option label="6 hours" value="1">6 hours</option>
                    <option label="8 hours" value="12">8 hours</option>
                    <option label="12 hours" value="24">12 hours</option>
                    <option label="18 hours" value="30">18 hours</option>
                    <option label="24 hours" value="40">24 hours</option>
                    <option label="48 hours" value="11">48 hours</option>
                    <option label="3 days" value="23">3 days</option>
                    <option label="4 days" value="17">4 days</option>
                    <option label="5 days" value="16">5 days</option>
                    <option label="6 days" value="13">6 days</option>
                    <option label="7 days" value="8">7 days</option>
                    <option label="10 days" value="5">10 days</option>
                    <option label="14 days" value="6">14 days</option>
                </select>
                <br />
                <br />
                <div className="about_btn mt-10 d-flex justify-content-between">
                    <h3>Total : <span>{total}</span> </h3>
                    <Link to="/cart" className="thm_btn thm_btn-2">Order Now<i className="fal fa-long-arrow-right"></i></Link>
                </div>
            </div>
        );
    }
}

export default Calculator;
