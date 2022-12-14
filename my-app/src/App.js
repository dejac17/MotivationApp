import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleCheck, faPen, faTrashCan,
} from '@fortawesome/free-solid-svg-icons'
import { createTodo, deleteTodo, loadTodos, updateTodo }from './services/todoServices'
import './App.css';
import { Button } from 'antd'
import { TodoList } from './components/TodoList';




function App() {
  return(
    <div >
        <TodoList/>
        <h1>hey</h1>
    </div>
  )





}


export default App;
