import React, { Component } from 'react'
import Item from '../Item'
import './index.css'
import todosListStore from '../../store/todosListStore'
import {observer} from 'mobx-react-lite'

function List() {
    let todos;
    switch(todosListStore.filter.status){
        case 'All':
            todos = todosListStore.todos
            break
        case 'Completed': 
            todos = todosListStore.todos.filter(todo => todo.done)
            break
        case 'Active':
            todos = todosListStore.todos.filter(todo => !todo.done)
            break
        default:
            todos = todosListStore.todos
    }
        return (
            <div className="todo-main">
                {todos.map(item =>{
                return <Item key={item.id} todo={item}>{item.name}</Item>
          })}
            </div>
        )
    }
export default observer(List);