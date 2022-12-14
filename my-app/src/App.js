import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleCheck, faPen, faTrashCan,
} from '@fortawesome/free-solid-svg-icons'
import { createTodo, deleteTodo, loadTodos, updateTodo }from './services/todoServices'
import './App.css';


function App() {

//  States
const [toDo, setToDo] = useState([]);
const [newTask, setNewTask] = useState([]);
const [updateData, setUpdateData] = useState([])

// Add Task

// Delete Task

// Mark task as done

// Cancel update

// Change Task for update

// Update Task

  return (
    <div className="container App">
      <h2>Motivational To-do List App zx</h2>
      {/*  */}
      {toDo && toDo.length ? '' : 'No Tasks Added'}
      
    </div>
  );
}

export default App;
