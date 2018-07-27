import React, { Component } from "react";
import uuid from 'uuid';
import Projects from './Projects';
import AddProject from './AddProject';
import '../App.css';

/*const About = () => (
  <div>
  <p className="App-intro">
      Das ist die About Seite </p>
  </div>
);*/

class Liste extends Component {

  constructor(){
    super();
    this.state = {
      projects: []
    }
  }

  componentWillMount(){
    this.setState({projects: [
      {
      id:uuid.v4(),
      title: 'Aufgabe 1',
      category: 'Erstellung einer Startseite für kommende Aufgaben'
      },
      {
      id:uuid.v4(),
      title: 'Aufgabe 2',
      category: 'Erstellung einer Liste für die Aufgaben'
      },
      {
      id:uuid.v4(),
      title: 'Aufgabe 3',
      category: 'Components'
      }
    ]})
  }

  handleAddProject(project){
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects:projects});
  }

  handleDeleteProject(id){
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index, 1);
    this.setState({projects:projects});
  }

  render() {
    return (

      <div className="Projects">


        <AddProject addProject={this.handleAddProject.bind(this)}/>

        <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)}/>

      </div>

    );
  }
}

export default Liste;
