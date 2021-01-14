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
      <Education className='education' key={index} ref={this.educationRefList[index]}/>
    );
  }

  addExperience() {
    this.setState({addExperience: true,});
    this.experienceRefList.push(React.createRef());
    this.experienceElements = this.experienceRefList.map((tempRef, index) => 
      <Experience className='experience' key={index} ref={this.experienceRefList[index]}/>
    );
  }


  render() {
    return (
      <div id="app">
        <h1>Resume Builder</h1>
        <form>
          <Info className='info' ref={this.infoElements[0]}/>
          <button  className='submit' type="button" onClick={() => this.submit(this.infoElements, true)} id="submitInfo">Submit</button>
          <button className='edit' type="button" onClick={() => this.submit(this.infoElements, false)} id="editInfo">Edit</button>
        </form>
        <form>
          <h2>Education</h2>
          <button className='submit' type="button" onClick={() => this.submit(this.educationRefList, true)} id="submitEducation">Submit</button> 
          <button className='add' type="button" onClick={this.addEducation} id="addEducation">Add</button>
          <button className='edit' type="button" onClick={() => this.submit(this.educationRefList, false)} id="editEducatthis.educationRefListion">Edit</button>
            <ul>
              {this.educationElements}
            </ul>
        </form>
        <form>
          <h2>Experience</h2>
          <button className='submit' type="button" onClick={() => this.submit(this.experienceRefList, true)} id="submitExperience">Submit</button>
          <button className='add' type="button" onClick={this.addExperience} id="addExperience">Add</button>
          <button className='edit' type="button" onClick={() => this.submit(this.experienceRefList, false)} id="editExperience">Edit</button>
            <ul>
              {this.experienceElements}
            </ul>
        </form>
      </div>
    );
  }
}
export default App;


