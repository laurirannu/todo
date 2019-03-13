import React, { Component } from 'react';
import Input from './Input/Input';
import Tasks from './Tasks/Tasks';
import './App.css';

class App extends Component {
  state = {
    tasks: [
     
    ]
  }

  componentDidUpdate(prevState) {
    if (prevState.tasks !== this.state.tasks) {
      window.scrollTo(0, document.body.scrollHeight);
    }
  }

  createTask = (task) => {
    if (task !== ""){
      this.setState((prevState) => {
        return {
          tasks: [...prevState.tasks, {
            text: task
          }],
        }
      });
    }
  }

  render() {
    return (
      <div className="App">
        <Input createTask={this.createTask}/>
        <Tasks tasks={this.state.tasks}/>
      </div>
    );
  }
}

export default App;
