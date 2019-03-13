import React from 'react';
import './Tasks.css';

class Tasks extends React.Component {
    renderTask = (task, key) => {
        const { text } = task;
        return (
            <li className="task" key={key}>
                <button className="delete-button" onClick={() => this.deleteTask(key)}>
                    <img src={require("../Icons/delete.svg")} alt="delete" />
                </button>
                <p>{text}</p>
            </li>
        )
    }

    deleteTask = (key) => {
        const { tasks } = this.props;
        let array = tasks;
        array.splice(key, 1);
        this.setState({
            tasks: array
        })
    }

    render() {
        const { tasks } = this.props;
        return (
            <ul className="tasks-wrapper">
                {tasks.map((t, key) => this.renderTask(t, key))}
            </ul>
        )
    }
}

export default Tasks;