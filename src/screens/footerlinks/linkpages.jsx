import React, { Component } from 'react'
import Pages from '../../components/pages/pages'

export default class Linkpages extends Component {
    render() {
    console.log(this.props.match.params);
        return (
            <div>
               <Pages pageHeading="" /> 
            </div>
        )
    }
}
