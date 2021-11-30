import React, { Component } from 'react';
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
            words: 275
            // calculator: {
            //     Academic_paper_writing: 10.50,
            //     Rewriting: 30.87,
            //     Math_Physic_Economic_Statistic_Problems: 32.27,
            //     Proofreading: 27.87,
            //     Editing: 29.37,
            //     Copywriting: 35.28,
            //     pages: 0,
            //     words: 275,
            // }
        }
    }

    addWords = () => {
        this.setState({ words: this.state.words + 275 })
        this.setState({ pages: this.state.pages + 1 })


    }

    removeWords = () => {
        this.setState({ words: this.state.words + 275 })
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
        const datas = data.filter(number => {
            return number.id === e ? e : 1
        })
        datas.map(item => this.setState({ type: item.type_papers }))
    }

    render() {
        return (
            <div class="field_item field_service">
                <label for="customer_order_service_id">TYPES OF SERVICE</label>
                <select id="customer_order_service_id" onChange={(e) => this.service(e.target.value)}>
                    {data.map(item => {
                        return (
                            <option label={item.name} value={item.id} selected="selected">{item.name}</option>)
                    })}
                </select>
                <label for="customer_order_service_id">TYPE OF PAPER</label>
                <select id="customer_order_service_id" onChange={(e) => this.setState({ typechange: e.target.value })}>
                    {
                        this.state.type.map(item => {
                            return (
                                <option label={item.name} value={item.value} selected="selected">{item.name}</option>

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
                {/* <label for="words">NUMBER OF WORDS</label>
                <div className="d-flex justify-content-space-evenly align-items-center">
                    <button onClick={this.removeWords}>-</button>
                    <p>{this.state.calculator.words}</p>
                    <button onClick={this.addWords}>+</button>
                </div>
                <br /> */}
                <label for="customer_order_service_id">ACADEMIC LEVEL</label>
                <select id="customer_order_service_id">
                    <option label="GCSE / A Level" value="object:36" selected="selected">GCSE / A Level</option>
                    <option label="HNC / HND" value="object:37">HNC / HND</option>
                    <option label="Undergraduate" value="object:38">Undergraduate</option>
                    <option label="Master's" value="object:39">Master's</option>
                    <option label="Doctoral" value="object:39">Doctoral</option>
                </select>
                <label for="customer_order_service_id">URGENCY</label>
                <select id="customer_order_service_id">
                    <option label="3 hours" value="object:36" selected="selected">3 hours</option>
                    <option label="6 hours" value="object:37">6 hours</option>
                    <option label="8 hours" value="object:38">8 hours</option>
                    <option label="12 hours" value="object:39">12 hours</option>
                    <option label="18 hours" value="object:39">18 hours</option>
                    <option label="24 hours" value="object:39">24 hours</option>
                    <option label="48 hours" value="object:39">48 hours</option>
                    <option label="3 days" value="object:39">3 days</option>
                    <option label="4 days" value="object:39">4 days</option>
                    <option label="5 days" value="object:39">5 days</option>
                    <option label="6 days" value="object:39">6 days</option>
                    <option label="7 days" value="object:39">7 days</option>
                    <option label="10 days" value="object:39">10 days</option>
                    <option label="14 days" value="object:39">14 days</option>
                </select>
                <br />
                <br />
                <h3>Total : <span>{this.state.total}</span> </h3>
            </div>
        );
    }
}

export default Calculator;
