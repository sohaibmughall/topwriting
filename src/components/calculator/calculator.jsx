import React, { Component } from 'react';
import './calculator.css';

class Calculator extends Component {
    render() {
        return (
            <div class="field_item field_service">
                <label for="customer_order_service_id">Type of service</label>
                <select id="customer_order_service_id">
                    <option label="Academic paper writing" value="object:36" selected="selected">Academic paper writing</option>
                    <option label="Rewriting" value="object:37">Rewriting</option>
                    <option label="Math/Physic/Economic/Statistic Problems" value="object:38">Math/Physic/Economic/Statistic Problems</option>
                    <option label="Proofreading" value="object:39">Proofreading</option>
                    <option label="Editing" value="object:40">Editing</option>
                    <option label="Copywriting" value="object:41">Copywriting</option>
                    <option label="Admission Services" value="object:42">Admission Services</option>
                    <option label="Dissertation services" value="object:43">Dissertation services</option>
                    <option label="Resume/CV services" value="object:44">Resume/CV services</option>
                    <option label="Multiple Choice Questions" value="object:45">Multiple Choice Questions</option>
                </select>
            </div>
        );
    }
}

export default Calculator;
