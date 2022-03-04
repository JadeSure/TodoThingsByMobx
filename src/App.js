
   
import logo from './logo.svg';
import './App.css';

import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer';
import React from 'react'
import todosListStore from './store/todosListStore';
import  {observer} from 'mobx-react-lite'

function App() {

    return (
      <div className="todo-container">
            <Header />
        <div className = "todo-wrap">
            <List />
          <Footer />
        </div>
      </div>
    )
  }

  export default observer(App);