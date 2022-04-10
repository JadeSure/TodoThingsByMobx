import React from 'react'
import './index.css'
import todosListStore from '../../store/todosListStore'
import { observer } from 'mobx-react-lite';
import {Button, ButtonDanger} from '../styles/Button.styled'


function Footer() {

    const handleStatus =(event) => {
        todosListStore.updateAll(event.target.checked)
    }

    const deleteAllFinished = () => {
        todosListStore.deleteAllFinished()
    }

    const finished = (event) =>{
        todosListStore.changeFilter(event.target.value)
    }
    
        return (
            <div className="todo-footer">
                <div className="todo-wrapper">
                    <label htmlFor="status">
                        <input id="status" type="checkbox" onChange={handleStatus} checked={todosListStore.doneCount === todosListStore.totalCount && todosListStore.doneCount!== 0? true: false}/>
                        <span id= "status">{todosListStore.todoCount} items left/total {todosListStore.totalCount}</span>   
                    </label>
                    <Button value="Completed" bg="#1eff00" color="#0c0c0c" onClick={finished}>Completed</Button>
                    <Button value="Active" bg="#4400ff" color="#fff" onClick={finished}>Active</Button>
                    <Button value="All" bg="#00ff95" color="#0c0c0c" onClick={finished}>All</Button>
                    <ButtonDanger onClick={deleteAllFinished}>Clear completed</ButtonDanger>
                </div>
            </div>
        )
    }

export default observer(Footer)
