import React, {useEffect, useState, useCallback} from 'react';
import { Tabs, Layout, Row, Col, Input, message} from 'antd';
import './TodoList.css'
import { createTodo, deleteTodo, loadTodos, updateTodo }from '../services/todoServices'
import  TodoForm  from './TodoForm';


 export const TodoList = () => {
    // States
    const [todos, setTodos] = useState([]);
    const [notDoneTodos, setNotDoneTodos] = useState([]);
    const [completedTodos,setCompletedTodos] = useState([])
    const [refreshing, setRefreshing] = useState([]);
}

const handleFormSubmit = async (todo) => {
    await createTodo(todo)
}

const handleRemoveTodo = async (todo) => {
    await deleteTodo(todo.id)
}

const handleToggleTodoStatus = async (todo) => {
    todo.completed = !todo.completed;
    await updateTodo(todo)
}
// Fetching Todos
const refresh = () => {
    loadTodos()
    .then(json => {
        setTodos(json);
        setNotDoneTodos(json.fiter(todo => todo.completed === false));
        setCompletedTodos(json.fiter(todo => todo.completed === true));
    });
}

const onRefresh = useCallback( async () => {
    setRefreshing(true);
    let data = loadTodos;
    setTodos(data)
    setNotDoneTodos(json.fiter(todo => todo.completed === false));
    setCompletedTodos(json.fiter(todo => todo.completed === true));
    setRefreshing(false);
    console.log('Refresh state', refreshing);


useEffect(() => {
  refresh();  
}, [onRefresh]);

return(
    <Layout className='layout'>
        <Content style={{padding: '0 50px'}}>
            <div className='todolist'>
                <Row>
                    <Col span={14} offset={5}>
                        <h1>Motivational Todos</h1>
                        <TodoForm onFormSubmit={handleSubmit}/>
                    </Col>
                </Row>

            </div>
        </Content>
    </Layout>
    )
})