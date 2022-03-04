import React, { Component } from 'react'
import './index.css'
import todosListStore from '../../store/todosListStore'

export default class Header extends Component {
    handlekeyUp = (event)=>{
        const {keyCode, target} = event
        if (keyCode !== 13 || target.value.trim() === "") return

        todosListStore.addTodo(target.value)
        target.value = ""
    }
    render() {
        return (
            <div className="todo-header">
                <input onKeyUp={this.handlekeyUp} type="text" placeholder="Input tasks, 'enter' to confirm" />
            </div>
        )
    }
}