import React, { Component } from "react";
import  './Components.css';

class Experience extends Component {
    constructor() {
        super();

        this.state = {
            disabled: false,
        };
    }

    setDisabled = (toSet) => {
        this.setState({
            disabled: toSet,
        });
    }
    render() {
        return (
            <div {...this.props}>
                <input type="text" id="company" placeholder="Company" disabled={this.state.disabled}></input>
                <input type="text" id="position" placeholder="Position" disabled={this.state.disabled}></input>
                <input type="text" className="dateStarted" placeholder="Date Started" disabled={this.state.disabled}></input>
                <input type="text" className="dateEnded" placeholder="Date Ended" disabled={this.state.disabled}></input>
                <textarea className="description" placeholder="Enter some more information" disabled={this.state.disabled}></textarea>
            </div>
        );
    }

}


export default Experience;