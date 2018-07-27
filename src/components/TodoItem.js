import React, {Component} from 'react';

class TodoItem extends Component {

deleteTodo(id){
    console.log('test');
    this.props.onDelete(id);
}

changeTodo(id){
    console.log('test');
    this.props.onChange(id);
}

    render(){
        return (
            <li className="Todos">
                <strong><a href="#" onClick={this.changeTodo.bind(this,this.props.todo.id)}>{this.props.todo.id}.</a> {this.props.todo.title}</strong>: - {this.props.todo.completed} <a href="#" onClick={this.deleteTodo.bind(this,this.props.todo.id)}>X</a>
            </li>
        );
    }
}



export default TodoItem; 
