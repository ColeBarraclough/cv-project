import React, { Component } from "react";

class Info extends Component {
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
                <input type="text" id="fname"  placeholder="First Name" disabled={this.state.disabled}></input>
                <input type="text" id="lname"  placeholder="Last Name" disabled={this.state.disabled}></input>
                <input type="text" id="dob"  placeholder="Date of Birth" disabled={this.state.disabled}></input>
            </div>
        );
    }

}


export default Info;