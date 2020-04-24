import React, { Component } from 'react';
import Todos from "./todos.jsx"
import InputBox from "./inputbox.jsx"
class TodoApp extends Component {
    state = {
        tasks:[{
            _id: 1,
            task:"make coffee"
        },~
        {
            _id: 2,
            task: "make tea"
        }]
    }
    deleteTask = (task) => {
        const newtasks = [...this.state.tasks]
        const uptasks = newtasks.filter((m) =>{
            return m !== task
        })
        this.setState({tasks: uptasks})
    }
    addTask = (newTask) =>{
        let obj = {
            _id: this.state.tasks.length + 1,
            task: newTask
        }
        const upArray = [...this.state.tasks]
        upArray.push(obj)
        this.setState({tasks: upArray})
    }
    render() { 
        let {tasks} = this.state
        return(
            <React.Fragment>
                <InputBox addTask = {this.addTask}></InputBox>
                <Todos tasks = {tasks}
                deleteTask = {this.deleteTask}
                ></Todos>
            </React.Fragment>
        )
    }
}
    
export default TodoApp
