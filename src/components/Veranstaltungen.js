import React, {Component} from 'react'
import './Components.css';
import Todos from "./Todos.js";
import $ from 'jquery';
import AddProject from './AddProject';


/*const Veranstaltungen = () => (
  <div>
  <h2>Veranstaltungen</h2>
  <hr />
  <p className="App-intro">
    Hier können Sie Ihre Vorlesungen und Veranstaltungen der HFU nachsehen.
  </p>
  </div>
);*/

class Veranstaltungen extends Component {

constructor(){
  super();
  this.state = {
    id: '0',
    name: 'xxx',
    projects:[],
    todos:[]
  }
}

getTodos(){
  $.ajax({
    url:'https://jsonplaceholder.typicode.com/todos',
    dataType: 'json',
    cache: false,
    success: function(data){
        this.setState({todos:data}, function(){
          console.log(this.state)
        });
    }.bind(this),
    error: function(xhr,status,err){
      console.log(err);
    }
  });

}

componentWillMount(){
   this.getTodos();
}

componentDidMount(){

  this.getTodos();

}

handleDeleteTodo(id){
  let todos = this.state.todos;
  let index = todos.findIndex(x=>x.id === id);
  console.log('index:');
  console.log(this.state.todos[0].title);
  todos.splice(index, 1);
  this.setState({todos:todos});
  }

  handleAddProject(todo){
    console.log(todo);
    let todos = this.state.todos;
    todos.push(todo);
    this.setState({todos:todos});
  }

  handleUpdateProject(project){
    console.log(project);
  
  
  
    //console.log(project);
    let todos = this.state.todos;
    console.log('Todos:');
    console.log(todos);
    console.log('State id:');
    console.log(this.state.id);
    console.log('Todo title:');
    console.log(todos[this.state.id].title);
  
    todos[this.state.id].title=project.title;
    this.setState({todos:todos});
  
    //projects.push(project);
    //this.setState({projects:projects});
    
    //this.todos[this.state.id].title=this.state.projects.title;
    
    /*let projects = this.state.projects;
    projects.push(project);
    this.setState({projects:projects});*/
  }


  handleChangeTodo(id){
    let todos = this.state.todos;
    let index = todos.findIndex(x=>x.id === id);
    console.log('index:');
    console.log(this.state.todos[index].title);
    let anzahl=this.state.todos[index].id;
    
  
    this.setState({
      id: index,
      name: this.state.todos[index].title
    }, function(){
      //console.log(this.state);
      this.refs.child.handleGibaus(this.state.name);
    }
    );
  
  
    
  
  }


render() {
  return(

    <div>
    
    <AddProject ref="child"  addProjectXXX={this.handleAddProject.bind(this)} updateProjectXXX={this.handleUpdateProject.bind(this)}  name={this.state.name}  test="Hello World" />

    <Todos onChange={this.handleChangeTodo.bind(this)} onDelete={this.handleDeleteTodo.bind(this)} todos={this.state.todos}  />

    </div>

  );
}
}

export default Veranstaltungen;
