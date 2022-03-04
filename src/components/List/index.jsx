import React, { Component } from 'react'
import Item from '../Item'
import './index.css'
import todosListStore from '../../store/todosListStore'
import {observer} from 'mobx-react-lite'

function List() {
        return (
            <div className="todo-main">
                {/* {
                    todosListStore.todos.map(todo =>{
                        return <Item todo={todo} key={todo.id}/>
                        // return <Item {...todo} key={todo.id}/>
                    })
                } */}
                {todosListStore.todos.map(item =>{
                return <Item key={item.id} todo={item}>{item.name}</Item>
          })}
            </div>
        )
    }
export default observer(List);