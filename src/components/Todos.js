import React from 'react';
import Layout from './Layout';
import AddTodo from './AddTodo'
import Todo from './Todo';
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

class Todos extends React.Component {
    constructor(props) {
        super(props)
        // binds custom methods to this object context 
        this.getTodos = this.getTodos.bind(this)
        this.addTodo = this.addTodo.bind(this)
        this.toggleTodoComplete = this.toggleTodoComplete.bind(this)

        //sets up initial empty state
        // this.state = {
        //     todos: []
        // }
    }

    toggleTodoComplete(todoId, isComplete) {
        if (isComplete) {
            fetch(`/api/v1/todos/${todoId}/complete`)
            .then(this.getTodos)
        }
        else {
            fetch(`/api/v1/todos/${todoId}/incomplete`)
            .then(this.getTodos)
        }
    }

    //component will get mounted on pg, fetch will grab actual data
    componentWillMount() {
        this.getTodos()
    }

    getTodos() {
        fetch('/api/v1/todos')
        .then(response => response.json())
        .then(todos => this.props.dispatch({type: 'TODOS_UPDATE', body: todos}))
    }

    addTodo(todo) {
        this.getTodos()
    }

    render() {
        let todos = this.props.sharedTodos.map((todo, key) => <Todo key={key} toggleTodoComplete={this.toggleTodoComplete} id={todo.id} completed={todo.completed} description={todo.todo} category={todo.category} />)

        return <Layout>
            <AddTodo addTodo={this.addTodo} />
            <ul className="list-group">
                {todos}
            </ul>
            <button className="btn btn-default" type="button" onClick={() => browserHistory.push('/completed')}>View Completed Todos</button> 
        </Layout>
    }
}

// Map shared Redux state to props
const mapStateToProps = (redux) => {
    return {
        sharedTodos: redux.state.todos
    }
}

// Export the component, connected to Redux, for other components to import
export default connect(mapStateToProps)(Todos)

