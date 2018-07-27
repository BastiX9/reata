import React, { Component } from 'react';
import uuid from 'uuid';
import '../App.css';


class AddProject extends Component {
  constructor(){
    super();
    this.state = {
      name: "",
      newProject:{}
    }
  }

  static defaultProps = {
    categories: ['Aufgabe 1', 'Aufgabe 2', 'Aufgabe 3', 'Aufgabe 4', 'Aufgabe 5']
  }

  handleUpdate(e){
    console.log("Update");
    e.preventDefault();
    if(this.refs.title.value===''){
        alert('Title is required');
        //console.log(this.refs.title.value);
    } else {
        this.setState({newProject:{
            id: '0',
            title: this.refs.title.value,
            category: this.refs.category.value

        }}, function(){
            //console.log(this.state);
            this.props.updateProjectXXX(this.state.newProject);
        });
    }
}

  handleSubmit(e){
    if(this.refs.title.value === ''){
      alert('Geben Sie einen Titel ein.');
    } else {
      this.setState({newProject:{
        id: uuid.v4(),
        title: this.refs.title.value,
        category: this.refs.category.value
      }}, function(){
        //console.log(this.state);
        this.props.addProjectXXX(this.state.newProject);
      });
    }
    e.preventDefault();
  }


  handleGibaus(namex){
    this.state.name=namex;
    console.log(namex);
    console.log("ffun");

}

handleChange(e){
    //this.setState({inputValue: e.target.value});
    this.setState({
        name: this.refs.title.value
    });
    //this.props.name="hands";
    console.log(this.refs.title.value);
    //console.log(this.value);
}

  render() {
    let categoryOptions = this.props.categories.map(category => {
      return <option key={category} value={category}>{category}</option>
    });
    return (
      <div className="AddProject">
        <h3>Aufgabe hinzufügen</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Titel</label><br />
            <input type="text" ref="title" value={this.state.name} onChange={this.handleChange.bind(this)} />
          </div>
          <br />
          <div>
            <label>Aufgaben</label><br />
            <select ref="category">
              {categoryOptions}
            </select>
          </div>
          <br />
          <input id="changethis" type="submit" value="Absenden" />
          <div id="changethis" onClick={this.handleUpdate.bind(this)}>Ändern</div>
          <br />
        </form>
      </div>
    );
  }
}


export default AddProject;
