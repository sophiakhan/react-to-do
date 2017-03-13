import React from 'react';

class AddTodo extends React.Component {
    render() {

        return <select class="form-control">
                    <option>Space Supplies</option>
                    <option>Mission Control</option>
                    <option>Engine Check</option>
                    <option>Take Off</option>
                    <option>Spaceship Maintenance</option>
                    <option>Landing</option>
                </select>
    }
}