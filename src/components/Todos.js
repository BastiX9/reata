import React, {Component} from 'react';
import '../App.css';
import TodoItem from './TodoItem';

class Todos extends Component {

    deleteTodo(id){
        this.props.onDelete(id);
    }

    changeTodo(id){
        this.props.onChange(id);
    }


    render(){

        let todoItems;
        if(this.props.todos){
            todoItems = this.props.todos.map(todo =>{
                //console.log(project);
                return (
                    <TodoItem onDelete={this.deleteTodo.bind(this)} onChange={this.changeTodo.bind(this)} key={todo.title} todo={todo} />
                );


            });
        }

        //console.log(this.props);
        return (
            <div className="Todos">
                <h3>Lastest Todos</h3>
                {todoItems}

            </div>
        );
    }
}



export default Todos; 
