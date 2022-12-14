import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './App.css';





function App() {

  // States
  const[toDo, setToDO] = useState([
    {"id": 1, "title": "Task 1", "status": false},
    {"id": 1, "title": "Task 2", "status": false},
  ]);

  const [newTask, setNewTask] = ("")
  const [updateTask, setUpdateTask] = ("")


  return(
    <div className= "container App">

        <h1>Motivational Todo</h1>
    </div>
  )





}


export default App;
