// import React, {useEffect, useState, useCallback} from 'react';
// import { Tabs, Layout, Row, Col, Input, message} from 'antd';
// import './TodoList.css'
// import { createTodo, deleteTodo, loadTodos, updateTodo }from '../services/todoServices'
// import  TodoForm  from './TodoForm';
// import TodoTab from './TodoTab';
// const { TabPane } = Tabs;
// const { Content } = Layout;


//  export const TodoList = () => {
//     // States
//     const [todos, setTodos] = useState([]);
//     const [notDoneTodos, setNotDoneTodos] = useState([]);
//     const [completedTodos,setCompletedTodos] = useState();
//     const [refreshing, setRefreshing] = useState(false);


// const handleFormSubmit =  (todo) => {
//     console.log('Todo to create', todo);
//     createTodo(todo).then(onRefresh());
//     message.success('Todo added!');
// }

// const handleRemoveTodo =  (todo) => {
//      deleteTodo(todo.id).then(onRefresh());
//      message.warning('Todo removed');
// }

// const handleToggleTodoStatus = (todo) => {
//     todo.completed = !todo.completed;
//      updateTodo(todo).then(onRefresh());
//      message.info('Todo status updated!');
// }
// // Fetching Todos
// const refresh = () => {
//     loadTodos()
//     .then(json => {
//         setTodos(json);
//         setNotDoneTodos(json.fiter(todo => todo.completed === false));
//         setCompletedTodos(json.fiter(todo => todo.completed === true));
//     }).then(console.log('fetch completed'));
// }

// const onRefresh = useCallback( async () => {
//     setRefreshing(true);
//     let data = loadTodos;
//     setTodos(data)
//     setNotDoneTodos(JSON.fiter(todo => todo.completed === false));
//     setCompletedTodos(JSON.fiter(todo => todo.completed === true));
//     setRefreshing(false);
//     console.log('Refresh state', refreshing);
// }, [refreshing]);


// useEffect(() => {
//   refresh();  
// }, [onRefresh]);

// return(
//     <Layout className='layout'>
//         <Content style={{padding: '0 50px'}}>
//             <div className='todolist'>
//                 <Row>
//                     <Col span={14} offset={5}>
//                         <h1>Motivational Todos</h1>
//                         <TodoForm onFormSubmit={handleFormSubmit}/>
//                         <br/>
//                         <Tabs defaultActiveKey='all'>
//                             {/* First Tab */}
//                             <TabPane tab='All' key='all'>
//                                 <TodoTab todos={todos} onTodoToggle={handleToggleTodoStatus} onTodoRemoval={handleRemoveTodo} />
//                             </TabPane>

//                             <TabPane tab="Active" key='active'>
//                             <TodoTab todos={notDoneTodos} onTodoToggle={handleToggleTodoStatus} onTodoRemoval={handleRemoveTodo} />
//                             </TabPane>

//                             <TabPane tab="Complete" key="complete">
//                             <TodoTab todos={completedTodos} onTodoToggle={handleToggleTodoStatus} onTodoRemoval={handleRemoveTodo} />
//                             </TabPane>
//                         </Tabs>
//                     </Col>
//                 </Row>

//             </div>
//         </Content>
//     </Layout>
//     )
// }
// export default TodoList