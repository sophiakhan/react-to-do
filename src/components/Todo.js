import React from 'react';

class Todo extends React.Component {
    render() {
        return <li className="list-group-item">
            <div className="row">
                <div className="col-xs-6">
                    <div className="checkbox">
                        <label>
                            <input type="checkbox" data-id={this.props.todoId} value={this.props.completed === 'yes' ? 'checked' : ''}/>
                            <span className={this.props.completed === 'yes' ? "done" : ''}> {this.props.description}</span>
                        </label>
                    </div>
                </div>
                <div className="col-xs-6">
                    <div className="checkbox text-right">
                        <div className="label label-default">{this.props.category}</div>
                    </div>
                </div>
            </div>
        </li>
    }
}

export default Todo