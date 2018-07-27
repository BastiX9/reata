import React, {Component} from 'react'
import './Components.css';
import Todos from "./Todos.js";
import $ from 'jquery';

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


  handleChangeTodo(id){

  }


render() {
  return(

    <div>

    <Todos onChange={this.handleChangeTodo.bind(this)} onDelete={this.handleDeleteTodo.bind(this)} todos={this.state.todos}  />

    </div>

  );
}
}

export default Veranstaltungen;
