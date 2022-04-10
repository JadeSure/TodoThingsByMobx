import React, { Component, useState } from 'react'
import './index.css'
import styled from "styled-components";
import todosListStore from '../../store/todosListStore'
import {Button, ButtonDanger} from '../styles/Button.styled'

export const StyledItem = styled.span`
    text-decoration: ${({status})=> status? "line-through" : 'none'};
    opacity: ${({status})=> status? 0.5 : 1};
`

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
                    <StyledItem status={todo.done}>{todo.name}</StyledItem>
                </label>
                <ButtonDanger style={{display: hover ? 'block': 'none'}}onClick={()=>handleDelete(todo.id)}>Delete</ButtonDanger>
            </li>
        
    )
}

export default Item;