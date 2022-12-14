import React, {useState} from "react";
import {Popconfirm, Switch, Tag, Tooltip, Button, List} from 'antd'
import {Cl} from '@ant-design/icons';

export const Todo = ({ todo,}) => {

    return(
        <List.Item>
            <div className="todo-item">
                {todo.title}
            </div>
        </List.Item>
    )
}