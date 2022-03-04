import {makeAutoObservable, computed, observable, action} from 'mobx'
import {v4 as uuidv4} from 'uuid'

class TodosList{
    // define data
    todos=[
        {id: '001', name:'eating', done: true},
        {id: '002', name:'sleeping', done: true},
        {id: '003', name:'learning', done: false}
      ]
    //   count = 0;
    constructor(){
        // response reflection
        makeAutoObservable(this, {
          todos: observable,

          addTodo: action,
          deleteTodo: action,
          deleteAllFinished: action,
          changeStatus: action,

          totalCount: computed,
          doneCount: computed,
          todoCount: computed
        })
    }

    get totalCount(){
      return this.todos.length;
    }
    
    get todoCount(){
      return this.todos.length - this.todos.reduce((pre, current) => pre + (current.done? 1: 0), 0)
    }

    get doneCount(){
     return this.todos.reduce((pre, current) => pre + (current.done? 1: 0), 0) 
    }

    addTodo =(name) => {
        const newTodo = {id: uuidv4(), name, done: false}
        //  this.todos = [newTodo,...this.todos]
        this.todos.push(newTodo);
      }
    
    changeStatus = (id, newStatus)=>{
  
      const newTodos = this.todos.map(value =>{
        if (value.id === id) return {...value, done:newStatus}
        else return value
      })
      this.todos = newTodos;
    }
  
    deleteTodo = (id)=>{
      const newTodos = this.todos.filter((item)=>{
          return item.id !== id
      })
      
      this.todos = newTodos; 
    }
    
      deleteAllFinished = ()=>{
        const newTodos = this.todos.filter((item)=>{
          return !item.done 
        })
        this.todos = newTodos;
      }

      // getFinished = () =>{
      //   const newTodos = this.todos.filter((item)=>{
      //     return !item.done 
      //   })
      //   this.todos = newTodos;
      // }
    
      updateAll = (status)=>{
        const newTodos = this.todos.map((item)=>{
            item.done = status
            return item
        })
        this.todos= newTodos;
      }
    
}

// init
const todosListStore = new TodosList();
export default todosListStore;
