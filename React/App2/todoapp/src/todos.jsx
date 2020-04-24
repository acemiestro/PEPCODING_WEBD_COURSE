import React, { Component } from 'react';
const Todos = (props) => {
    let {tasks, deleteTask} = props
    return (
        <ul className = "list-group">
            {
                tasks.map((task) => {
                    return<li classname = "list-group-item" onClick = {() => {
                        deleteTask(task)}} key = {task["_id"]}>{task.task}</li>
                })
            }
        </ul>
    );
}
 
export default Todos;