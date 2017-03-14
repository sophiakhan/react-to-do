import React from 'react';
import Layout from './Layout';
import AddTodo from './AddTodo'
import Todo from './Todo';

class Todos extends React.Component {
    constructor(props) {
        super(props)
        this.getTodos = this.getTodos.bind(this)
        this.addTodo = this.addTodo.bind(this)

        //sets up initial empty state
        this.state = {
            todos: []
        }
    }

    //component will get mounted on pg, fetch will grab actual data
    componentWillMount() {
        this.getTodos()
    }

    getTodos() {
        fetch('/api/v1/todos')
        .then(response => response.json())
        .then(todos => this.setState({todos: todos}))
    }

    addTodo(todo) {
        this.getTodos()
    }

    render() {
        let todos = this.state.todos.map((todo, key) => <Todo key={key} todoId={todo.id} completed={todo.completed} description={todo.todo} category={todo.category} />)

        return <Layout>
            <AddTodo addTodo={this.addTodo} />
            <ul className="list-group">
                {todos}
            </ul>
        </Layout>
    }
}

export default Todos
