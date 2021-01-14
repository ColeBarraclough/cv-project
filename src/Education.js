import React, { Component } from "react";
import './Components.css';
class Education extends Component {
    constructor(props) {
        super(props);

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
            <div  {...this.props}>
                <input type="text" id="school" placeholder="School" disabled={this.state.disabled} ></input>
                <input  type="text" id="graduationType" placeholder="Level of Education" disabled={this.state.disabled}></input>
                <input  type="text" className="dateStarted" placeholder="Date Started" disabled={this.state.disabled}></input>
                <input  type="text" className="dateEnded" placeholder="Date Ended" disabled={this.state.disabled}></input>
                <textarea  className="description" placeholder="Enter some more information" disabled={this.state.disabled}></textarea>
            </div>
        );
    }

}


export default Education;
