import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleCheck, faPen, faTrashCan,
} from '@fortawesome/free-solid-svg-icons'
import {createTodo, deleteTodo, loadTodos, updateTodo}from './services/todoServices';
import './App.css';


function App() {

//  States
const [toDo, setToDo] = useState([]);

  return (
    <div className="container App">
      <h2>Motivational To-do List App</h2>
    </div>
  );
}

export default App;
