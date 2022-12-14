import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleCheck, faPen, faTrashCan,
} from '@fortawesome/free-solid-svg-icons'
import { createTodo, deleteTodo, loadTodos, updateTodo }from './services/todoServices'
import './App.css';

const baseUrl = `${process.env.REACT_APP_API_URL}/todos`;



function App() {

//  States
const [toDos, setToDos] = useState([]);
const [newTask, setNewTask] = useState([]);
const [updateData, setUpdateData] = useState([]);
const [refreshing, setRefreshing] = useState(false);
const [completedTodos, setCompletedTodos] = useState([]);


// Get All Todos

{/* Displaying Todos */}



}


export default App;
