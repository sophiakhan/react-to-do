import React from 'react';
import Todo from './Todo';

class Todos extends React.Component {
    render() {
        return <ul className="list-group">
            <Todo description="Plant flowers" />
            <Todo description="Go swimming" />
            <Todo description="Swim in the ocean" />
            <Todo description="Pet a bear" />
            <Todo description="Climb a mountain" />
        </ul>
    }
}

export default Todos;
