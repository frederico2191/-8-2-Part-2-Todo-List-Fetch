import React, { useEffect, useState } from 'react'
import List from './List.jsx'
import Header from './Header.jsx'
import "./Wrapper.css"
import { v4 as uuidv4 } from 'uuid';

const Wrapper = () => {
    const [toDoList, setToDoList] = useState([]);

    useEffect(() => {
        console.log(toDoList, "here is before the fetch")
        fetch('https://assets.breatheco.de/apis/fake/todos/user/alesanchezr', {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }).then((resp) => {
            return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
        }).then((result) => {
            console.log(result, 'here is after the fetch')
            setToDoList(result)
        }).catch((err) => console.log(err)) 
    },[])

    const addToDoHandler = (toDo) => {
        fetch('https://assets.breatheco.de/apis/fake/todos/user/alesanchezr', {
            method: "PUT",
            body: JSON.stringify([ ...toDoList, { label: toDo, done: false, id: uuidv4() }]),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(() => {
            setToDoList([ ...toDoList, { label: toDo, done: false, id: uuidv4() }])
        }).catch((err) => console.log(err))
    }
  
    const removeToDoHandler = (id) => {
      const filteredToDos = toDoList.filter(el => el.id !== id)
      fetch('https://assets.breatheco.de/apis/fake/todos/user/alesanchezr', {
            method: "PUT",
            body: JSON.stringify(filteredToDos),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(() => {
            setToDoList(filteredToDos)
        }).catch((err) => console.log(err))
    }

    const markDoneHandler = (id, value) => {
        const updatedToDos = toDoList.map(el => {
            return el.id === id ? { ...el, done: value } : el
        })

        console.log('updatedToDos',updatedToDos)

        fetch('https://assets.breatheco.de/apis/fake/todos/user/alesanchezr', {
              method: "PUT",
              body: JSON.stringify(updatedToDos),
              headers: {
                  "Content-Type": "application/json"
              }
          }).then((resp) => {
            return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
        }).then((result) => {
            console.log(result, 'here is after the fetch')
        }).then(() => {
              setToDoList(updatedToDos)
          }).catch((err) => console.log(err))
    }

  return (
    <div className='wrapper'>
        <Header/>
        <List onAddToDo={addToDoHandler} tasks={toDoList} onRemoveTask={removeToDoHandler} onMarkDone={markDoneHandler}/>
    </div>
  )
}

export default Wrapper