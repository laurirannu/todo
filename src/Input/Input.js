import React from 'react';
import './Input.css'

class Input extends React.Component {
    state = {
        text: ""
    }

    onChange(e) {
        this.setState({ text: e.target.value });
    }

    submitHandler(e) {
        e.preventDefault();
        this.setState({text: ""});
        this.props.createTask(this.state.text);
    }

    render() {
        return(
            <form className="input-wrapper" onSubmit={e => this.submitHandler(e)}>
               <input className="input"
                placeholder="Give me a task"
                onChange={e => this.onChange(e)}
                value={this.state.text}/>
               <button className="input-button" type="submit">Submit task!</button> 
            </form>
        )
    }
}

export default Input;