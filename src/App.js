import React, { Component } from "react";
import './App.css';
import Education from "./Education.js"
import Experience from "./Experience";
import Info from "./Info";


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      addEducation: false,
      addExperience: false,
    };
    
    this.infoElements = [React.createRef()];
    this.educationRefList = [];
    this.educationElements = [];
    this.experienceRefList = [];
    this.experienceElements = [];
    this.submit = this.submit.bind(this);
    this.addEducation = this.addEducation.bind(this);
    this.addExperience = this.addExperience.bind(this);

  }


 submit(currentElements, disabled) {
  for (let i = 0; i < currentElements.length; i++) {
    currentElements[i].current.setDisabled(disabled);
  }
}
  

  addEducation() {
    this.setState({addEducation: true,});
    this.educationRefList.push(React.createRef());
    this.educationElements = this.educationRefList.map((tempRef, index) => 
      <Education key={index} ref={this.educationRefList[index]}/>
    );
  }

  addExperience() {
    this.setState({addExperience: true,});
    this.experienceRefList.push(React.createRef());
    this.experienceElements = this.experienceRefList.map((tempRef, index) => 
      <Experience key={index} ref={this.experienceRefList[index]}/>
    );
  }


  render() {
    return (
      <div>

        <form>
          <Info ref={this.infoElements[0]}/>
          <button type="button" onClick={() => this.submit(this.infoElements, true)} id="submitInfo">Submit</button>
          <button type="button" onClick={() => this.submit(this.infoElements, false)} id="editInfo">Edit</button>
        </form>
        <form>
          <button type="button" onClick={() => this.submit(this.educationRefList, true)} id="submitEducation">Submit</button> 
          <button type="button" onClick={this.addEducation} id="addEducation">Add</button>
          <button type="button" onClick={() => this.submit(this.educationRefList, false)} id="editEducation">Edit</button>
            <ul>
              {this.educationElements}
            </ul>
        </form>
        <form>
          <button type="button" onClick={() => this.submit(this.experienceRefList, true)} id="submitExperience">Submit</button>
          <button type="button" onClick={this.addExperience} id="addExperience">Add</button>
          <button type="button" onClick={() => this.submit(this.experienceRefList, false)} id="editExperience">Edit</button>
            <ul>
              {this.experienceElements}
            </ul>
        </form>
      </div>
    );
  }
}
export default App;


