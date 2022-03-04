import React, { Component, useState } from 'react'
import './index.css'
import todosListStore from '../../store/todosListStore'
import {observer} from 'mobx-react-lite'


function Item(props) {
    const {todo} = props
    const [hover, setHover] = useState(false)

    const handleCheck = (id)=>{
        return (event)=>{
            todosListStore.changeStatus(id, event.target.checked)
        }
    }

    const handleDelete = (id)=>{
        if(window.confirm('Be sure to delete?')){
            todosListStore.deleteTodo(id)
        }
    }


    return (
            <li onMouseEnter= {()=> setHover(true)} onMouseLeave={()=> setHover(false)}>
                <label htmlFor={todo.id}>
                    <input id = {todo.id} type="checkbox" checked={todo.done} onChange={handleCheck(todo.id)}/>
                    <span style={{textDecoration:todo.done? 'line-through': 'none'}}>{todo.name}</span>
                </label>
                <button className="btn btn-danger"  style={{display: hover ? 'block': 'none'}}onClick={()=>handleDelete(todo.id)}>Delete</button>
            </li>
        
    )
}

export default Item;