import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleCheck, faPen, faTrashCan,
} from '@fortawesome/free-solid-svg-icons'
import './App.css';

const baseUrl = `${process.env.REACT_APP_API_URL}/todos`;
function App() {

 

  return (
    <div className="container App">
      <h2>Motivational To-do List App</h2>
    </div>
  );
}

export default App;
