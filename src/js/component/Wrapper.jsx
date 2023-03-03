import React, { useEffect, useState } from 'react'
import List from './List.jsx'
import Header from './Header.jsx'
import "./Wrapper.css"
import { v4 as uuidv4 } from 'uuid';
import { fetchTasks, updateTasks } from '../logic.js';
import DeleteAll from './DeleteAll.jsx';

const Wrapper = () => {
    const [toDoList, setToDoList] = useState([]);

    useEffect(() => {
        fetchTasks().then((resp) => {
            return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
        }).then((result) => {
            setToDoList(result)
        }).catch((err) => console.log(err)) 
    },[])

    const addToDoHandler = (toDo) => {
        const updatedTasks = [ ...toDoList, { label: toDo, done: false, id: uuidv4() }]

        updateTasks(updatedTasks).then(() => {
            setToDoList(updatedTasks)
        }).catch((err) => console.log(err))
    }
  
    const removeToDoHandler = (id) => {
        const filteredToDos = toDoList.filter(el => el.id !== id)
        
        updateTasks(filteredToDos).then(() => {
            setToDoList(filteredToDos)
        }).catch((err) => console.log(err))
    }

    const markDoneHandler = (id, value) => {
        const updatedToDos = toDoList.map(el => el.id === id ? { ...el, done: value } : el)

        updateTasks(updatedToDos).then(() => {
            setToDoList(updatedToDos)
        }).catch((err) => console.log(err))
    }

    const deleteAllTasksHandler = () => (
        updateTasks([]).then(() => {
            setToDoList([])
        }).catch((err) => console.log(err))
    )

  return (
    <div className='wrapper'>
        <Header/>
        <List onAddToDo={addToDoHandler} tasks={toDoList} onRemoveTask={removeToDoHandler} onMarkDone={markDoneHandler}/>
        <DeleteAll onDeleteAllTasks={deleteAllTasksHandler} />
    </div>
  )
}

export default Wrapper