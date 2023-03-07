import React, {useRef, useState} from 'react'
import ListItem from './ListItem.jsx'
import "./List.css"

const List = ({ tasks, onAddToDo, onRemoveTask, onMarkDone }) => {
  const [enteredToDo, setEnteredToDo] = useState('')
  const [error,setError] = useState({});

  const addToDoHandler = (event) =>{
      event.preventDefault();
      setError({})
      if (enteredToDo.trim().length === 0) {
          setError({
              title: "Invalid Input",
              message: "Please enter a valid name and age"
          });
          return
      }
      onAddToDo(enteredToDo);
      setEnteredToDo('');
  }

    const toDoHandler = (event) => {
    setEnteredToDo(event.target.value) 
    }

  return (
    <div className='form'>
      <form onSubmit={addToDoHandler}>
        <input  size="35" type="text" onChange={toDoHandler} value={enteredToDo} placeholder="What needs to be done?"></input>
        <button type="submit" className='form-AddTaskButton'> Add a Task</button>
      </form>

      {error && <div>
        <h5>{error.title}</h5>
        <p>{error.message}</p>
        </div>}

      {!tasks.length ? <h5>No tasks, add a task</h5> : (
        tasks.map(({ id, label, done })=>(
          <ListItem key={id} id={id} label={label} onRemoveTask={onRemoveTask} onMarkDone={onMarkDone} done={done}/>
        ))
      )} 
    </div>
  )
}

export default List;

