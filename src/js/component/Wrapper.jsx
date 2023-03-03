import React, { useState } from 'react'
import List from './List.jsx'
import Header from './Header.jsx'
import "./Wrapper.css"
import { v4 as uuidv4 } from 'uuid';

const Wrapper = () => {
  const [toDoList, setToDoList] = useState([]);

  const addToDoHandler = (toDo) => setToDoList([ ...toDoList, { task: toDo, id: uuidv4() }])

  const removeTaskHandler = (key) => {
    const filteredToDos = toDoList.filter(el => el.id !== key)
    setToDoList(filteredToDos)
  }
  return (
    <div className='wrapper'>
        <Header/>
        <List onAddToDo={addToDoHandler} tasks={toDoList} onRemoveTask={removeTaskHandler}/>
    </div>
  )
}

export default Wrapper