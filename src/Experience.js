import React, { Component } from "react";

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
                <input type="text" id="dateStarted" placeholder="Date Started" disabled={this.state.disabled}></input>
                <input type="text" id="dateEnded" placeholder="Date Ended" disabled={this.state.disabled}></input>
                <input type="text" id="position" placeholder="position" disabled={this.state.disabled}></input>
                <input type="text" id="description" placeholder="Enter some more information" disabled={this.state.disabled}></input>
            </div>
        );
    }

}


export default Experience;