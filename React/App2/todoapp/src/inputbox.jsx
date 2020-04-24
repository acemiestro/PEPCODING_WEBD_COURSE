import React, { Component } from 'react';
class InputBox extends Component {
    state = {
        newTask: ""
    }
    handleInput = (e) => {
        this.setState({
            newTask: e.currentTarget.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        if(this.state.newTask === "")
            return
            
        this.props.addTask(this.state.newTask)
        this.setState({newTask: ""})
    }

    render() { 
        return (
            <form onSubmit = {this.handleSubmit}>
                <label htmlFor = "Task"></label>
                <input onChange = {this.handleInput} value = {this.state.newTask} type = "text" />                
            </form>
        );
    }
}
 
export default InputBox;