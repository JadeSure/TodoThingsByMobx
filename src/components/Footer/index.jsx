import React from 'react'
import './index.css'
import todosListStore from '../../store/todosListStore'
import { observer } from 'mobx-react-lite';


function Footer() {

    const handleStatus =(event) => {
        todosListStore.updateAll(event.target.checked)
       
    }

    const deleteAllFinished = () => {
        todosListStore.deleteAllFinished()
    }

    // const finished = () =>{
    //     todosListStore.getFinished()
    // }
    
        return (
            <div className="todo-footer">
                <div className="todo-wrapper">
                <label htmlFor="status">
                    <input id="status" type="checkbox" onChange={handleStatus} checked={todosListStore.doneCount === todosListStore.totalCount && todosListStore.doneCount!== 0? true: false}/>
                    <span id= "status">{todosListStore.todoCount} items left/total {todosListStore.totalCount}</span>   
                </label>
                {/* <button className="btn" onClick={finished}>Completed</button> */}
                <button className="btn btn-danger" onClick={deleteAllFinished}>Clear completed</button>
                </div>
            </div>
        )
    }

export default observer(Footer)
