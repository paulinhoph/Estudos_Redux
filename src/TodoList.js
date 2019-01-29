import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import * as todoActions from './actions/todos';
import  { connect } from 'react-redux';

class TodoList extends Component {
    constructor(props){
        super(props);


        console.log(props);
    }
    state = {
        newTodoText: '',
    }
    addNewTodo = () => {
        this.props.addTodo(this.state.newTodoText);

        this.setState({ newTodoText: '' });
    };
    render(){
        return(
            <div>
                <ul>
                    { this.props.todos.map(todo => (
                         <li key={todo.id}>{todo.text}</li>
                    ))}
                </ul>

                <input value={this.state.newTodoText}
                    type="text"
                     onChange={ (e) => this.setState({ newTodoText: e.target.value })} />
                <button onClick={this.addNewTodo}>Novo todo</button>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    todos: state.todos,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(todoActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);