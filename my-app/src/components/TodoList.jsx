import React, {useEffect, useState, useCallback} from 'react';
import { Tabs, Layout, Row, Col, Input, message} from 'antd';
import './TodoList.css'
import './TodoForm'
import { createTodo, deleteTodo, loadTodos, updateTodo }from './services/todoServices'


 export const TodoList = () => {
    // States
    const [todos, setTodos] = useState([]);
    const [notDoneTodos, setNotDoneTodos] = useState([]);
}

const handleFormSubmit = async (todo) => {
    await createTodo(todo)
}